import requests
from bs4 import BeautifulSoup
import os
from dataclasses import dataclass
from typing import List, Optional

# Get the directory where the script is located
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
# Create output directory path under documentation folder
OUTPUT_DIR = os.path.join(SCRIPT_DIR, "SimVars Documentation")

@dataclass
class Section:
    """Represents a section of the documentation"""
    title: str
    description: str
    table_data: List[str]

@dataclass
class Document:
    """Represents the full documentation page"""
    title: str
    description: str
    sections: List[Section]

def fetch_page(url: str) -> BeautifulSoup:
    """Fetch and parse the HTML page"""
    print("├── Fetching webpage...")
    response = requests.get(url)
    response.raise_for_status()
    return BeautifulSoup(response.text, "html.parser")

def clean_text(text: str) -> str:
    """Clean text by removing special characters and normalizing spaces"""
    # Replace non-breaking spaces and other special spaces
    text = text.replace('\xa0', ' ')  # Remove non-breaking space
    text = text.replace('\u200b', '')  # Remove zero-width space
    text = text.replace('Â', '')      # Remove specific Â character
    
    # Normalize multiple spaces into single space
    text = ' '.join(text.split())
    
    return text.strip()

def extract_header_section(soup: BeautifulSoup) -> tuple[str, str]:
    """Extract the main title and description from the page header"""
    # Find the main title (h2)
    title = ""
    title_elem = soup.find('h2')
    if title_elem:
        title = clean_text(title_elem.get_text())
    
    # Get description (all p tags before first h3)
    description = []
    first_h3 = soup.find('h3')
    if first_h3:
        for p in first_h3.find_previous_siblings('p'):
            text = clean_text(p.get_text())
            if text:
                description.insert(0, text)
    
    return title, "\n".join(description)

def extract_sections(soup: BeautifulSoup) -> List[Section]:
    """Extract all sections from the page"""
    sections = []
    
    # Find all h3 headers
    h3_elements = soup.find_all('h3')
    
    for i, h3 in enumerate(h3_elements):
        # Get section title
        title = clean_text(h3.get_text())
        
        # Find the next h3 or end of content
        next_h3 = h3_elements[i + 1] if i < len(h3_elements) - 1 else None
        
        # Get all content between this h3 and the next
        description = []
        table_data = []
        
        current = h3.next_sibling
        while current and current != next_h3:
            if current.name == 'p':
                text = clean_text(current.get_text())
                if text:
                    description.append(text)
            elif current.name == 'table':
                # Process table
                table_data.extend(process_table(current))
            current = current.next_sibling
        
        # Only add section if it has content
        if description or table_data:
            sections.append(Section(
                title=title,
                description="\n".join(description),
                table_data=table_data
            ))
    
    return sections

def process_table(table) -> List[str]:
    """Convert a table to markdown format"""
    table_data = []
    rows = table.find_all("tr")
    if not rows:
        return table_data
    
    # Process headers
    headers = [clean_text(cell.get_text()) for cell in rows[0].find_all(["th", "td"])]
    if headers:
        table_data.append("| " + " | ".join(headers) + " |")
        table_data.append("| " + " | ".join(["---"] * len(headers)) + " |")
    
    # Process rows
    for row in rows[1:]:
        columns = row.find_all("td")
        if len(columns) >= 2:
            row_data = [clean_text(col.get_text()) for col in columns]
            table_data.append("| " + " | ".join(row_data) + " |")
    
    return table_data

def create_section_markdown(section: Section) -> str:
    """Convert a section to markdown format"""
    lines = []
    
    # Add title and description
    lines.append(f"# {section.title}\n")
    if section.description:
        lines.append(f"{section.description}\n")
    
    # Add table data
    lines.extend(section.table_data)
    
    return "\n".join(lines)

def create_index_markdown(doc: Document) -> str:
    """Create index file for the document"""
    lines = []
    
    # Add title and description
    lines.append(f"# {doc.title}\n")
    if doc.description:
        lines.append(f"{doc.description}\n")
    
    # Add section links
    lines.append("## Sections\n")
    for section in doc.sections:
        safe_name = section.title.replace(' ', '_').replace('/', '_').lower()
        lines.append(f"- [{section.title}]({safe_name}.md)")
    
    return "\n".join(lines)

def scrape_simvars(url: str):
    """Main function to scrape SimVars documentation"""
    # Create output directory
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    
    print(f"\nProcessing: {os.path.basename(url)}")
    
    # Fetch and parse page
    soup = fetch_page(url)
    
    # Extract document parts
    title, description = extract_header_section(soup)
    sections = extract_sections(soup)
    
    # Create document
    doc = Document(title=title, description=description, sections=sections)
    
    # Create document folder
    base_name = os.path.basename(url).replace('.htm', '').replace('.html', '')
    doc_folder = os.path.join(OUTPUT_DIR, f"SimVars - {base_name}")
    os.makedirs(doc_folder, exist_ok=True)
    
    print("└── Creating files...")
    
    # Create index file
    index_path = os.path.join(doc_folder, "index.md")
    with open(index_path, "w", encoding="utf-8") as f:
        f.write(create_index_markdown(doc))
    print(f"    ├── Created index file")
    
    # Create section files
    for section in doc.sections:
        safe_name = section.title.replace(' ', '_').replace('/', '_').lower()
        section_path = os.path.join(doc_folder, f"{safe_name}.md")
        with open(section_path, "w", encoding="utf-8") as f:
            f.write(create_section_markdown(section))
        print(f"    ├── Created section: {safe_name}")
    
    print(f"    └── All files saved in: {os.path.basename(doc_folder)}")

URLS = [
    "https://docs.flightsimulator.com/html/Programming_Tools/SimVars/Aircraft_SimVars/Aircraft_AutopilotAssistant_Variables.htm",
        "https://docs.flightsimulator.com/html/Programming_Tools/SimVars/Aircraft_SimVars/Aircraft_Brake_Landing_Gear_Variables.htm",
        "https://docs.flightsimulator.com/html/Programming_Tools/SimVars/Aircraft_SimVars/Aircraft_Control_Variables.htm",
        "https://docs.flightsimulator.com/html/Programming_Tools/SimVars/Aircraft_SimVars/Aircraft_Electrics_Variables.htm",
        "https://docs.flightsimulator.com/html/Programming_Tools/SimVars/Aircraft_SimVars/Aircraft_Engine_Variables.htm",
        "https://docs.flightsimulator.com/html/Programming_Tools/SimVars/Aircraft_SimVars/Aircraft_FlightModel_Variables.htm",
        "https://docs.flightsimulator.com/html/Programming_Tools/SimVars/Aircraft_SimVars/Aircraft_Fuel_Variables.htm",
        "https://docs.flightsimulator.com/html/Programming_Tools/SimVars/Aircraft_SimVars/Aircraft_Misc_Variables.htm",
        "https://docs.flightsimulator.com/html/Programming_Tools/SimVars/Aircraft_SimVars/Aircraft_RadioNavigation_Variables.htm",
        "https://docs.flightsimulator.com/html/Programming_Tools/SimVars/Aircraft_SimVars/Aircraft_System_Variables.htm",
        "https://docs.flightsimulator.com/html/Programming_Tools/SimVars/Helicopter_Variables.htm",
        "https://docs.flightsimulator.com/html/Programming_Tools/SimVars/Simulation_Variable_Units.htm",
        "https://docs.flightsimulator.com/html/Programming_Tools/Environment_Variables.htm"

        ]
# Main execution
print("Starting SimVar documentation scraper...")
print(f"Output directory: {OUTPUT_DIR}")
print(f"Processing {len(URLS)} documentation pages...")

for i, url in enumerate(URLS, 1):
    print(f"\n[{i}/{len(URLS)}]", end=" ")
    try:
        scrape_simvars(url)
    except Exception as e:
        print(f"Error processing {url}: {str(e)}")

print("\nAll files have been processed successfully!")
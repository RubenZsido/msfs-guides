# NavSources Documentation

## Overview

NavSources is a system for managing different navigation sources (NAV, TACAN, GPS, etc.) in MSFS2020. It provides a centralized way to handle navigation data and source switching.

## Key Components

### NavSourceBase
Base class for all navigation sources that implements common navigation fields:

- Bearing
- Course
- Distance 
- Lateral/Vertical Deviation
- Ident
- Active Frequency
- Navigation Status

### Available Nav Sources

1. **NavRadioNavSource**
   - Handles VOR/ILS navigation
   - Provides localizer and glideslope data
   - Manages DME information

2. **TacanNavSource** 
   - Military tactical air navigation
   - Channel selection and mode control
   - Distance/bearing information

3. **GpsSource**
   - Flight plan navigation
   - LNAV/VNAV guidance
   - Waypoint tracking

4. **AdfRadioSource**
   - Automatic Direction Finding
   - Basic bearing information
   - No distance information

## Implementation Example

```typescript
// Create event bus
const bus = new EventBus();

// Initialize nav sources
const navSources = new NavSources(
  new NavRadioNavSource(bus, 'NAV1', 1),
  new NavRadioNavSource(bus, 'NAV2', 2),
  new TacanNavSource(bus, 'TACAN1', 1),
  new GpsSource(bus, 'GPS', flightPlanner)
);

// Get specific source
const nav1 = navSources.get('NAV1');

// Subscribe to nav data
nav1.bearing.sub((brg) => {
  if (brg !== null) {
    console.log(`Current bearing: ${brg}`);
  }
});
```

## Best Practices

1. **Source Management**
   - Use NavSources class to manage all sources
   - Initialize sources with unique names
   - Handle null values appropriately

2. **Data Subscription**
   - Subscribe to specific fields needed
   - Use null checks for optional data
   - Clean up subscriptions when not needed

3. **Source Switching**
   - Use NavIndicator for source switching
   - Validate source before switching
   - Handle transition states

## Common Fields

All nav sources expose these common fields:

```typescript
interface NavBaseFields {
  bearing: Subject<number | null>;        // Bearing to station/waypoint
  course: Subject<number | null>;         // Selected/desired course
  distance: Subject<number | null>;       // Distance to station/waypoint
  ident: Subject<string | null>;         // Station/waypoint identifier
  hasNav: Subject<boolean | null>;       // Valid navigation signal
  lateralDeviation: Subject<number | null>; // Cross-track deviation
  verticalDeviation: Subject<number | null>; // Vertical path deviation
}
```

## Error Handling

- Check source availability before use
- Handle null values in subscriptions
- Validate source names when switching
- Monitor navigation validity flags

## Related Components

- NavIndicator: For source switching and display
- Publishers: For SimVar data updates
- EventBus: For data distribution
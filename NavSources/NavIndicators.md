# NavIndicators Documentation

## Overview

NavIndicators is a system for managing navigation displays and source switching in MSFS2020. It provides a layer between raw navigation sources and visual indicators, allowing seamless source switching and data handling.

## Key Components

### NavIndicator Base Class
The base class for all navigation indicators that provides:
- Source switching capability
- Data subscription management
- Common navigation fields

### Specialized Indicators

1. **H60CourseNeedleNavIndicator**
   - Manages course needle display
   - Handles VOR/ILS/TACAN sources
   - Automatic source labeling

2. **H60BearingPointer1NavIndicator**
   - Controls white bearing pointer
   - Supports VOR/TACAN/ADF/WPT modes
   - Source labeling and switching

3. **H60BearingPointer2NavIndicator**
   - Controls second bearing pointer
   - Similar functionality to Pointer1
   - Independent source selection

## Implementation Example

```typescript
// Create nav sources
const navSources = new NavSources(
  new NavRadioNavSource(bus, 'NAV1', 1),
  new NavRadioNavSource(bus, 'NAV2', 2),
  new TacanNavSource(bus, 'TACAN1', 1)
);

// Initialize nav indicators
const navIndicators = new NavIndicators(
  new Map([
    ['courseNeedle', new H60CourseNeedleNavIndicator(navSources, bus)],
    ['bearingPointer1', new H60BearingPointer1NavIndicator(navSources, bus)],
    ['bearingPointer2', new H60BearingPointer2NavIndicator(navSources, bus)]
  ])
);

// Get and use an indicator
const courseNeedle = navIndicators.get('courseNeedle');
courseNeedle.setNewSource('TACAN1');

// Subscribe to changes
courseNeedle.bearing.sub((brg) => {
  console.log(`New bearing: ${brg}`);
});
```

## Source Switching

### Available Sources
- NAV1/NAV2 (VOR/ILS)
- TACAN1/TACAN2
- ADF
- WPT (Custom waypoint)
- OFF (Disabled state)

### Source Labels
Indicators automatically update their labels based on source:
- "VOR1"/"VOR2" for NAV in VOR mode
- "ILS" for NAV in localizer mode
- "TACAN1"/"TACAN2" for TACAN
- "OFF" when disabled

## Best Practices

1. **Initialization**
   - Create all nav sources first
   - Initialize indicators with appropriate sources
   - Set up subscriptions early

2. **Source Management**
   - Use setNewSource() for switching
   - Handle OFF state appropriately
   - Monitor source changes

3. **Data Handling**
   - Check for null values
   - Use appropriate null coalescing
   - Clean up subscriptions

## Error Handling

- Validate source names before switching
- Handle missing sources gracefully
- Monitor navigation validity
- Clean up resources properly

## Related Components

- NavSources: Source data providers
- EventBus: Communication backbone
- Publishers: SimVar data updates

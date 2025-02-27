# Publishers

Publishers are components that publish SimVar values to the EventBus. They allow other components to subscribe to SimVar changes rather than polling values directly.

## Overview

Key benefits:

- Reduced CPU usage by centralizing SimVar polling
- Cleaner code through event-driven architecture
- Easier testing and debugging

## Implementation Details

Publishers typically:

1. Define an interface for the events they publish
2. Map SimVars to their corresponding event names
3. Extend SimVarPublisher with the event interface
4. Initialize with an EventBus instance

The SimVarPublisher base class handles:

- Polling SimVars at regular intervals
- Publishing changes to the EventBus
- Managing subscriptions

## Step-by-Step Implementation

1. Declare bus

    ```ts
    protected readonly bus = new EventBus();
    ```

2. Declare publisher

    ```ts
    protected readonly tacanPublisher = new TacanSimVarPublisher(this.bus);
    ```

3. Initialize publisher

    Using Backplane (Recommended)

    ```ts
    protected readonly backplane = new InstrumentBackplane();
    // In your component constructor
    this.backplane.addPublisher(this.tacanPublisher);
    this.backplane.init();

    //Update
    this.backplane.onUpdate()
    ```

    Manual Initialization

    ```ts
    // In Connected callback
    this.tacanPublisher.startPublishing();

    // In Update
    this.tacanPublisher.onUpdate();

    this.tacanPublisher.stopPublishing();
    ```

4. Getting the simvars from the bus

    ```ts
    this.bus.getSubscriber<TacanSimVarEvents>().on('tacan_active_channel_1').handle((value) => {
      console.log('tacan_active_channel_1', value);
      this.tacanValues.activeChannel1 = value;
    });
    ```

    Or you can get them from NavIndicators that automatically handle NavSource switching. See `NavIndicators.md` and `NavSources.md` for more details.

## Best Practices

1. Use Backplane for publisher management
   - Centralizes management
   - Handles lifecycle automatically
   - Reduces boilerplate
   - Easier maintenance
   - Single update call

2. Organize SimVars by system
   - Group related variables
   - Use clear naming conventions
   - Document variable purposes

## Code Examples

### TypeScript Implementation

```ts
import { EventBus, SimVarDefinition, SimVarPublisher, SimVarValueType } from '@microsoft/msfs-sdk';

/**
 * Events published by the TACAN system on the bus.
 */
export interface TacanSimVarEvents {
  /** TACAN active channel for each index */
  tacan_active_channel_1: number;
  tacan_active_channel_2: number;
  // /** TACAN active mode (X/Y) for each index */
  tacan_active_mode_1: boolean;
  tacan_active_mode_2: boolean;
}

export enum TacanSimVars {
  TacanActiveChannel1 = 'TACAN ACTIVE CHANNEL:1',
  TacanActiveChannel2 = 'TACAN ACTIVE CHANNEL:2',
  TacanActiveMode1 = 'TACAN ACTIVE MODE:1',
  TacanActiveMode2 = 'TACAN ACTIVE MODE:2',
}

/** A publisher to poll and publish TACAN simvars. */
export class TacanSimVarPublisher extends SimVarPublisher<TacanSimVarEvents> {
  private static simvars = new Map<keyof TacanSimVarEvents, SimVarDefinition>([
    // i - All TACAN SimVars require an index (1 or 2)
    ['tacan_active_channel_1', { name: TacanSimVars.TacanActiveChannel1, type: SimVarValueType.Number}],
    ['tacan_active_channel_2', { name: TacanSimVars.TacanActiveChannel2, type: SimVarValueType.Number}],
    ['tacan_active_mode_1', { name: TacanSimVars.TacanActiveMode1, type: SimVarValueType.Bool}],
    ['tacan_active_mode_2', { name: TacanSimVars.TacanActiveMode2, type: SimVarValueType.Bool}]
  ]);

  /**
   * Create a TacanSimVarPublisher
   * @param bus The EventBus to publish to
   */
  public constructor(bus: EventBus) {
    super(TacanSimVarPublisher.simvars, bus);
  }
}
```

### JavaScript version

```js
//import necessary files in html, usually msfssdk.js
/**
 * Events published by the TACAN system on the bus.
 */
const TacanSimVarEvents = {
  tacan_active_channel_1: 'number',
  tacan_active_channel_2: 'number',
  tacan_active_mode_1: 'boolean',
  tacan_active_mode_2: 'boolean'
};

const TacanSimVars = {
  TacanActiveChannel1: 'TACAN ACTIVE CHANNEL:1',
  TacanActiveChannel2: 'TACAN ACTIVE CHANNEL:2',
  TacanActiveMode1: 'TACAN ACTIVE MODE:1',
  TacanActiveMode2: 'TACAN ACTIVE MODE:2'
};

/** A publisher to poll and publish TACAN simvars. */
class TacanSimVarPublisher extends SimVarPublisher {
  static simvars = new Map([
    ['tacan_active_channel_1', { name: TacanSimVars.TacanActiveChannel1, type: SimVarValueType.Number }],
    ['tacan_active_channel_2', { name: TacanSimVars.TacanActiveChannel2, type: SimVarValueType.Number }],
    ['tacan_active_mode_1', { name: TacanSimVars.TacanActiveMode1, type: SimVarValueType.Bool }],
    ['tacan_active_mode_2', { name: TacanSimVars.TacanActiveMode2, type: SimVarValueType.Bool }]
  ]);

  /**
   * Create a TacanSimVarPublisher
   * @param {EventBus} bus The EventBus to publish to
   */
  constructor(bus) {
    super(TacanSimVarPublisher.simvars, bus);
  }
}
```

## Troubleshooting

Common issues and solutions:

1. **Verify SimVars with SimVar Watcher first**
   - Use SimVar Watcher in Dev Mode to confirm:
     - SimVar names match exactly as documented in SDK
     - SimVar prefixes are correct (A: for aircraft, L: for local, E: for engine)
     - Values update in real-time when aircraft state changes
     - Units match SDK documentation (degrees, feet, knots etc.)

2. **Publisher not updating**
   - Verify onUpdate is being called
   - Check SimVar names are correct
   - Ensure EventBus is properly initialized

## Performance Optimization

1. **Polling Optimization**
   - Group related SimVars
   - Use appropriate update intervals
   - Consider using different intervals for different variables

2. **Memory Management**
   - Clean up subscribers when components unmount
   - Stop publishers when not needed
   - Use appropriate data types

## Related Resources

- MSFS SDK Documentation
- EventBus Documentation
- SimVar Reference Guide

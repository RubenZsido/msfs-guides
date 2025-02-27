# Batteries

| Simulation Variable | Description | Units | Settable |
| --- | --- | --- | --- |
| BATTERY BREAKER PULLED | This will be true if the battery breaker is pulled. Requires a BUS LOOKUP INDEX and a battery index. | Bool |  |
| BATTERY CONNECTION ON | This will be true if the battery is connected. Requires a BUS_LOOKUP_INDEX and a battery index. | Bool |  |
| ELECTRICAL BATTERY BUS AMPS | Battery bus current | Amperes |  |
| ELECTRICAL BATTERY BUS VOLTAGE | Battery bus voltage | Volts |  |
| ELECTRICAL BATTERY ESTIMATED CAPACITY PCT | Battery capacity over max capacity, 100 is full. | Percent |  |
| ELECTRICAL BATTERY LOAD | The load handled by the battery (negative values mean the battery is receiving current). Use a battery index when referencing. | Amperes |  |
| ELECTRICAL BATTERY VOLTAGE | The battery voltage. Use a battery index when referencing. | Volts |  |
| ELECTRICAL HOT BATTERY BUS AMPS | Current available when battery switch is turned off | Amperes |  |
| ELECTRICAL HOT BATTERY BUS VOLTAGE | Voltage available when battery switch is turned off | Volts |  |
| ELECTRICAL MASTER BATTERY | The battery switch position, true if the switch is ON. Use a battery index when referencing. | Bool |  |
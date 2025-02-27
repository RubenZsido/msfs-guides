# General / Buses

| Simulation Variable | Description | Units | Settable |
| --- | --- | --- | --- |
| BUS LOOKUP INDEX | This is a settable simvar meaning that it can both be read and set. Some of the simvars in this list are using this to lookup a value using two arguments (one argument in addition to the component index). For example to check the state of the connection between a "circuit.45" and the "bus.2" it would be written as follows: 2 (>A:BUS LOOKUP INDEX, Number) (A:CIRCUIT CONNECTION ON:45, Bool) It should be notes that when BUS_LOOKUP_INDEX is not set (ie: it is 0) then TRUE will be returned if any of your bus connections are on. | - |  |
| BUS BREAKER PULLED | This will be true if the bus breaker is pulled. Requires a BUS_LOOKUP_INDEX and a bus index. | Bool |  |
| BUS CONNECTION ON | This will be true if the bus is connected. Requires a BUS_LOOKUP_INDEX and a bus index. | Bool |  |
| ELECTRICAL GENALT LOAD | This returns the percentage of the load output that is being consumed. This requires an alternator index when referencing. | Percent |  |
| ELECTRICAL GENALT BUS AMPS | The load handled by the alternator. This requires an alternator index when referencing. | Amperes |  |
| ELECTRICAL GENALT BUS VOLTAGE | General alternator voltage. This requires an alternator index when referencing. | Volts |  |
| ELECTRICAL MAIN BUS VOLTAGE | The main bus voltage. Use a bus index when referencing. | Volts |  |
| ELECTRICAL AVIONICS BUS AMPS | Avionics bus current | Amperes |  |
| ELECTRICAL AVIONICS BUS VOLTAGE | Avionics bus voltage | Volts |  |
| ELECTRICAL MAIN BUS AMPS | Main bus current | Amperes |  |
| ELECTRICAL OLD CHARGING AMPS | Deprecated, do not use! Use ELECTRICAL BATTERY LOAD. | Amps |  |
| ELECTRICAL TOTAL LOAD AMPS | Total load amps | Amperes |  |
| NEW ELECTRICAL SYSTEM | Is the aircraft using the new Electrical System or the legacy FSX one. | Bool |  |
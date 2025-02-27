---
category: SimVars Documentation
topic: Circuits
description: 
keywords: [Simulation Variable, Description, Units, Settable]
usage_context: Aircraft systems, simulation variables, flight modeling
---

# Circuits

| Simulation Variable | Description | Units | Settable |
| --- | --- | --- | --- |
| CIRCUIT AUTOPILOT ON | Is electrical power available to this circuit | Bool |  |
| CIRCUIT AUTO BRAKES ON | Is electrical power available to this circuit | Bool |  |
| CIRCUIT AUTO FEATHER ON | Is electrical power available to this circuit. Please see the Note On Autofeathering for more information. | Bool |  |
| CIRCUIT AVIONICS ON | Is electrical power available to this circuit | Bool |  |
| CIRCUIT BREAKER PULLED | This will be true if the circuit breaker is pulled. Requires a BUS_LOOKUP_INDEX and a circuit index. | Bool |  |
| CIRCUIT CONNECTION ON | This will be true if the circuit is connected. Requires a BUS_LOOKUP_INDEX and a circuit index. | Bool |  |
| CIRCUIT FLAP MOTOR ON | Is electrical power available to the flap motor circuit | Bool |  |
| CIRCUIT GEAR MOTOR ON | Is electrical power available to the gear motor circuit | Bool |  |
| CIRCUIT GEAR WARNING ON | Is electrical power available to gear warning circuit | Bool |  |
| CIRCUIT GENERAL PANEL ON | Is electrical power available to the general panel circuit | Bool |  |
| CIRCUIT HYDRAULIC PUMP ON | Is electrical power available to the hydraulic pump circuit | Bool |  |
| CIRCUIT MARKER BEACON ON | Is electrical power available to the marker beacon circuit | Bool |  |
| CIRCUIT NAVCOM1 ON | Whether or not power is available to the NAVCOM1 circuit. | Bool |  |
| CIRCUIT NAVCOM2 ON | Whether or not power is available to the NAVCOM2 circuit. | Bool |  |
| CIRCUIT NAVCOM3 ON | Whether or not power is available to the NAVCOM3 circuit. | Bool |  |
| CIRCUIT ON | This will be true if the given circuit is functioning. Use a circuit index when referencing. | Bool |  |
| CIRCUIT PITOT HEAT ON | Is electrical power available to the pitot heat circuit | Bool |  |
| CIRCUIT POWER SETTING | This returns the percentage of use that the circuit is getting. This requires a circuit index when referencing. | Percent |  |
| CIRCUIT PROP SYNC ON | Is electrical power available to the propeller sync circuit | Bool |  |
| CIRCUIT STANDBY VACUUM ON | Is electrical power available to the vacuum circuit | Bool |  |
| CIRCUIT SWITCH ON | The circuit switch position, true if the switch is ON. Use a circuit index when referencing. | Bool |  |
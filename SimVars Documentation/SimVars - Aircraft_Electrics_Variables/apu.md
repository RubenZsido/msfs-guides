---
category: SimVars Documentation
topic: APU
description: 
keywords: [Simulation Variable, Description, Units, Settable]
usage_context: Aircraft systems, simulation variables, flight modeling
---

# APU

| Simulation Variable | Description | Units | Settable |
| --- | --- | --- | --- |
| APU BLEED PRESSURE RECEIVED BY ENGINE | Bleed air pressure received by the engine from the APU. | Pounds per square inch (psi) |  |
| APU GENERATOR ACTIVE:index | Set or get whether an APU is active (true) or not (false). Takes an index to be able to have multiple generators on a single APU. | Bool |  |
| APU GENERATOR SWITCH:index | Enables or disables the APU for an engine. Takes an index to be able to have multiple generators on a single APU | Bool |  |
| APU ON FIRE DETECTED | Will return true if the APU is on fire, or false otherwise. | Bool |  |
| APU PCT RPM | Auxiliary power unit RPM, as a percentage | Percent Over 100 |  |
| APU PCT STARTER | Auxiliary power unit starter, as a percentage | Percent Over 100 |  |
| APU SWITCH | Boolean, whether or not the APU is switched on. | Bool |  |
| APU VOLTS:index | The volts from the APU to the selected engine. Takes an index to be able to have multiple generators on a single APU. | Volts |  |
| BLEED AIR APU | Boolean, returns whether or not the APU attempts to provide Bleed Air. | Bool |  |
---
category: SimVars Documentation
topic: Rotors
description: 
keywords: [Simulation Variable, Description, Units, Settable]
usage_context: Aircraft systems, simulation variables, flight modeling
---

# Rotors

| Simulation Variable | Description | Units | Settable |
| --- | --- | --- | --- |
| DISK BANK ANGLE:index | Rotor bank angle of the given rotor index. Index should be specified to 1 for main rotor and 2 for tail rotor. NOTE: This is available in multiplayer to all far aircraft. See here for more information: Note On SimVars In Multiplayer. | Radians |  |
| DISK BANK PCT:index | Rotor bank percent of the given rotor index. Index should be specified to 1 for main rotor and 2 for tail rotor. NOTE: This is available in multiplayer to all far aircraft. See here for more information: Note On SimVars In Multiplayer. | Percent Over 100 |  |
| DISK CONING PCT:index | Rotor coning percent of the given rotor index. Index should be specified to 1 for main rotor and 2 for tail rotor. NOTE: This is available in multiplayer to all far aircraft. See here for more information: Note On SimVars In Multiplayer. | Percent Over 100 |  |
| DISK PITCH ANGLE:index | Rotor pitch angle of the given rotor index. Index should be specified to 1 for main rotor and 2 for tail rotor. NOTE: This is available in multiplayer to all far aircraft. See here for more information: Note On SimVars In Multiplayer. | Radians |  |
| DISK PITCH PCT:index | Rotor pitch percent of the given rotor index. Index should be specified to 1 for main rotor and 2 for tail rotor. NOTE: This is available in multiplayer to all far aircraft. See here for more information: Note On SimVars In Multiplayer. | Percent Over 100 |  |
| ROTOR BRAKE ACTIVE | Whether the rotor brake is active (1, TRUE) or not (0, FALSE). | Bool |  |
| ROTOR BRAKE HANDLE POS | The percentage actuated of the rotor brake handle. | Percent Over 100 |  |
| ROTOR CHIP DETECTED | Whether the rotor chip is detected (1,TRUE) or not (0, FALSE). | Bool |  |
| ROTOR CLUTCH ACTIVE | Whether the rotor clutch is active (1, TRUE) or not (0, FALSE). | Bool |  |
| ROTOR CLUTCH SWITCH POS | The rotor clutch switch position, either on (1 TRUE) or off (0, FALSE). | Bool |  |
| ROTOR COLLECTIVE BLADE PITCH PCT | The rotor collective blade pitch. NOTE: This is available in multiplayer to all far aircraft. See here for more information: Note On SimVars In Multiplayer. | Percent Over 100 |  |
| ROTOR CYCLIC BLADE MAX PITCH POSITION | The position (angle) at which blade has the maximum cyclic pitch. NOTE: This is available in multiplayer to all far aircraft. See here for more information: Note On SimVars In Multiplayer. | Degrees |  |
| ROTOR CYCLIC BLADE PITCH PCT | The rotor cyclic blade (maximum) pitch. NOTE: This is available in multiplayer to all far aircraft. See here for more information: Note On SimVars In Multiplayer. | Percent Over 100 |  |
| ROTOR GOV ACTIVE:index | Whether the rotor governor is active (1, TRUE) or not (0, FALSE). The SimVar takes an index value, which is the index of the engine to target. | Bool |  |
| ROTOR GOV SWITCH POS:index | The rotor governor switch position, either on (1 TRUE) or off (0, FALSE). The SimVar takes an index value, which is the index of the engine to target. | Bool |  |
| ROTOR LATERAL TRIM PCT | The rotor lateral trim percentage. NOTE: This is available in multiplayer to all far aircraft. See here for more information: Note On SimVars In Multiplayer. | Percent Over 100 |  |
| ROTOR LONGITUDINAL TRIM PCT | The rotor longitudinal trim percentage. NOTE: This is available in multiplayer to all far aircraft. See here for more information: Note On SimVars In Multiplayer. | Percent Over 100 |  |
| ROTOR ROTATION ANGLE:index | Rotor rotation angle of the given rotor index. Index should be specified to 1 for main rotor and 2 for tail rotor. NOTE: This is available in multiplayer to all far aircraft. See here for more information: Note On SimVars In Multiplayer. | Radians |  |
| ROTOR RPM:index | The indexed rotor RPM. NOTE: This is available in multiplayer to all far aircraft. See here for more information: Note On SimVars In Multiplayer. | RPM |  |
| ROTOR RPM PCT:index | Percent max rated rpm of the given rotor index. Index should be specified to 1 for main rotor and 2 for tail rotor. | Percent Over 100 |  |
| ROTOR TEMPERATURE | The main rotor transmission temperature. | Rankine |  |
| STRUCT ROTOR POSITION:index | The position of the indexed rotor. | SIMCONNECT_DATA_XYZ feet |  |
| TAIL ROTOR BLADE PITCH PCT | The pitch position of the tailrotor blades. | Percent Over 100 |  |
| TAIL ROTOR PEDAL POSITION | Percent tail rotor pedal deflection. | Percent Over 100 |  |
---
category: SimVars Documentation
topic: Lights
description: 
keywords: [Simulation Variable, Description, Units, Settable]
usage_context: Aircraft systems, simulation variables, flight modeling
---

# Lights

| Simulation Variable | Description | Units | Settable |
| --- | --- | --- | --- |
| IS ANY INTERIOR LIGHT ON | Will return true if any interior light is on or false otherwise. | Bool |  |
| LANDING LIGHT PBH | Landing light pitch bank and heading. | SIMCONNECT_DATA_XYZ structure |  |
| LIGHT BEACON | Light switch state. NOTE: This is available in multiplayer to all far aircraft. See here for more information: Note On SimVars In Multiplayer. | Bool |  |
| LIGHT BEACON ON | Returns true if the target beacon light is functioning or if the switch is ON. Use beacon lightdef index. | Bool |  |
| LIGHT BACKLIGHT INTENSITY | Vehicle backlights current intensity (0 = off, 1 = full intensity). | Percent Over 100 |  |
| LIGHT BRAKE ON | Returns true if the target brake light is functioning or if the switch is ON. | Bool |  |
| LIGHT CABIN | Light switch state. | Bool |  |
| LIGHT CABIN ON | Returns true if the target cabin light is functioning or if the switch is ON. Use the cabin lightdef index. | Bool |  |
| LIGHT CABIN POWER SETTING | The current cabin light power setting. Requires the cabin lightdef index. | Percent |  |
| LIGHT GLARESHIELD | Whether or not the Light switch for the Glareshield is enabled. | Bool |  |
| LIGHT GLARESHIELD ON | Returns true if the target glareshield light is functioning or if the switch is ON. Use the glareshield lightdef index. | Bool |  |
| LIGHT GLARESHIELD POWER SETTING | The current glareshield light power setting. Requires the glareshield lightdef index. | Percent |  |
| LIGHT GYROLIGHT INTENSITY | Vehicle gyrolights current intensity (0 = off, 1 = full intensity). | Percent Over 100 |  |
| LIGHT HEAD ON | Returns true if the target navigation light is functioning or if the switch is ON. | Bool |  |
| LIGHT HEADLIGHT INTENSITY | Vehicle headlights current intensity (0 = off, 1 = full intensity). | Percent Over 100 |  |
| LIGHT LANDING ON | Returns true if the target landing light is functioning or if the switch is ON. Use landing lightdef index. | Bool |  |
| LIGHT LANDING | Light switch state for landing light. NOTE: This is available in multiplayer to all far aircraft. See here for more information: Note On SimVars In Multiplayer. | Bool |  |
| LIGHT LOGO | Light switch state for logo light. NOTE: This is available in multiplayer to all far aircraft. See here for more information: Note On SimVars In Multiplayer. | Bool |  |
| LIGHT LOGO ON | Returns true if the target logo light is functioning or if the switch is ON. Use the logo lightdef index. | Bool |  |
| LIGHT NAV ON | Returns true if the target navigation light is functioning or if the switch is ON. Use navigation lightdef index. | Bool |  |
| LIGHT NAV | Light switch state for the NAV light. | Bool |  |
| LIGHT ON STATES | Bit mask:[index] 0x0001:[index] Nav 0x0002:[index] Beacon 0x0004:[index] Landing 0x0008:[index] Taxi 0x0010:[index] Strobe 0x0020:[index] Panel 0x0040:[index] Recognition 0x0080:[index] Wing 0x0100:[index] Logo 0x0200:[index] Cabin | Mask |  |
| LIGHT PANEL | Light switch state of the panel light. | Bool |  |
| LIGHT PANEL ON | Returns true if the target panel light is functioning or if the switch is ON. Use the panel lightdef index. | Bool |  |
| LIGHT PANEL POWER SETTING | The current panel light power setting. Requires the panel lightdef index. | Percent |  |
| LIGHT PEDESTRAL | Whether or not the Light switch for the Pedestal is enabled. NOTE: This is available in multiplayer to all far aircraft. See here for more information: Note On SimVars In Multiplayer. | Bool |  |
| LIGHT PEDESTRAL ON | Returns true if the target pedestral light is functioning or if the switch is ON. Requires the pedestral lightdef index. | Bool |  |
| LIGHT PEDESTRAL POWER SETTING | The current pedestral light power setting. Requires the pedestral lightdef index. | Percent |  |
| LIGHT POTENTIOMETER:index | Adjust the potentiometer of the indexed lighting. Index is defined in the appropriate lightdef hashmap setting. | Percent Over 100 |  |
| LIGHT RECOGNITION | Light switch state for the recognition light. NOTE: This is available in multiplayer to all far aircraft. See here for more information: Note On SimVars In Multiplayer. | Bool |  |
| LIGHT RECOGNITION ON | Returns true if the target recognition light is functioning or if the switch is ON. Use the recognition lightdef index. | Bool |  |
| LIGHT STATES | Same as LIGHT_ON_STATES. NOTE: This is available in multiplayer to all far aircraft. See here for more information: Note On SimVars In Multiplayer. | Mask |  |
| LIGHT STROBE | Light switch state for the strobe lights. NOTE: This is available in multiplayer to all far aircraft. See here for more information: Note On SimVars In Multiplayer. | Bool |  |
| LIGHT STROBE ON | Returns true if the target strobe light is functioning or if the switch is ON. Use the strobe lightdef index. NOTE: This is available in multiplayer to all far aircraft. See here for more information: Note On SimVars In Multiplayer. | Bool |  |
| LIGHT TAXI | Light switch state for the taxi light. NOTE: This is available in multiplayer to all far aircraft. See here for more information: Note On SimVars In Multiplayer. | Bool |  |
| LIGHT TAXI ON | Returns true if the target taxi light is functioning or if the switch is ON. Use taxi lightdef index. | Bool |  |
| LIGHT WING | Light switch state for the wing lights. NOTE: This is available in multiplayer to all far aircraft. See here for more information: Note On SimVars In Multiplayer. | Bool |  |
| LIGHT WING ON | Returns true if the target wing light is functioning or if the switch is ON. Use the wing lightdef index. | Bool |  |
| MANUAL INSTRUMENT LIGHTS | True if instrument lights are set manually. | Bool |  |
| STROBES AVAILABLE | True if strobe lights are available. | Bool |  |
| STROBE FLASH | Deprecated, do not use! | Bool |  |
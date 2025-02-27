---
category: SimVars Documentation
topic: Misc.
description: 
keywords: [Simulation Variable, Description, Units, Settable]
usage_context: Aircraft systems, simulation variables, flight modeling
---

# Misc.

| Simulation Variable | Description | Units | Settable |
| --- | --- | --- | --- |
| COPILOT TRANSMITTER TYPE | On which channel the copilot is transmitting. | Enum: 0 = COM1 1 = COM2 2 = COM3 3 = TEL 4 = NONE |  |
| COPILOT TRANSMITTING | Whether or not the copilot is transmitting. | Bool |  |
| PILOT TRANSMITTER TYPE | On which channel the pilot is transmitting. | Enum: 0 = COM1 1 = COM2 2 = COM3 3 = TEL 4 = NONE |  |
| PILOT TRANSMITTING | Whether or not the pilot is transmitting. | Bool |  |
| RADIOS AVAILABLE | Currently not used within the simulation. | - |  |
| RADIO HEIGHT | Radar altitude. | Feet |  |
| TRANSPONDER AVAILABLE | True if a transponder is available. | Bool |  |
| TRANSPONDER CODE:index | 4-digit code. | BCD16 |  |
| TRANSPONDER IDENT | This can set the Ident transponder using the KEY_XPNDR_IDENT_SET, KEY_XPNDR_IDENT_TOGGLE, KEY_XPNDR_IDENT_ON or KEY_XPNDR_IDENT_OFF Event IDs (see XPNDR (Transponder) section for more information). When set to true, it will automatically turn false after 18 seconds. | Bool |  |
| TRANSPONDER STATE | Transponder State. | Enum: 0 = Off 1 = Standby 2 = Test 3 = On 4 = Alt 5 = Ground |  |
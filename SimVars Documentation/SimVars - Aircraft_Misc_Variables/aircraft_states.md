---
category: SimVars Documentation
topic: Aircraft States
description: 
keywords: [Simulation Variable, Description, Units, Settable]
usage_context: Aircraft systems, simulation variables, flight modeling
---

# Aircraft States

| Simulation Variable | Description | Units | Settable |
| --- | --- | --- | --- |
| AMBIENT IN CLOUD | True if the aircraft is in a cloud. | Bool |  |
| CONTRAILS CONDITIONS MET | True if the aircraft has met the conditions required to spawn the contrail VFX. | Bool |  |
| IS SLEW ACTIVE | True if slew is active. | Bool |  |
| IS SLEW ALLOWED | True if slew is enabled. | Bool |  |
| IS USER SIM | Is this the user loaded aircraft. | Bool |  |
| ON ANY RUNWAY | Whether or not the plane is currently on a runway. | Bool |  |
| PLANE IN PARKING STATE | Whether or not the plane is currently parked (true) or not (false). | Bool |  |
| SURFACE CONDITION | The state of the surface directly under the aircraft. | Enum: 0 = Normal 1 = Wet 2 = Icy 3 = Snow |  |
| SURFACE INFO VALID | True indicates that the SURFACE CONDITION return value is meaningful. | Bool |  |
| SURFACE TYPE | The type of surface under the aircraft. | Enum: 0 = Concrete 1 = Grass 2 = Water 3 = Grass_bumpy 4 = Asphalt 5 = Short_grass 6 = Long_grass 7 = Hard_turf 8 = Snow 9 = Ice 10 = Urban 11 = Forest 12 = Dirt 13 = Coral 14 = Gravel 15 = Oil_treated 16 = Steel_mats 17 = Bituminus 18 = Brick 19 = Macadam 20 = Planks 21 = Sand 22 = Shale 23 = Tarmac 24 = Wright flyer track |  |
| STRUCTURAL ICE PCT | Amount of ice on aircraft structure. 100 is fully iced. | Percent Over 100 |  |
| TITLE | Title from aircraft.cfg. | String (max 128 chars) |  |
| TOW CONNECTION | True if a towline is connected to both tow plane and glider. | Bool |  |
| WINDSHIELD RAIN EFFECT AVAILABLE | Is visual effect available on this aircraft. | Bool |  |
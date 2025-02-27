---
category: SimVars Documentation
topic: Autopilot
description: IMPORTANT! The SimVars listed here are not applicable - and will not work correctly (if at all) - when used with a helicopter.
keywords: [Simulation Variable, Description, Units, Settable]
usage_context: Aircraft systems, simulation variables, flight modeling
---

# Autopilot

IMPORTANT! The SimVars listed here are not applicable - and will not work correctly (if at all) - when used with a helicopter.

| Simulation Variable | Description | Units | Settable |
| --- | --- | --- | --- |
| AUTOPILOT AIRSPEED ACQUISITION | Currently not used within the simulation. | Bool |  |
| AUTOPILOT AIRSPEED HOLD | returns whether airspeed hold is active (1, TRUE) or not (0, FALSE). | Bool |  |
| AUTOPILOT AIRSPEED HOLD CURRENT | Currently not used within the simulation. | Bool |  |
| AUTOPILOT AIRSPEED HOLD VAR | Returns the target holding airspeed for the autopilot. | Knots |  |
| AUTOPILOT AIRSPEED MAX CALCULATED | Returns the maximum calculated airspeed (kcas) limit set for the autopilot. | Knots |  |
| AUTOPILOT AIRSPEED MIN CALCULATED | Returns the minimum calculated airspeed (kcas) limit set for the autopilot. | Knots |  |
| AUTOPILOT ALT RADIO MODE | If enabled the Autopilot will use the Radio Altitude rather than the Indicated Altitude. | Bool |  |
| AUTOPILOT ALTITUDE ARM | Returns whether the autopilot is in Altitude Arm mode (1, TRUE) or not (0, FALSE). | Bool |  |
| AUTOPILOT ALTITUDE LOCK | Altitude hold active | Bool |  |
| AUTOPILOT ALTITUDE LOCK VAR | Set or get the slot index which the altitude hold mode will track when captured. See alt_mode_slot_index for more information. | Feet (ft) |  |
| AUTOPILOT ALTITUDE MANUALLY TUNABLE | Whether or not the autopilot altitude is manually tunable or not. | Bool |  |
| AUTOPILOT ALTITUDE SLOT INDEX | Index of the slot that the autopilot will use for the altitude reference. Note that there are 3 slots (1, 2, 3) that you can set/get normally, however you can also target slot index 0. Writing to slot 0 will overwrite all other slots with the slot 0 value, and by default the autopilot will follow slot 0 if you have not selected any slot index. See alt_mode_slot_index for more information. | Number |  |
| AUTOPILOT APPROACH ACTIVE | When true, the autopilot is currently flying the approach Flight Plan (the last legs). | Bool |  |
| AUTOPILOT APPROACH ARM | Returns true when the autopilot is active on the approach, once it reaches the adequate condition (in most cases, once it reaches the second-last waypoint of the flightplan). | Bool |  |
| AUTOPILOT APPROACH CAPTURED | Returns true when the lateral NAV mode is engaged and the angular deviation with the current tuned navigation frequency is less than 5°. | Bool |  |
| AUTOPILOT APPROACH HOLD | Returns whether pproach mode is active (1, TRUE) or not (0, FALSE). | Bool |  |
| AUTOPILOT APPROACH IS LOCALIZER | Returns true if the current approach is using a localizer. | Bool |  |
| AUTOPILOT ATTITUDE HOLD | Attitude hold active | Bool |  |
| AUTOPILOT AVAILABLE | Available flag | Bool |  |
| AUTOPILOT AVIONICS MANAGED | Returns whether the autopilot has active managed avionics (1, TRUE) or not (0, FALSE). | Bool |  |
| AUTOPILOT BACKCOURSE HOLD | Returns whether the autopilot back course mode is active (1, TRUE) or not (0, FALSE). | Bool |  |
| AUTOPILOT BANK HOLD | Returns whether the autopilot bank hold mode is active (1, TRUE) or not (0, FALSE). | Bool |  |
| AUTOPILOT BANK HOLD REF | The current bank-hold bank reference. Note that if you set this, the next frame the value will be overwritten by the engine, so you may need to write to this every game frame to ensure it maintains the required value. | Degrees |  |
| AUTOPILOT CRUISE SPEED HOLD | Currently not used within the simulation. | Bool |  |
| AUTOPILOT DEFAULT PITCH MODE | The current default pitch mode of the autopilot as configured in the plane configuration with the parameter default_pitch_mode. | Enum: 0 = None 1 = Pitch 2 = Altitude Hold 3 = Vertical Speed |  |
| AUTOPILOT DEFAULT ROLL MODE | The current default roll mode of the autopilot as configured in the plane configuration with the parameter default_bank_mode. | Enum: 0 = None 1 = Wing Leveler 2 = Heading 3 = Roll Hold |  |
| AUTOPILOT DISENGAGED | Returns whether the autopilot has been disengaged (1, TRUE) or not (0, FALSE). | Bool |  |
| AUTOPILOT FLIGHT DIRECTOR ACTIVE | Flight director active | Bool |  |
| AUTOPILOT FLIGHT DIRECTOR BANK | Reference bank angle | Radians |  |
| AUTOPILOT FLIGHT DIRECTOR BANK EX1 | Raw reference bank angle | Radians |  |
| AUTOPILOT FLIGHT DIRECTOR PITCH | Reference pitch angle | Radians |  |
| AUTOPILOT FLIGHT DIRECTOR PITCH EX1 | Raw reference pitch angle | Radians |  |
| AUTOPILOT FLIGHT LEVEL CHANGE | Boolean, toggles the autopilot Flight Level Change mode | Bool |  |
| AUTOPILOT GLIDESLOPE ACTIVE | When true, the autopilot is receiving a signal from the runway beacon and is following the slope to reach the ground. | Bool |  |
| AUTOPILOT GLIDESLOPE ARM | Returns true when the autopilot is active on the glide slope. | Bool |  |
| AUTOPILOT GLIDESLOPE HOLD | Returns whether the autopilot glidslope hold is active (1, TRUE) or not (0, FALSE). | Bool |  |
| AUTOPILOT HEADING LOCK | Returns whether the autopilot heading lock is enabled (1, TRUE) or not (0, FALSE). | Bool |  |
| AUTOPILOT HEADING LOCK DIR | Specifies / Returns the locked in heading for the autopilot. | Degrees |  |
| AUTOPILOT HEADING MANUALLY TUNABLE | Whether or not the autopilot heading is manually tunable or not. | Bool |  |
| AUTOPILOT HEADING SLOT INDEX | Index of the slot that the autopilot will use for the heading reference. Note that there are 3 slots (1, 2, 3) that you can set/get normally, however you can also target slot index 0. Writing to slot 0 will overwrite all other slots with the slot 0 value, and by default the autopilot will follow slot 0 if you have not selected any slot index. | Number |  |
| AUTOPILOT MACH HOLD | Mach hold active | Bool |  |
| AUTOPILOT MACH HOLD VAR | Returns the target holding mach airspeed for the autopilot. | Number |  |
| AUTOPILOT MANAGED INDEX | Currently not used within the simulation. | Number |  |
| AUTOPILOT MANAGED SPEED IN MACH | Returns whether the managed speed is in mach (1, TRUE) or not (0, FALSE). | Bool |  |
| AUTOPILOT MANAGED THROTTLE ACTIVE | Returns whether the autopilot managed throttle is active (1, TRUE) or not (0, FALSE). | Bool |  |
| AUTOPILOT MASTER | On/off flag | Bool |  |
| AUTOPILOT MAX BANK | Returns the maximum banking angle for the autopilot, in radians. | Radians |  |
| AUTOPILOT MAX BANK ID | Returns the index of the current maximum bank setting of the autopilot. | Integer |  |
| AUTOPILOT MAX SPEED HOLD | Currently not used within the simulation. | Bool |  |
| AUTOPILOT NAV1 LOCK | Returns TRUE (1) if the autopilot Nav1 lock is applied, or 0 (FALSE) otherwise. | Bool |  |
| AUTOPILOT NAV SELECTED | Index of Nav radio selected | Number |  |
| AUTOPILOT PITCH HOLD | Set to True if the autopilot pitch hold has is engaged. | Bool |  |
| AUTOPILOT PITCH HOLD REF | Returns the current autotpilot reference pitch. | Radians |  |
| AUTOPILOT RPM HOLD | True if autopilot rpm hold applied | Bool |  |
| AUTOPILOT RPM HOLD VAR | Selected rpm | Number |  |
| AUTOPILOT RPM SLOT INDEX | Index of the slot that the autopilot will use for the RPM reference. Note that there are 3 slots (1, 2, 3) that you can set/get normally, however you can also target slot index 0. Writing to slot 0 will overwrite all other slots with the slot 0 value, and by default the autopilot will follow slot 0 if you have not selected any slot index. | Number |  |
| AUTOPILOT SPEED SETTING | Currently not used within the simulation. | Knots |  |
| AUTOPILOT SPEED SLOT INDEX | Index of the managed references | Number |  |
| AUTOPILOT TAKEOFF POWER ACTIVE | Takeoff / Go Around power mode active | Bool |  |
| AUTOPILOT THROTTLE ARM | Returns whether the autopilot auto-throttle is armed (1, TRUE) or not (0, FALSE). | Bool |  |
| AUTOPILOT THROTTLE MAX THRUST | This can be used to set/get the thrust lever position for autopilot maximum thrust. | Percent |  |
| AUTOPILOT VERTICAL HOLD | True if autopilot vertical hold applied | Bool |  |
| AUTOPILOT VERTICAL HOLD VAR | Selected vertical speed | Feet (ft)/minute |  |
| AUTOPILOT VS SLOT INDEX | Index of the slot that the autopilot will use for the VS reference. Note that there are 3 slots (1, 2, 3) that you can set/get normally, however you can also target slot index 0. Writing to slot 0 will overwrite all other slots with the slot 0 value, and by default the autopilot will follow slot 0 if you have not selected any slot index. | Number |  |
| AUTOPILOT WING LEVELER | Wing leveler active | Bool |  |
| AUTOPILOT YAW DAMPER | Yaw damper active | Bool |  |
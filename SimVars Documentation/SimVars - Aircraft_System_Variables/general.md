---
category: SimVars Documentation
topic: General
description: 
keywords: [Simulation Variable, Description, Units, Settable]
usage_context: Aircraft systems, simulation variables, flight modeling
---

# General

| Simulation Variable | Description | Units | Settable |
| --- | --- | --- | --- |
| AIRSPEED TRUE CALIBRATE | Angle of True calibration scale on airspeed indicator. | Degrees |  |
| ALTERNATE STATIC SOURCE OPEN:index | Alternate static air source. | Bool |  |
| ANEMOMETER PCT RPM | Anemometer rpm as a percentage. | Percent Over 100 |  |
| ANGLE OF ATTACK INDICATOR | AoA indication. | Radians |  |
| ANNUNCIATOR SWITCH | Currently not used in the simulation. | Bool |  |
| APPLY HEAT TO SYSTEMS | Used when too close to a fire. | Bool |  |
| AUDIO PANEL AVAILABLE | True if the audio panel is available. | Bool |  |
| AUDIO PANEL VOLUME | The Volume of the Audio Panel. | Percent |  |
| AUTOTHROTTLE ACTIVE | Auto-throttle active. | Bool |  |
| AUTO COORDINATION | Is auto-coordination active. | Bool |  |
| AVIONICS MASTER SWITCH:index | The avionics master switch position, true if the switch is ON. Use an avionics circuit index when referencing. | Bool |  |
| CABIN NO SMOKING ALERT SWITCH | True if the No Smoking switch is on. | Bool |  |
| CABIN SEATBELTS ALERT SWITCH | True if the Seatbelts switch is on. | Bool |  |
| CANOPY OPEN | Percent primary door/exit open. | Percent Over 100 |  |
| CARB HEAT AVAILABLE | True if carburetor heat available. | Bool |  |
| DELTA HEADING RATE | Rate of turn of heading indicator. | Radians per second |  |
| DME SOUND | DME audio flag. | Bool |  |
| ELT ACTIVATED | Whether or not the Emergency Locator Transmitter is active. | Bool |  |
| EXTERNAL SYSTEM VALUE | Generic SimVar. | Number |  |
| FIRE BOTTLE DISCHARGED | True if the fire bottle is discharged. | Bool |  |
| FIRE BOTTLE SWITCH | True if the fire bottle switch is on. | Bool |  |
| GLASSCOCKPIT AUTOMATIC BRIGHTNESS | This variable will return a value between 0 and 1 for the automatic brightness setting for glass cockpit displays, where 0 is the dimmest and 1 is the brightest. This value will vary depending on the time of day. | Number |  |
| GPWS SYSTEM ACTIVE | True if the Ground Proximity Warning System is active. | Bool |  |
| GPWS WARNING | True if Ground Proximity Warning System installed. | Bool |  |
| GYRO DRIFT ERROR | Angular error of heading indicator. | Radians |  |
| HAS STALL PROTECTION | Will return whether the aircraft has stall protection (true) or not (false). | Bool |  |
| HEADING INDICATOR | Heading indicator (directional gyro) indication. | Radians |  |
| INDICATED ALTITUDE | The indicated altitude. | Feet |  |
| INDICATED ALTITUDE CALIBRATED | Indicated altitude with the altimeter calibrated to current sea level pressure. | Feet |  |
| INDICATED ALTITUDE EX1 | Similar to INDICATED_ALTITUDE but doesn't affect actual plane position when setting this variable. | Feet |  |
| INDUCTOR COMPASS HEADING REF | Inductor compass heading. | Radians |  |
| INDUCTOR COMPASS PERCENT DEVIATION | Inductor compass deviation reading. | Percent Over 100 |  |
| INSTRUMENTS AVAILABLE | Deprecated, do not use! | Mask |  |
| INTERCOM MODE | Intercom Mode | Enum: 0 = ISO 1 = ALL 2 = CREW |  |
| INTERCOM SYSTEM ACTIVE | Whether or not the intercom system is active. | Bool |  |
| IS ALTITUDE FREEZE ON | True if the altitude of the aircraft is frozen. | Bool |  |
| IS ATTITUDE FREEZE ON | True if the attitude (pitch, bank and heading) of the aircraft is frozen. | Bool |  |
| IS LATITUDE LONGITUDE FREEZE ON | True if the lat/lon of the aircraft (either user or AI controlled) is frozen. If this variable returns true, it means that the latitude and longitude of the aircraft are not being controlled by ESP, so enabling, for example, a SimConnect client to control the position of the aircraft. This can also apply to altitude and attitude. Also refer to the range of KEY_FREEZE..... Event IDs. | Bool |  |
| KOHLSMAN SETTING HG:index | The value for the given altimeter index in inches of mercury. IMPORTANT! In the system.cfg file, altimeters are indexed from 0, but the SimVar indexes from 1. So, altimeter 0 in that file is accessed using KOHLSMAN SETTING HG:1, 1 by KOHLSMAN SETTING HG:2, etc... | Inches of Mercury, inHg |  |
| KOHLSMAN SETTING MB:index | The value for the given altimeter index in millibars. IMPORTANT! In the system.cfg file, altimeters are indexed from 0, but the SimVar indexes from 1. So, altimeter 0 in that file is accessed using KOHLSMAN SETTING MB:1, 1 by KOHLSMAN SETTING MB:2, etc... | Millibars |  |
| KOHLSMAN SETTING STD:index | True if the indexed altimeter is in "Standard" mode, or false otherwise. IMPORTANT! In the system.cfg file, altimeters are indexed from 0, but the SimVar indexes from 1. So, altimeter 0 in that file is accessed using KOHLSMAN SETTING STD:1, 1 by KOHLSMAN SETTING STD:2, etc... | Bool |  |
| MAGNETIC COMPASS | Compass reading. | Degrees |  |
| MANUAL FUEL PUMP HANDLE | Position of manual fuel pump handle. 1 is fully deployed. | Percent Over 100 |  |
| OVERSPEED WARNING | Overspeed warning state. | Bool |  |
| PANEL ANTI ICE SWITCH | True if panel anti-ice switch is on. | Bool |  |
| PITOT ICE PCT | Amount of pitot ice. 100 is fully iced. | Percent Over 100 |  |
| PITOT HEAT | Pitot heat active. | Bool |  |
| PITOT HEAT SWITCH:index | Pitot heat switch state. | Enum: 0 = Off 1 = On 2 = Auto |  |
| PLANE HEADING DEGREES GYRO | Heading indicator (directional gyro) indication. | Radians |  |
| PRESSURE ALTITUDE | Standard Altitude, ie: at a 1013.25 hPa (1 atmosphere) setting. | Meters |  |
| PRESSURIZATION CABIN ALTITUDE | The current altitude of the cabin pressurization. | Feet |  |
| PRESSURIZATION CABIN ALTITUDE GOAL | The set altitude of the cabin pressurization as initialised from the Design Cabin Pressure value in the systems.cfg file. Pressure is converted into an altitude using a standard condition table. You can adjust the goal pressure using the PRESSURIZATION_PRESSURE_ALT_INC and PRESSURIZATION_PRESSURE_ALT_DEC events. | Feet |  |
| PRESSURIZATION CABIN ALTITUDE RATE | The rate at which cabin pressurization changes. | Feet per second |  |
| PRESSURIZATION DUMP SWITCH | True if the cabin pressurization dump switch is on. | Bool |  |
| PRESSURIZATION PRESSURE DIFFERENTIAL | The difference in pressure between the set altitude pressurization and the current pressurization. | Pounds per square foot, psf |  |
| RAD INS SWITCH | True if Rad INS switch on. | Bool |  |
| SELECTED DME | Selected DME. | Number |  |
| SMOKESYSTEM AVAILABLE | Smoke system available. NOTE: There is no default "smoke system" that this SimVar works on and this is a legacy variable that is available for use should you wish to use it but it affects nothing by default. | Bool |  |
| SMOKE ENABLE | Set to True to activate the smoke system, if one is available. Please see the notes for SMOKESYSTEM AVAILABLE for more information. | Bool |  |
| SPEAKER ACTIVE | Whether or not the speaker is active. | Bool |  |
| STALL HORN AVAILABLE | True if stall alarm available. | Bool |  |
| STALL PROTECTION OFF LIMIT | Alpha below which the Stall Protection can be disabled. See the [STALL PROTECTION] section for more information. | Radians |  |
| STALL PROTECTION ON GOAL | The alpha that the Stall Protection will attempt to reach when triggered. See the [STALL PROTECTION] section for more information. | Radians |  |
| STALL PROTECTION ON LIMIT | Alpha above which the Stall Protection timer starts. See the [STALL PROTECTION] section for more information. | Radians |  |
| STALL WARNING | Stall warning state. | Bool |  |
| STRUCTURAL DEICE SWITCH | True if the aircraft structure deice switch is on. | Bool |  |
| SUCTION PRESSURE | Vacuum system suction pressure. | Inches of Mercury, inHg |  |
| SYSTEMS AVAILABLE | Deprecated, do not use! | Mask |  |
| TAILHOOK HANDLE | True if the tailhook handle is engaged. | Bool |  |
| TAILHOOK POSITION | Percent tail hook extended. | Percent Over 100 |  |
| TOW RELEASE HANDLE | Position of tow release handle. 100 is fully deployed. | Percent Over 100 |  |
| TRUE AIRSPEED SELECTED | True if True Airspeed has been selected. | Bool |  |
| TURN COORDINATOR BALL | Turn coordinator ball position. | Position 128 (-127 to 127) |  |
| TURN COORDINATOR BALL INV | Turn coordinator ball position inverted (upside down). | Position 128 (-127 to 127) |  |
| TURN INDICATOR RATE | Turn indicator reading. NOTE: This is available in multiplayer to all near aircraft. See here for more information: Note On SimVars In Multiplayer. | Radians per second |  |
| TURN INDICATOR SWITCH | True if turn indicator switch is on. | Bool |  |
| WINDSHIELD DEICE SWITCH | True if the aircraft windshield deice switch is on. | Bool |  |
| WISKEY COMPASS INDICATION DEGREES | Deprecated, do not use! Use MAGNETIC_COMPASS instead. | Degrees |  |
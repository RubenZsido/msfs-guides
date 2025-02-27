---
category: SimVars Documentation
topic: NAV
description: 
keywords: [Simulation Variable, Description, Units, Settable]
usage_context: Aircraft systems, simulation variables, flight modeling
---

# NAV

| Simulation Variable | Description | Units | Settable |
| --- | --- | --- | --- |
| NAV ACTIVE FREQUENCY:index | Nav active frequency. Index is 1 or 2. | MHz |  |
| NAV AVAILABLE:index | Flag if Nav equipped on aircraft. | Bool |  |
| NAV BACK COURSE FLAGS:index | Returns the listed bit flags. | Flags: BIT0:[index] 1=back course available BIT1:[index] 1=localizer tuned in BIT2:[index] 1=on course BIT7:[index] 1=station active |  |
| NAV CDI:index | CDI needle deflection (+/- 127). | Number |  |
| NAV CLOSE DME:index | Closest DME distance. Requires an index value from 1 to 4 to set which NAV to target. Note that this SimVar will only work if the NAV1_CLOSE_FREQ_SET key event has been set to 1 (TRUE). | Nautical miles |  |
| NAV CLOSE FREQUENCY:index | Closest Localizer course frequency. Requires an index value from 1 to 4 to set which NAV to target. Note that this SimVar will only work if the NAV1_CLOSE_FREQ_SET key event has been set to 1 (TRUE). | Hz |  |
| NAV CLOSE IDENT:index | ICAO code. Requires an index value from 1 to 4 to set which NAV to target. Note that this SimVar will only work if the NAV1_CLOSE_FREQ_SET key event has been set to 1 (TRUE). | String |  |
| NAV CLOSE LOCALIZER:index | Closest Localizer course heading. Requires an index value from 1 to 4 to set which NAV to target. Note that this SimVar will only work if the NAV1_CLOSE_FREQ_SET key event has been set to 1 (TRUE). | Degrees |  |
| NAV CLOSE NAME:index | Descriptive name. Requires an index value from 1 to 4 to set which NAV to target. Note that this SimVar will only work if the NAV1_CLOSE_FREQ_SET key event has been set to 1 (TRUE). | String |  |
| NAV CODES | Returns bit flags with the listed meaning. | Flags: BIT7:[index] 0= VOR 1= Localizer BIT6:[index] 1= glideslope available BIT5:[index] 1= no localizer backcourse BIT4:[index] 1= DME transmitter at glide slope transmitter BIT3:[index] 1= no nav signal available BIT2:[index] 1= voice available BIT1:[index] 1 = TACAN available BIT0:[index] 1= DME available |  |
| NAV DME | DME distance. | Nautical miles |  |
| NAV DMESPEED | DME speed. | Knots |  |
| NAV DME LATLONALT:index | Returns the DME station. | SIMCONNECT_DATA_LATLONALT structure |  |
| NAV FREQUENCY | Localizer course frequency | Hz |  |
| NAV GLIDE SLOPE | The glide slope gradient. The value returned is an integer value formed as follows: sin(slope) * 65536 * 2 So, for example, a glide slope of 2.7º would return a value of 6174. TO get the value in degrees, then use NAV_RAW_GLIDE_SLOPE instead. | Number |  |
| NAV GLIDE SLOPE ERROR | Difference between current position and glideslope angle. Note that this provides 32 bit floating point precision, rather than the 8 bit integer precision of NAV GSI. | Degrees |  |
| NAV GLIDE SLOPE LENGTH | The distance between the plane and the Glide beacon. | Feet |  |
| NAV GSI | Glideslope needle deflection (+/- 119). Note that this provides only 8 bit precision, whereas NAV GLIDE SLOPE ERROR provides 32 bit floating point precision. | Number |  |
| NAV GS FLAG | Glideslope flag. | Bool |  |
| NAV GS LATLONALT:index | Returns the glide slope. | SIMCONNECT_DATA_LATLONALT structure |  |
| NAV GS LLAF64 | Nav GS latitude, longitude, altitude. | SIMCONNECT_DATA_LATLONALT structure |  |
| NAV HAS CLOSE DME | Flag if found a close station with a DME. | Bool |  |
| NAV HAS CLOSE LOCALIZER | Flag if found a close localizer station. | Bool |  |
| NAV HAS DME | Flag if tuned station has a DME. | Bool |  |
| NAV HAS GLIDE SLOPE | Flag if tuned station has a glideslope. | Bool |  |
| NAV HAS LOCALIZER | Flag if tuned station is a localizer. | Bool |  |
| NAV HAS NAV | Flag if Nav has signal. | Bool |  |
| NAV HAS TACAN | Flag if Nav has a Tacan. | Bool |  |
| NAV IDENT | ICAO code. | String |  |
| NAV LOCALIZER | Localizer course heading. | Degrees |  |
| NAV LOC AIRPORT IDENT | The airport ICAO ident for the localizer that is currently tuned on the nav radio (like 'EGLL' or 'KJFK') | String |  |
| NAV LOC RUNWAY DESIGNATOR | The letter code for the runway that the currently tuned localizer is tuned to. | String 'L' - Left 'R' - Right 'C' - Center 'W' - Water 'A' - A 'B' - B |  |
| NAV LOC RUNWAY NUMBER | NAV LOC RUNWAY NUMBER - The number portion of the runway that the currently tuned localizer is tuned to (so if the runway was 15L, this would be 15). | String '1' - '36' 'N' 'NE' 'E' 'SE' 'S' 'SW' 'W' 'NW' |  |
| NAV MAGVAR | Magnetic variation of tuned Nav station. | Degrees |  |
| NAV NAME | Descriptive name. | String |  |
| NAV OBS | OBS setting. Index of 1 or 2. | Degrees |  |
| NAV RADIAL | Radial that aircraft is on. | Degrees |  |
| NAV RADIAL ERROR | Difference between current radial and OBS tuned radial. | Degrees |  |
| NAV RAW GLIDE SLOPE | The glide slope angle. | Degrees |  |
| NAV RELATIVE BEARING TO STATION | Relative bearing to station. | Degrees |  |
| NAV SIGNAL | Nav signal strength. | Number |  |
| NAV SOUND:index | Nav audio flag. Index of 1 or 2. | Bool |  |
| NAV STANDBY FREQUENCY:index | Nav standby frequency. Index is 1 or 2. | MHz |  |
| NAV TOFROM | Returns whether the Nav is going to or from the current radial (or is off). | Enum: 0 = Off 1 = TO 2 = FROM |  |
| NAV VOLUME | The volume of the Nav radio. | Percent |  |
| NAV VOR DISTANCE | Distance of the VOR beacon. | Meters |  |
| NAV VOR LATLONALT:index | Returns the VOR station latitude, longitude and altitude. | SIMCONNECT_DATA_LATLONALT structure |  |
| NAV VOR LLAF64 | Nav VOR latitude, longitude, altitude. | SIMCONNECT_DATA_LATLONALT structure |  |
# TACAN

The table below lists all the SimVars related to the Tacan system on an aircraft. You can have either 1 or 2 of these systems, and in so all these SimVars require an index value of 1 or 2, depending on which one you want to target. Note that you must have first enabled the Tacan using the Tacan.N parameter in the systems.cfg file.

| Simulation Variable | Description | Units | Settable |
| --- | --- | --- | --- |
| TACAN ACTIVE CHANNEL:index | The active channel used by the indexed Tacan receiver on the aircraft, from 1 to 127. | Number |  |
| TACAN ACTIVE MODE:index | The active mode used by the indexed Tacan receiver on the aircraft, where 0 = X and 1 = Y. | Bool |  |
| TACAN AVAILABLE:index | Will be TRUE (1) if NAV1, NAV2, NAV3 or NAV4 can receive Tacan (depending on the index - 1, 2, 3, or 4), or FALSE (0) otherwise. | Bool |  |
| TACAN DRIVES NAV1:index | Tells whether the Tacan is driving the Nav 1 indicator (TRUE, 1) or not (FALSE, 0), for autopilot purposes. | Bool |  |
| TACAN OBS:index | The Tacan OBS setting, in degrees. | Degrees |  |
| TACAN STANDBY CHANNEL:index | The standby channel used by the indexed Tacan receiver on the aircraft, from 1 to 127. | Number |  |
| TACAN STANDBY MODE:index | Indicates the indexed Tacan receiver standby mode, where 0 = X and 1 = Y. | Bool |  |
| TACAN STATION CDI:index | The CDI needle deflection amount(course deviation) to the station. Can be +/- 127. | Number |  |
| TACAN STATION DISTANCE:index | The distance between the Tacan station position and the aircraft position. The index value refers to the Tacan receiver connected to the station (1 or 2). | Meter |  |
| TACAN STATION IDENT:index | The tuned station identifier for the indexed Tacan. | String |  |
| TACAN STATION LATLONALT:index | Retrieves the latitude, longitude and altitude of the Tacan station. | SIMCONNECT_DATA_LATLONALT structure |  |
| TACAN STATION RADIAL:index | The radial between the Tacan station and the aircraft. | Degrees |  |
| TACAN STATION RADIAL ERROR:index | Difference between the current radial and OBS tuned radial, in degrees. | Degrees. |  |
| TACAN STATION TOFROM:index | Returns whether the indexed Tacan is going to or from the current radial (or is off). | Enum: 0 = Off 1 = TO 2 = FROM |  |
| TACAN VOLUME:index | The volume value of the indexed Tacan receiver on the aircraft. | Percent Over 100 |  |
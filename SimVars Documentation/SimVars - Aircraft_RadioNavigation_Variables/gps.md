---
category: SimVars Documentation
topic: GPS
description: When using these SimVars, it is worth noting that to correctly set those that can be set, you should first use the SimVar GPS OVERRIDEN and set it to TRUE. If you don't set this SimVar, then any chang...
keywords: [Simulation Variable, Description, Units, Settable]
usage_context: Aircraft systems, simulation variables, flight modeling
---

# GPS

When using these SimVars, it is worth noting that to correctly set those that can be set, you should first use the SimVar GPS OVERRIDEN and set it to TRUE. If you don't set this SimVar, then any changes that are made to the other GPS variables will be overriden by the simulation GPS system moments after you set them.

| Simulation Variable | Description | Units | Settable |
| --- | --- | --- | --- |
| GPS APPROACH AIRPORT ID | ID of airport. | String |  |
| GPS APPROACH APPROACH ID | ID of approach. | String |  |
| GPS APPROACH APPROACH INDEX | Index of approach for given airport. | Number |  |
| GPS APPROACH APPROACH TYPE | Approach type. | Enum: 0 = None 1 = GPS 2 = VOR 3 = NDB 4 = ILS 5 = Localizer 6 = SDF 7 = LDA 8 = VOR/ DME 9 = NDB/ DME 10 = RNAV 11 = Backcourse |  |
| GPS APPROACH IS FINAL | Is approach transition final approach segment. | Bool |  |
| GPS APPROACH IS MISSED | Is approach segment missed approach segment. | Bool |  |
| GPS APPROACH IS WP RUNWAY | Waypoint is the runway. | Bool |  |
| GPS APPROACH MODE | Sub mode within approach mode. | Enum: 0 = None 1 = Transition 2 = Final 3 = Missed |  |
| GPS APPROACH SEGMENT TYPE | Segment type within approach. | Enum: 0 = Line 1 = Arc clockwise 2 = Arc counter-clockwise |  |
| GPS APPROACH TIMEZONE DEVIATION | Deviation of local time from GMT. | Seconds |  |
| GPS APPROACH TRANSITION ID | ID of approach transition. | String |  |
| GPS APPROACH TRANSITION INDEX | Index of approach transition. | Number |  |
| GPS APPROACH WP COUNT | Number of waypoints. | Number |  |
| GPS APPROACH WP INDEX | Index of current waypoint. | Number |  |
| GPS APPROACH WP TYPE | Waypoint type within approach mode. | Enum: 0 = None 1 = Fix 2 = Procedure turn left 3 = Procedure turn right 4 = Dme arc left 5 = Dme arc right 6 = Holding left 7 = Holding right 8 = Distance 9 = Altitude 10 = Manual sequence 11 = Vector to final |  |
| GPS CDI NEEDLE | The course deviation of the needle for a CDI instrument. The SimVar displays the deviation from -127 to +127. It returns a value if a flight plan is set (otherwise it will return 0) even if the autopilot isn't on GPS mode. Scaling can also be set through the GPS CDI SCALING simvar. | Number |  |
| GPS CDI SCALING | The full scale deflection of the CDI due to GPS cross-track error, in meters. | Meters |  |
| GPS COURSE TO STEER | Suggested heading to steer (for autopilot). | Radians |  |
| GPS DRIVES NAV1 | GPS is driving Nav 1 indicator. Note this setting will also affect the SimVars HSI_STATION_IDENT and HSI_BEARING. | Bool |  |
| GPS ETA | Estimated time of arrival at destination. | Seconds |  |
| GPS ETE | Estimated time en route to destination. | Seconds |  |
| GPS FLIGHTPLAN TOTAL DISTANCE | This is the complete flightplan length from start to end. Essentially the cumulative length of all the flight plan legs added together. | Meters |  |
| GPS FLIGHT PLAN WP COUNT | Number of waypoints. | Number |  |
| GPS FLIGHT PLAN WP INDEX | Index of waypoint. | Number |  |
| GPS GROUND MAGNETIC TRACK | Current magnetic ground track. | Radians |  |
| GPS GROUND SPEED | Current ground speed. | Meters per second |  |
| GPS GROUND TRUE HEADING | Current true heading. | Radians |  |
| GPS GROUND TRUE TRACK | Current true ground track. | Radians |  |
| GPS GSI SCALING | The full scale deflection of the vertical GSI due to GPS glidepath deviation, in meters. | Meters |  |
| GPS HAS GLIDEPATH | Whether or not the GPS system has a presently available glidepath for guidance. Only applicable with GPS_OVERRIDDEN. When true and in GPS OVERRIDDEN, HSI_GSI_NEEDLE_VALID will also be true. | Bool |  |
| GPS HSI NEEDLE | The glide deviation of the needle for a CDI instrument. The simvar displays the deviation from -127 to +127. It returns a value if a flight plan is set (otherwise it will return 0) even if the autopilot isn't on GPS mode. Scaling can also be set through the GPS CDI SCALING simvar. | Number |  |
| GPS IS ACTIVE FLIGHT PLAN | Flight plan mode active. | Bool |  |
| GPS IS ACTIVE WAY POINT | Waypoint mode active. | Bool |  |
| GPS IS ACTIVE WP LOCKED | Is switching to next waypoint locked. | Bool |  |
| GPS IS APPROACH ACTIVE | Is approach mode active. | Bool |  |
| GPS IS APPROACH LOADED | Is approach loaded. | Bool |  |
| GPS IS ARRIVED | Is flight plan destination reached. | Bool |  |
| GPS IS DIRECTTO FLIGHTPLAN | Is Direct To Waypoint mode active. | Bool |  |
| GPS MAGVAR | Current GPS magnetic variation. | Radians |  |
| GPS OBS ACTIVE | Whether or not the OBS mode is currently active (disable the automatic sequencing of waypoints in GPS flight plan). | Bool |  |
| GPS OBS VALUE | This is the currently selected OBS course in degrees, from 0 to 360. | Degrees |  |
| GPS OVERRIDDEN | When it is active, all sim GPS system updates are suspended. This must be set to TRUE to be able to correctly set to any other GPS SimVar. | Bool |  |
| GPS POSITION ALT | Current GPS altitude. | Meters |  |
| GPS POSITION LAT | Current GPS latitude. | Degrees |  |
| GPS POSITION LON | Current GPS longitude. | Degrees |  |
| GPS TARGET ALTITUDE | Altitude of GPS target. | Meters |  |
| GPS TARGET DISTANCE | Distance to target. | Meters |  |
| GPS VERTICAL ANGLE | Glidepath in degrees. | Degrees |  |
| GPS VERTICAL ANGLE ERROR | Vertical error in degrees from GlidePath. | Degrees |  |
| GPS VERTICAL ERROR | Vertical deviation in meters from GlidePath. | Meters |  |
| GPS WP BEARING | Magnetic bearing to waypoint. | Radians |  |
| GPS WP CROSS TRK | Cross track distance. | Meters |  |
| GPS WP DESIRED TRACK | The required heading (magnetic) from the previous waypoint to the next waypoint. | Radians |  |
| GPS WP DISTANCE | Distance to waypoint. | Meters |  |
| GPS WP ETA | Estimated time of arrival at waypoint. | Seconds |  |
| GPS WP ETE | Estimated time en route to waypoint. | Seconds |  |
| GPS WP NEXT ALT | Altitude of next waypoint. | Meters |  |
| GPS WP NEXT ID | ID of next GPS waypoint. | String |  |
| GPS WP NEXT LAT | Latitude of next waypoint. | Degrees |  |
| GPS WP NEXT LON | Longitude of next waypoint. | Degrees |  |
| GPS WP PREV ALT | Altitude of previous waypoint. | Meters |  |
| GPS WP PREV ID | ID of previous GPS waypoint. | String |  |
| GPS WP PREV LAT | Latitude of previous waypoint. | Degrees |  |
| GPS WP PREV LON | Longitude of previous waypoint. | Degrees |  |
| GPS WP PREV VALID | Is previous waypoint valid (i.e. current waypoint is not the first waypoint). | Bool |  |
| GPS WP TRACK ANGLE ERROR | Tracking angle error to waypoint. | Radians |  |
| GPS WP TRUE BEARING | True bearing to waypoint. | Radians |  |
| GPS WP TRUE REQ HDG | Required true heading to waypoint. | Radians |  |
| GPS WP VERTICAL SPEED | Vertical speed to waypoint. | Meters per second |  |
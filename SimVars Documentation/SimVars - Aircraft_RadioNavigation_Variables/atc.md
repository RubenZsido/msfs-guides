---
category: SimVars Documentation
topic: ATC
description: 
keywords: [Simulation Variable, Description, Units, Settable]
usage_context: Aircraft systems, simulation variables, flight modeling
---

# ATC

| Simulation Variable | Description | Units | Settable |
| --- | --- | --- | --- |
| ATC AIRLINE | The name of the Airline used by ATC, as a string with a maximum length of 50 characters. | String |  |
| ATC AIRPORT IS TOWERED | If the airport is controlled, this boolean is true. | Bool |  |
| ATC CLEARED IFR | Returns whether or not the user has filed an IFR flightplan that has been cleared by the sim ATC | Bool |  |
| ATC CLEARED LANDING | Whether the ATC has cleared the plane for landing. | Bool |  |
| ATC CLEARED TAKEOFF | Whether the ATC has cleared the plane for takeoff. | Bool |  |
| ATC CLEARED TAXI | Whether the ATC has cleared the plane for taxi. | Bool |  |
| ATC CURRENT WAYPOINT ALTITUDE | Returns the target altitude for the current ATC flightplan waypoint. | Bool |  |
| ATC FLIGHT NUMBER | Flight Number used by ATC, as a string with a maximum number of 6 characters. | String |  |
| ATC FLIGHTPLAN DIFF ALT | Altitude between the position of the aircraft and his closest waypoints in the flightplan. | Meters |  |
| ATC FLIGHTPLAN DIFF DISTANCE | Returns the lateral distance the user's plane is from the ATC flight plan track. | Meters |  |
| ATC FLIGHTPLAN DIFF HEADING | Heading between the position of the aircraft and his closest waypoints in the flightplan. | Degrees |  |
| ATC HEAVY | Is this aircraft recognized by ATC as heavy. | Bool |  |
| ATC ID | ID used by ATC, as a string with a maximum number of 10 characters. | String |  |
| ATC IFR FP TO REQUEST | Returns true if the user has a valid IFR flight plan they can as for clearance for with ATC at the airport they are currently at. | Bool |  |
| ATC MODEL | Model used by ATC, as a string with a maximum number of 10 characters. | String |  |
| ATC ON PARKING SPOT | Is ATC aircraft on parking spot. | Bool |  |
| ATC PREVIOUS WAYPOINT ALTITUDE | Returns the target altitude for the previous ATC flightplan waypoint. | Meters |  |
| ATC RUNWAY AIRPORT NAME | The name of the airport of the runway assigned by the ATC. Returns "" if no runway is assigned. | String |  |
| ATC RUNWAY DISTANCE | This float represents the distance between the player's plane and the center of the runway selected by the ATC. | Meters |  |
| ATC RUNWAY END DISTANCE | This is a float corresponding to the horizontal distance between the player's plane and the end of the runway selected by the ATC. | Meters |  |
| ATC RUNWAY HEADING DEGREES TRUE | This float represents the true heading of the runway selected by the ATC. | Degrees |  |
| ATC RUNWAY LENGTH | The length of the runway assigned by the ATC. Returns -1 if no runway is assigned. | Meters |  |
| ATC RUNWAY RELATIVE POSITION X | This is a float corresponding to the player's main gear relative X (transverse) position on the runway selected by the ATC. | Meters |  |
| ATC RUNWAY RELATIVE POSITION Y | This is a float corresponding to the player's main gear relative Y (height) position on the runway selected by the ATC. | Meters |  |
| ATC RUNWAY RELATIVE POSITION Z | This is a float corresponding to the player's main gear relative Z (longitudinal) position on the runway selected by the ATC. | Meters |  |
| ATC RUNWAY SELECTED | This is a boolean corresponding to whether or not the ATC has pre-selected a runway for the player's plane. If this is false, every other ATC RUNWAY * SimVar will return default values. | Bool |  |
| ATC RUNWAY START DISTANCE | This is a float corresponding to the horizontal distance between the player's plane and the start of the runway selected by the ATC. | Meters |  |
| ATC RUNWAY TDPOINT RELATIVE POSITION X | This float represents the player's main gear relative X (transverse) position according to the aiming point of the runway selected by the ATC. | Meters |  |
| ATC RUNWAY TDPOINT RELATIVE POSITION Y | This float represents the player's main gear relative Y (height) position according to the aiming point of the runway selected by the ATC. | Meters |  |
| ATC RUNWAY TDPOINT RELATIVE POSITION Z | This float represents the player's main relative Z (longitudinal) position according to the aiming point of the runway selected by the ATC. | Meters |  |
| ATC RUNWAY WIDTH | The width of the runway assigned by the ATC. Returns -1 if no runway is assigned. | Meters |  |
| ATC SUGGESTED MIN RWY LANDING | Suggested minimum runway length for landing. Used by ATC. | Feet |  |
| ATC SUGGESTED MIN RWY TAKEOFF | Suggested minimum runway length for takeoff. Used by ATC. | Feet |  |
| ATC TAXIPATH DISTANCE | Returns the lateral distance the user's plane is from the path of the currently issued ATC taxi instructions. | Meters |  |
| ATC TYPE | Type used by ATC. | String (30) |  |
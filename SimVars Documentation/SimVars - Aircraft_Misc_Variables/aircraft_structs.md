---
category: SimVars Documentation
topic: Aircraft Structs
description: 
keywords: [Simulation Variable, Description, Units, Settable]
usage_context: Aircraft systems, simulation variables, flight modeling
---

# Aircraft Structs

| Simulation Variable | Description | Units | Settable |
| --- | --- | --- | --- |
| EYEPOINT POSITION | The eyepoint position relative to the reference datum position for the aircraft. | SIMCONNECT_DATA_XYZ feet |  |
| STRUC AIRSPEED HOLD PID CONSTS | Returns the various airspeed PID constants. This is generally only used for AI controlled aircraft and boats, although it may be useful when working with RTCs and the user aircraft. | PID_STRUCT |  |
| STRUC HEADING HOLD PID CONSTS | Returns the various airspeed PID constants. This is generally only used for AI controlled aircraft and boats, although it may be useful when working with RTCs and the user aircraft. | PID_STRUCT |  |
| STRUCT BODY ROTATION ACCELERATION | The body rotation acceleration. | SIMCONNECT_DATA_XYZ radians per second |  |
| STRUCT BODY ROTATION VELOCITY | The body rotation velocity. | SIMCONNECT_DATA_XYZ radians per second |  |
| STRUCT BODY VELOCITY | The object body velocity. | SIMCONNECT_DATA_XYZ feet per second |  |
| STRUCT ENGINE POSITION:index | The position of the indexed engine relative to the Datum Reference Point for the aircraft. | SIMCONNECT_DATA_XYZ feet. |  |
| STRUCT EYEPOINT DYNAMIC ANGLE | The angle of the eyepoint view. Zero, zero, zero is straight ahead. | SIMCONNECT_DATA_XYZ radians |  |
| STRUCT EYEPOINT DYNAMIC OFFSET | A variable offset away from the EYEPOINT POSITION. | SIMCONNECT_DATA_XYZ feet |  |
| STRUCT LATLONALT | Returns the latitude, longitude and altitude of the user aircraft. | SIMCONNECT_DATA_LATLONALT |  |
| STRUCT LATLONALTPBH | Returns the lattitude, longitude, altitude, pitch, bank and heading of the user aircraft. | Returns a struct with 6 values: lat, lon, alt, pitch, bank, heading |  |
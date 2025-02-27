---
category: SimVars Documentation
topic: MARKERS
description: 
keywords: [Simulation Variable, Description, Units, Settable]
usage_context: Aircraft systems, simulation variables, flight modeling
---

# MARKERS

| Simulation Variable | Description | Units | Settable |
| --- | --- | --- | --- |
| INNER MARKER | Inner marker state. | Bool |  |
| INNER MARKER LATLONALT | Returns the latitude, longitude and altitude of the inner marker of an approach to a runway, if the aircraft is within the required proximity, otherwise it will return zeros. | SIMCONNECT_DATA_LATLONALT structure |  |
| MARKER AVAILABLE | True if Marker is available. | Bool |  |
| MARKER BEACON SENSITIVITY HIGH | Whether or not the Marker Beacon is in High Sensitivity mode. | Bool |  |
| MARKER BEACON STATE | Marker beacon state. | Enum: 0 = None 1 = Outer 2 = Middle 3 = Inner |  |
| MARKER BEACON TEST MUTE | Whether or not the Marker Beacon is in Test/Mute mode. | Bool |  |
| MARKER SOUND | Marker audio flag. | Bool |  |
| MIDDLE MARKER | Middle marker state. | Bool |  |
| MIDDLE MARKER LATLONALT | Returns the latitude, longitude and altitude of the middle marker. | SIMCONNECT_DATA_LATLONALT structure |  |
| OUTER MARKER | Outer marker state. | Bool |  |
| OUTER MARKER LATLONALT | Returns the latitude, longitude and altitude of the outer marker. | SIMCONNECT_DATA_LATLONALT structure |  |
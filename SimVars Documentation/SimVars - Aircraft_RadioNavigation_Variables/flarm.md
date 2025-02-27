---
category: SimVars Documentation
topic: FLARM
description: 
keywords: [Simulation Variable, Description, Units, Settable]
usage_context: Aircraft systems, simulation variables, flight modeling
---

# FLARM

| Simulation Variable | Description | Units | Settable |
| --- | --- | --- | --- |
| FLARM AVAILABLE | Whether the FLARM is available (TRUE, 1) or not (FALSE, 0). | Bool |  |
| FLARM THREAT BEARING | The bearing of the FLARM threat aircraft, relative to track. | Degrees |  |
| FLARM THREAT DATA | The FLARM threat aircraft data structure, which contains data about the perceived threat, returned as a struct. Struct member variables are as follows: id (U62): the network id of the intruding plane so that they are remembered in order to compute their trajectory. bearing (FLOAT64): The threat bearing, in degrees (this is bearing from track axis and not bearing from the airplane axis). heading (FLOAT64): The threat heading. distance (FLOAT64): The distance between the aircraft and the threat, in meters. verticalBearing (FLOAT64): The vertical bearing between the aircraft and the threat, in degrees. relativeAltitude (FLOAT64): The relative altitude of the threat to the aircraft, in meters. timeToCollision (FLOAT64): The estimated time to a collision, in seconds. | Struct |  |
| FLARM THREAT DISTANCE | The distance to the FLARM threat object. | Meters |  |
| FLARM THREAT HEADING | The heading to the FLARM threat object. | Degrees |  |
| FLARM THREAT RELATIVE ALTITUDE | The relative altitude of the threat object. | Meters |  |
| FLARM THREAT TIME TO COLLISION | The estimated time to a collision. | Seconds |  |
| FLARM THREAT VERTICAL BEARING | The vertical bearing towards the threat. | Degrees |  |
---
category: SimVars Documentation
topic: Contact Points
description: 
keywords: [Simulation Variable, Description, Units, Settable]
usage_context: Aircraft systems, simulation variables, flight modeling
---

# Contact Points

| Simulation Variable | Description | Units | Settable |
| --- | --- | --- | --- |
| CONTACT POINT COMPRESSION:index | The percentage value representing the amount the contact point is compressed. Index is from 0-19. | Position |  |
| CONTACT POINT IS ON GROUND:index | Returns true if the indexed contact point is on the ground, or will return false otherwise. Index is from 0 - 19. | Bool |  |
| CONTACT POINT IS SKIDDING:index | Returns true if the indexed contact point is skidding, or will return false otherwise. Index is from 0 - 19. | Bool |  |
| CONTACT POINT POSITION:index | The currently extended position of the (retractable) contact point, expressed as a percentage. Index is from 0 - 19. | Position |  |
| CONTACT POINT SKIDDING FACTOR:index | The skidding factor associated with the indexed contact point, from 0 to 1. Index is from 0 - 19. | Percent Over 100 |  |
| CONTACT POINT WATER DEPTH:index | This returns the depth of the water for the indexed contact point. Index is from 0 - 19. | Feet (ft) |  |
---
category: SimVars Documentation
topic: Sling
description: 
keywords: [Simulation Variable, Description, Units, Settable]
usage_context: Aircraft systems, simulation variables, flight modeling
---

# Sling

| Simulation Variable | Description | Units | Settable |
| --- | --- | --- | --- |
| IS ATTACHED TO SLING | Set to true if this object is attached to a sling. | Bool |  |
| NUM SLING CABLES | The number of sling cables (not hoists) that are configured for the helicopter. | Number |  |
| SLING ACTIVE PAYLOAD STATION:index, param | The payload station (identified by the parameter) where objects will be placed from the sling (identified by the index). | Number |  |
| SLING CABLE BROKEN:index | THis will be True (1) if the indexed cable is broken, or False (0) otherwise. | Bool |  |
| SLING CABLE EXTENDED LENGTH:index | The length of the indexed cable extending from the aircraft. | Feet (ft) |  |
| SLING HOIST PERCENT DEPLOYED:index | The percentage of the full length of the sling cable deployed. | Percent Over 100 |  |
| SLING HOIST SWITCH:index | This will be True (1) if the hoist is enabled or False (0) otherwise. | Bool |  |
| SLING HOOK IN PICKUP MODE | This will be True (1) if the hook is in pickup mode or False (0) otherwise. When True, the hook will be capable of picking up another object. | Bool |  |
| SLING OBJECT ATTACHED:index | If the SimVar units are set as boolean, this will return True (1) if a sling object is attached, or False (0) otherwise. If the SimVar units are set as a string, tis will return the container title of the object. Note that there can be multiple sling positions, indexed from 1. The sling positions are set in the Aircraft Configuration File. | Bool/String |  |
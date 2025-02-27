---
category: SimVars Documentation
topic: Alternators
description: 
keywords: [Simulation Variable, Description, Units, Settable]
usage_context: Aircraft systems, simulation variables, flight modeling
---

# Alternators

| Simulation Variable | Description | Units | Settable |
| --- | --- | --- | --- |
| ALTERNATOR BREAKER PULLED | This will be true if the alternator breaker is pulled. Requires a BUS_LOOKUP_INDEX and an alternator index. | Bool |  |
| ALTERNATOR CONNECTION ON | This will be true if the alternator is connected. Requires a BUS_LOOKUP_INDEX and an alternator index. | Bool |  |
| GENERAL ENG MASTER ALTERNATOR:index | The alternator (generator) switch position, true if the switch is ON. Requires an engine index, and the use of an alternator index when referencing. | Bool |  |
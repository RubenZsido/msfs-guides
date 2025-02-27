---
category: SimVars Documentation
topic: ADF
description: 
keywords: [Simulation Variable, Description, Units, Settable]
usage_context: Aircraft systems, simulation variables, flight modeling
---

# ADF

| Simulation Variable | Description | Units | Settable |
| --- | --- | --- | --- |
| ADF ACTIVE FREQUENCY:index | ADF frequency. Index of 1 or 2. | Frequency ADF BCD32 |  |
| ADF AVAILABLE:index | True if ADF is available | Bool |  |
| ADF CARD | ADF compass rose setting | Degrees |  |
| ADF EXT FREQUENCY | Deprecated, use ADF ACTIVE FREQUENCY | Frequency BCD16 |  |
| ADF FREQUENCY | Deprecated, use ADF ACTIVE FREQUENCY | Frequency BCD16 |  |
| ADF IDENT | ICAO code | String |  |
| ADF LATLONALT:index | Returns the latitude, longitude and altitude of the station the radio equipment is currently tuned to, or zeros if the radio is not tuned to any ADF station. Index of 1 or 2 for ADF 1 and ADF 2. | SIMCONNECT_DATA_LATLONALT structure |  |
| ADF NAME:index | Descriptive name | String |  |
| ADF RADIAL:index | Current direction from NDB station | Degrees |  |
| ADF RADIAL MAG:index | Returns the magnetic bearing to the currently tuned ADF transmitter. | Degrees |  |
| ADF SIGNAL:index | Signal strength | Number |  |
| ADF SOUND:index | ADF audio flag. Index of 0 or 1. | Bool |  |
| ADF STANDBY AVAILABLE:index | True if ADF Standby is available | Bool |  |
| ADF STANDBY FREQUENCY:index | ADF standby frequency | Hz |  |
| ADF VOLUME | Returns the volume of the ADF | Percent Over 100 |  |
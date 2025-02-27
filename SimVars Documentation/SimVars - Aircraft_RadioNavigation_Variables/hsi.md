# HSI

| Simulation Variable | Description | Units | Settable |
| --- | --- | --- | --- |
| HSI BEARING | If the GPS_DRIVES_NAV1 variable is true and the HSI BEARING VALID variable is true, this variable contains the HSI needle bearing. If the GPS DRIVES NAV1 variable is false and the HSI BEARING VALID variable is true, this variable contains the ADF1 frequency. | Degrees |  |
| HSI BEARING VALID | This will return true if the HSI BEARING variable contains valid data. | Bool |  |
| HSI CDI NEEDLE | Needle deflection (+/- 127). | Number |  |
| HSI CDI NEEDLE VALID | Signal valid. | Bool |  |
| HSI DISTANCE | DME/GPS distance. | Nautical miles |  |
| HSI GSI NEEDLE | Needle deflection (+/- 119). | Number |  |
| HSI GSI NEEDLE VALID | Signal valid. | Bool |  |
| HSI HAS LOCALIZER | Station is a localizer. | Bool |  |
| HSI SPEED | DME/GPS speed. | Knots |  |
| HSI STATION IDENT | Returns the ident of the the next GPS waypoint, if GPS_DRIVES_NAV1 is true. If GPS DRIVES NAV1 is false, it returns the identity of the station that is tuned on nav radio 1. | String |  |
| HSI TF FLAGS | Nav TO/FROM flag. | Enum: 0 = Off 1 = TO 2 = FROM |  |
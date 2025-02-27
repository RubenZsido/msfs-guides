# COM

| Simulation Variable | Description | Units | Settable |
| --- | --- | --- | --- |
| COM1 STORED FREQUENCY COM2 STORED FREQUENCY COM3 STORED FREQUENCY | The stored COM 1/2/3 frequency value. | Frequency BCD16 |  |
| COM ACTIVE BEARING:index | Gives the bearing (in degrees) of the active COM station (airport) or a value less than 0 if the station does not belong to an airport. Index is 1, 2 or 3. | Degrees |  |
| COM ACTIVE DISTANCE:index | Gives the distance (in meters) to the active COM station (airport) or a value less than -180° if the station does not belong to an airport. Index is 1, 2 or 3. | Meters |  |
| COM ACTIVE FREQUENCY:index | Com frequency. Index is 1, 2 or 3. | Frequency BCD16 |  |
| COM ACTIVE FREQ IDENT:index | The identity of the station that is tuned on the indexed active COM radio. Index is 1, 2, or 3. | String |  |
| COM ACTIVE FREQ TYPE:index | The type of COM frequency for the active indexed COM system. Index is 1, 2, or 3. | String: "ATIS" - Atis "UNI" - Unicom "CTAF" - CTAF "GND" - Ground "TWR" - Tower "CLR" - Clearance Delivery "APPR" - Approach "DEP" - Departure "FSS" - FSS "AWS" - AWOS |  |
| COM ACTIVE LATLONALT:index | This will return the latitude, longitude and altitude corresponding to the indexed COM station associated with the active COM frequency. If the station is not associated with an airport, then the lat/lon/alt values returned will be -15943°, 80°, -10000 (this means that you can simply check that the altitude value is greater than 0 to assure the validity of the returned struct). Index is 1, 2 or 3. | Struct: SIMCONNECT_DATA_LATLONALT |  |
| COM AVAILABLE:index | True if COM1, COM2 or COM3 is available (depending on the index, either 1, 2, or 3) | Bool |  |
| COM LATLONALT:index | Not currently used in the simulation. | Struct: SIMCONNECT_DATA_LATLONALT |  |
| COM RECEIVE:index | Whether or not the plane is receiving on the indexed com channel or not (either 1, 2, or 3 for the index). | Bool |  |
| COM RECEIVE ALL | Toggles all COM radios to receive on | Bool |  |
| COM RECEIVE EX1:index | Whether or not the plane is receiving on the indexed com channel. Index is 1, 2 or 3. | Bool |  |
| COM SPACING MODE:index | The COM radio frequency step. Index is 1, 2 or 3. | Enum: 0 = 25kHz 1 = 8.33kHz |  |
| COM STANDBY FREQUENCY:index | Com standby frequency. Index is 1, 2 or 3. | Frequency BCD16 |  |
| COM STANDBY FREQ IDENT:index | The identity of the station that is tuned on the indexed standby COM radio. Index is 1, 2, or 3. | String |  |
| COM STANDBY FREQ TYPE:index | The type of COM frequency for the standby indexed COM system. Index is 1, 2, or 3. | String: "ATIS" - Atis "UNI" - Unicom "CTAF" - CTAF "GND" - Ground "TWR" - Tower "CLR" - Clearance Delivery "APPR" - Approach "DEP" - Departure "FSS" - FSS "AWS" - AWOS |  |
| COM STATUS:index | Radio status flag for the indexed com channel. Index is 1, 2 or 3. | Enum: -1 = Invalid 0 = OK 1 = Does not exist 2 = No electricity 3 = Failed |  |
| COM TEST:index | Enter an index of 1, 2 or 3. Will return TRUE if the COM system is working, FALSE otherwise. | Bool |  |
| COM TRANSMIT:index | Audio panel com transmit state. Index of 1, 2 or 3. | Bool |  |
| COM VOLUME | The volume of the COM Radio. | Percent |  |
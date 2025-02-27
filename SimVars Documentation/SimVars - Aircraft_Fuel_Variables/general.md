# General

The majority of these SimVars are only valid for legacy aircraft that have set up their fuel using the [FUEL] section of the flight model CFG file. Aircraft in Microsoft Flight Simulator should not be using this fuel method nor these SimVars, and should instead be defining things using the [FUEL_SYSTEM] section of the CFG file and the Fuel System SimVars.

| Simulation Variable | Description | Units | Settable |
| --- | --- | --- | --- |
| FUEL CROSS FEED:index | Cross feed valve setting. This will return the current setting for the fuel crossfeed for the indexed engine, based on the current status of the simulation and the Cross Feed key events. | Enum: 0 = Closed 1 = Open 2 = Left to Right 3 = Right to Left |  |
| FUEL DUMP ACTIVE | If 1 (TRUE) then the aircraft can dump fuel. | Bool |  |
| FUEL DUMP SWITCH | If set to 1 (TRUE) then the aircraft will dump fuel at the rate set by fuel_dump_rate parameter in the flight_model.cfg file. | Bool |  |
| FUEL LEFT CAPACITY | Maximum capacity in volume of all the tanks on the left side of the aircraft. | Gallons |  |
| FUEL LEFT QUANTITY | Current quantity in volume of all the tanks on the left side of the aircraft. | Gallons |  |
| FUEL PUMP | Currently not used within the simulation. | Number |  |
| FUEL RIGHT CAPACITY | Maximum capacity in volume of all the tanks on the right side of the aircraft. | Gallons |  |
| FUEL RIGHT QUANTITY | Current quantity in volume of all the tanks on the right side of the aircraft. | Gallons |  |
| FUEL SELECTED QUANTITY:index | Quantity of fuel in the tank referenced by the indexed selector. When using the legacy fuel system, this SimVar will return the quantity of fuel in the tank pointed to by the selector you chose with the index. If passing an index higher than the number of selectors - or when using the modern fuel system - it will return the total fuel quantity available. | Gallons |  |
| FUEL SELECTED QUANTITY PERCENT:index | Percent or capacity for the tank referenced by the indexed selector. When using the legacy fuel system, this SimVar will return the percentage of fuel in the tank pointed to by the selector you chose with the index. If passing an index higher than the number of selectors available - or when using the modern fuel system - it will return the percentage of total fuel quantity available. | Percent Over 100 |  |
| FUEL SELECTED TRANSFER MODE | The method of transfer for the fuel. Each of the available transfer options are explained below: off - Fuel transfer is switched off. auto - Automatically balance the fuel between the Center1 and Center2 tanks to maintain the center of gravity. forward - Fuel will be transferred forwards from the Center1 tank to the Center2 tank. aft - Fuel will be transferred aftwards from the Center2 tank to the Center1 tank. manual - Fuel will be transferred for 1 second from the Center1 tank to the Center2 tank at a rate of 1lbs/s. custom - This requires one or more pumps to have been defined using the fuel_transfer_pump.N parameter in the flight_model.cfg file, as well as their associated electrical circuits. | Enum: 0 = off 1 = auto 2 = forward 3 = aft 4 = manual 5 = custom |  |
| FUEL TOTAL CAPACITY | Total fuel capacity of the aircraft for all tanks. | Gallons |  |
| FUEL TOTAL QUANTITY | Current total quantity of fuel in volume for all tanks of the aircraft. | Gallons |  |
| FUEL TOTAL QUANTITY WEIGHT | Current total fuel weight for all tanks of the aircraft | Pounds |  |
| FUEL TRANSFER PUMP ON:index | Returns 1 (TRUE) if the indexed pump is active. | Bool |  |
| FUEL WEIGHT PER GALLON | The weight of the fuel, per gallon. | Pounds |  |
| NEW FUEL SYSTEM | Will return 1 (TRUE) if the aircraft is using the modern [FUEL_SYSTEM] or 0 (FALSE) for the legacy [FUEL]. | Bool |  |
| NUM FUEL SELECTORS | The number of fuel selectors on the aircraft. | Number |  |
| UNLIMITED FUEL | Will return 1 (TRUE) if the unlimited fuel flag has been enabled, or 0 (FALSE) otherwise. | Bool |  |
| UNUSABLE FUEL TOTAL QUANTITY | The total amount of fuel in all tanks of the aircraft which is not usable. | Gallons |  |
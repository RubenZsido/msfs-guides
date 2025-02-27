# Fuel System

These SimVars are dedicated to controlling the modern component fuel system, which you can set up in the [FUEL_SYSTEM] section of the flight_model.cfg. All aircraft made for Microsoft Flight Simulator should be using this system and these SimVars, and only legacy aircraft should be using the General SimVars and the [FUEL] section of the flight_model.cfg file.

| Simulation Variable | Description | Units | Settable |
| --- | --- | --- | --- |
| FUELSYSTEM ENGINE PRESSURE:index | The pressure of the fuel coming to the indexed engine. The index is the number of the engine N component as defined by the Engine.N parameter. | Kilo pascal |  |
| FUELSYSTEM JUNCTION SETTING:index | This will return the current Option for the indexed junction. The index is the number of the line N component as defined by the Junction.N parameter. | Number |  |
| FUELSYSTEM LINE FUEL FLOW:index | The fuel flowing through the indexed line in Gallons per Hour. The index is the number of the line N component as defined by the Line.N parameter. | Gallons per hour |  |
| FUELSYSTEM LINE FUEL LEVEL:index | The level of fuel in the indexed line in Gallons. The index is the number of the line N component as defined by the Line.N parameter. | Gallons |  |
| FUELSYSTEM LINE FUEL PRESSURE:index | The pressure in the indexed fuel line, measured in KiloPascal. The index is the number of the line N component as defined by the Line.N parameter. | Kilo pascal |  |
| FUELSYSTEM PUMP ACTIVE:index | Whether or not the indexed pump is actually active. The index is the number of the pump N component as defined by the Pump.N parameter. | Bool |  |
| FUELSYSTEM PUMP SWITCH:index | Whether or not the indexed pump is enabled. The index is the number of the pump N component as defined by the Pump.N parameter. | Bool |  |
| FUELSYSTEM TANK CAPACITY:index | Total capacity of the indexed fuel tank. The index is the number of the tank N component as defined by the Tank.N parameter. NOTE: This SimVar can only be used with the modern Fuel System. | Gallons |  |
| FUELSYSTEM TANK LEVEL:index | Quantity of fuel available in the indexed fuel tank. The index is the number of the tank N component as defined by the Tank.N parameter. NOTE: This SimVar can only be used with the modern Fuel System. | Percent Over 100 |  |
| FUELSYSTEM TANK QUANTITY:index | Quantity of fuel currently available in the indexed fuel tank. The index is the number of the tank N component as defined by the Tank.N parameter. NOTE: If the fuel system Version is 2 or below, the index value will be one of the Fuel Tank Selection indices. | Gallons |  |
| FUELSYSTEM TANK TOTAL QUANTITY:index | Total quantity of fuel available in the indexed fuel tank, including any unusable fuel. The index is the number of the tank N component as defined by the Tank.N parameter. NOTE: If the fuel system Version is 2 or below, the index value will be one of the Fuel Tank Selection indices. | Gallons |  |
| FUELSYSTEM TANK WEIGHT:index | Weight of fuel available in the indexed fuel tank. The index is the number of the tank N component as defined by the Tank.N parameter. NOTE: If the fuel system Version is 2 or below, the index value will be one of the Fuel Tank Selection indices. | Pounds |  |
| FUELSYSTEM TRIGGER STATUS:index | Whether or not the indexed trigger is active. The index is the number of the trigger N component as defined by the Trigger.N parameter. | Bool |  |
| FUELSYSTEM VALVE OPEN:index | Whether or not the indexed valve is actually fully opened. The index is the number of the valve N component as defined by the Valve.N parameter. | Percent Over 100 |  |
| FUELSYSTEM VALVE SWITCH:index | Whether or not the indexed valve is set to be opened. The index is the number of the valve N component as defined by the Valve.N parameter. | Bool |  |
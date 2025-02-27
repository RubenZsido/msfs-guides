# Aircraft Position, Direction And Speed

| Simulation Variable | Description | Units | Settable |
| --- | --- | --- | --- |
| ACCELERATION BODY X | Acceleration relative to aircraft X axis, in east/west direction. | Feet (ft) per second squared |  |
| ACCELERATION BODY Y | Acceleration relative to aircraft Y axis, in vertical direction. | Feet (ft) per second squared |  |
| ACCELERATION BODY Z | Acceleration relative to aircraft Z axis, in north/south direction. | Feet (ft) per second squared |  |
| ACCELERATION WORLD X | Acceleration relative to the earth X axis, in east/west direction. | Feet (ft) per second squared |  |
| ACCELERATION WORLD Y | Acceleration relative to the earth Y axis, in vertical direction. | Feet (ft) per second squared |  |
| ACCELERATION WORLD Z | Acceleration relative to the earth Z axis, in north/south direction. | Feet (ft) per second squared |  |
| SURFACE RELATIVE GROUND SPEED | The speed of the aircraft relative to the speed of the first surface directly underneath it. Use this to retrieve, for example, an aircraft's taxiing speed while it is moving on a moving carrier. It also applies to airborne aircraft, for example when a helicopter is successfully hovering above a moving ship, this value should be zero. The returned value will be the same as GROUND VELOCITY if the first surface beneath it is not moving. | Feet per second |  |
| GROUND VELOCITY | Speed relative to the earths surface. NOTE: This is available in multiplayer to all far aircraft. See here for more information: Note On SimVars In Multiplayer. | Knots |  |
| PLANE ALTITUDE | Altitude of aircraft. | Feet (ft) |  |
| PLANE ALT ABOVE GROUND | Altitude above the surface. | Feet (ft) |  |
| PLANE ALT ABOVE GROUND MINUS CG | Altitude above the surface minus CG. | Feet (ft) |  |
| PLANE BANK DEGREES | Bank angle, although the name mentions degrees the units used are radians. | Radians |  |
| PLANE HEADING DEGREES GYRO | Heading indicator taken from the aircraft gyro. | Degrees |  |
| PLANE HEADING DEGREES MAGNETIC | Heading relative to magnetic north - although the name mentions degrees the units used are radians. | Radians |  |
| PLANE HEADING DEGREES TRUE | Heading relative to true north - although the name mentions degrees the units used are radians. | Radians |  |
| PLANE LATITUDE | Latitude of aircraft, North is positive, South negative. | Radians |  |
| PLANE LONGITUDE | Longitude of aircraft, East is positive, West negative. | Radians |  |
| PLANE PITCH DEGREES | Pitch angle, although the name mentions degrees the units used are radians. | Radians |  |
| PLANE TOUCHDOWN BANK DEGREES | This float represents the bank of the player's plane from the last touchdown. | Degrees |  |
| PLANE TOUCHDOWN HEADING DEGREES MAGNETIC | This float represents the magnetic heading of the player's plane from the last touchdown. | Degrees |  |
| PLANE TOUCHDOWN HEADING DEGREES TRUE | This float represents the true heading of the player's plane from the last touchdown. | Degrees |  |
| PLANE TOUCHDOWN LATITUDE | This float represents the plane latitude for the last touchdown. | Radians |  |
| PLANE TOUCHDOWN LONGITUDE | This float represents the plane longitude for the last touchdown. | Radians |  |
| PLANE TOUCHDOWN NORMAL VELOCITY | This float represents the player's plane speed according to ground normal from the last touchdown. | Feet (ft) per second |  |
| PLANE TOUCHDOWN PITCH DEGREES | This float represents the pitch of the player's plane from the last touchdown. | Degrees |  |
| RELATIVE WIND VELOCITY BODY X | Lateral (X axis) speed relative to wind. | Feet (ft) per second |  |
| RELATIVE WIND VELOCITY BODY Y | Vertical (Y axis) speed relative to wind. | Feet (ft) per second |  |
| RELATIVE WIND VELOCITY BODY Z | Longitudinal (Z axis) speed relative to wind. | Feet (ft) per second |  |
| ROTATION ACCELERATION BODY X | Rotation acceleration relative to aircraft X axis. | Radians per second squared |  |
| ROTATION ACCELERATION BODY Y | Rotation acceleration relative to aircraft Y axis. | Radians per second squared |  |
| ROTATION ACCELERATION BODY Z | Rotation acceleration relative to aircraft Z axis. | Radians per second squared |  |
| ROTATION VELOCITY BODY X | Rotation velocity relative to aircraft X axis. | Feet (ft) per second |  |
| ROTATION VELOCITY BODY Y | Rotation velocity relative to aircraft Y axis. | Feet (ft) per second |  |
| ROTATION VELOCITY BODY Z | Rotation velocity relative to aircraft Z axis. | Feet (ft) per second |  |
| SLOPE TO ATC RUNWAY | The slope between the plane and the expected landing position of the runway. Returns 0 if no runway is assigned. | Radians |  |
| VELOCITY BODY X | True lateral speed, relative to aircraft X axis. | Feet (ft) per second |  |
| VELOCITY BODY Y | True vertical speed, relative to aircraft Y axis. | Feet (ft) per second |  |
| VELOCITY BODY Z | True longitudinal speed, relative to aircraft Z axis. | Feet (ft) per second |  |
| VERTICAL SPEED | The current indicated vertical speed for the aircraft. | Feet (ft) per second |  |
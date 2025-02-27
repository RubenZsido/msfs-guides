---
category: SimVars Documentation
topic: General
description: 
keywords: [Simulation Variable, Description, Units, Settable]
usage_context: Aircraft systems, simulation variables, flight modeling
---

# General

| Simulation Variable | Description | Units | Settable |
| --- | --- | --- | --- |
| BETA DOT | Beta dot | Radians per second |  |
| DECISION ALTITUDE MSL | Design decision altitude above mean sea level | Feet (ft) |  |
| DECISION HEIGHT | Design decision height | Feet (ft) |  |
| DESIGN CRUISE ALT | This design constant represents the optimal altitude the aircraft should maintain when in cruise. It is derived from the cruise_alt setting in the [REFERENCE SPEEDS] section of the flightmodel.cfg. Default is 1500ft. | Feet (ft) |  |
| DESIGN SPAWN ALTITUDE CRUISE | This design constant represents the spawn altitude for the aircraft when spawning in cruise. It is derived from the spawn_cruise_altitude setting in the [REFERENCE SPEEDS] section of the flightmodel.cfg. Default is 1500ft. | Feet (ft) |  |
| DESIGN SPAWN ALTITUDE DESCENT | This design constant represents the spawn altitude for the aircraft when spawning in descent. It is derived from the spawn_descent_altitude setting in the [REFERENCE SPEEDS] section of the flightmodel.cfg. Default is 500ft. | Feet (ft) |  |
| DESIGN SPEED CLIMB | This design constant represents the optimal climb speed for the aircraft. It is derived from the climb_speed setting in the [REFERENCE SPEEDS] section of the flightmodel.cfg. Default value is -1. | Feet (ft) per second |  |
| DESIGN SPEED MIN ROTATION | This design constant represents the minimum speed required for aircraft rotation. It is derived from the rotation_speed_min setting in the [REFERENCE SPEEDS] section of the flightmodel.cfg. Default value is -1. | Feet (ft) per second |  |
| DESIGN SPEED VC | This design constant represents the aircraft ideal cruising speed. It is derived from the cruise_speed setting in the [REFERENCE SPEEDS] section of the flightmodel.cfg. The default value is computed an internal function that uses the estimated cruise altitude and estimated cruise percent power, according of the engine type, the number of engines, the density, the wing area and some drag parameters. Normally this value is set in the CFG file and the default value is never used. | Feet (ft) per second |  |
| DESIGN SPEED VS0 | This design constant represents the the stall speed when flaps are fully extended. It is derived from the full_flaps_stall_speed setting in the [REFERENCE SPEEDS] section of the flightmodel.cfg. Default value is 0.8 x VS. | kias |  |
| DESIGN SPEED VS1 | This design constant represents the stall speed when flaps are fully retracted. It is derived from the flaps_up_stall_speed setting in the [REFERENCE SPEEDS] section of the flightmodel.cfg. Default value is 0. | kias |  |
| DESIGN TAKEOFF SPEED | This design constant represents the aircraft ideal takoff speed. It is derived from the takeoff_speed setting in the [REFERENCE SPEEDS] section of the flightmodel.cfg. | Knots |  |
| DYNAMIC PRESSURE | Dynamic pressure | Pounds per square foot (psf) |  |
| ESTIMATED CRUISE SPEED | Estimated cruise speed | Feet (ft) per second |  |
| G FORCE | Current g force | GForce |  |
| G LIMITER SETTING | This returns the setting of the G-limiter, as set using the GLimiterSetting parameter. | Enum: 0 = Off 1 = On 2 = Override |  |
| INCIDENCE ALPHA | Angle of attack | Radians |  |
| INCIDENCE BETA | Sideslip angle | Radians |  |
| IS TAIL DRAGGER | True if the aircraft is a taildragger | Bool |  |
| LINEAR CL ALPHA | Linear CL alpha | Per radian |  |
| MACH MAX OPERATE | Maximum design mach | Mach |  |
| MAX G FORCE | Maximum G force attained | Gforce |  |
| MIN DRAG VELOCITY | Minimum drag velocity, in clean, with no input and no gears, when at 10000ft. | Feet (ft) per second |  |
| MIN G FORCE | Minimum G force attained | Gforce |  |
| SEMIBODY LOADFACTOR X | Deprecated, do not use! | Number |  |
| SEMIBODY LOADFACTOR Y | Acceleration along the axis Y divided by the gravity constant g (usually around 9.81m.s²) | Number |  |
| SEMIBODY LOADFACTOR YDOT | Derivative of SEMIBODY LOADFACTOR Y in relation to time. | Per second |  |
| SEMIBODY LOADFACTOR Z | Deprecated, do not use! | Number |  |
| SIGMA SQRT | Sigma sqrt | Number |  |
| SIMULATED RADIUS | Simulated radius | Feet (ft) |  |
| STALL ALPHA | The angle of attack which produces the maximum lift coefficient before entering into stall conditions. | Radians |  |
| STATIC PITCH | The angle at which static pitch stability is achieved. | Radians |  |
| TYPICAL DESCENT RATE | the typical (normal) descent rate for the aircraft. | Feet (ft) per minute |  |
| WING AREA | Total wing area | Square feet (ft) |  |
| WING FLEX PCT:index | The current wing flex. Different values can be set for each wing (for example, during banking). Set an index of 1 for the left wing, and 2 for the right wing. | Percent Over 100 |  |
| WING SPAN | Total wing span | Feet (ft) |  |
| YAW STRING ANGLE | The yaw string angle. Yaw strings are attached to gliders as visible indicators of the yaw angle. An animation of this is not implemented in ESP. | Radians |  |
| YAW STRING PCT EXTENDED | Yaw string angle as a percentage | Percent Over 100 |  |
| ZERO LIFT ALPHA | The angle of attack at which the wing has zero lift. | Radians |  |
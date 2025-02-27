# Landing Gear

These SimVars are related to the landing gear of the aircraft. Note that some of them require an index to identify the landing gear. This index value should be one of the following:

| Simulation Variable | Description | Units | Settable |
| --- | --- | --- | --- |
| AUX WHEEL ROTATION ANGLE | Aux wheel rotation angle (rotation around the axis for the wheel). | Radians |  |
| AUX WHEEL RPM | Rpm of fourth set of gear wheels. | RPM |  |
| CENTER WHEEL ROTATION ANGLE | Center wheel rotation angle (rotation around the axis for the wheel). NOTE: This is available in multiplayer to all near aircraft. See here for more information: Note On SimVars In Multiplayer. | Radians |  |
| CENTER WHEEL RPM | Center landing gear rpm. | RPM |  |
| GEAR ANIMATION POSITION:index | Percent indexed gear animation extended. NOTE: This is available in multiplayer to all near aircraft. See here for more information: Note On SimVars In Multiplayer. | Percent |  |
| GEAR AUX POSITION | Percent auxiliary gear extended. | Percent Over 100 |  |
| GEAR AUX STEER ANGLE | Aux wheel angle, negative to the left, positive to the right. The aux wheel is the fourth set of landing gear, sometimes used on helicopters. | Radians |  |
| GEAR AUX STEER ANGLE PCT | Aux steer angle as a percentage. | Percent Over 100 |  |
| GEAR CENTER POSITION | Percent center gear extended. | Percent Over 100 |  |
| GEAR CENTER STEER ANGLE | Center wheel angle, negative to the left, positive to the right. NOTE: This is available in multiplayer to all near aircraft. See here for more information: Note On SimVars In Multiplayer. | Radians |  |
| GEAR CENTER STEER ANGLE PCT | Center steer angle as a percentage. | Percent Over 100 |  |
| GEAR DAMAGE BY SPEED | True if gear has been damaged by excessive speed. | Bool |  |
| GEAR EMERGENCY HANDLE POSITION | True if gear emergency handle applied. | Bool |  |
| GEAR HANDLE POSITION | The gear handle position, where 0 means the handle is retracted and 1 is the handle fully applied. | Percent Over 100 |  |
| GEAR HYDRAULIC PRESSURE | Gear hydraulic pressure. | Pound force per square foot (psf) |  |
| GEAR IS ON GROUND:index | True if the gear is on the ground. | Bool |  |
| GEAR IS SKIDDING:index | True if the gear is skidding. | Bool |  |
| GEAR LEFT POSITION | Percent left gear extended. | Percent Over 100 |  |
| GEAR LEFT STEER ANGLE | Left wheel angle, negative to the left, positive to the right. NOTE: This is available in multiplayer to all near aircraft. See here for more information: Note On SimVars In Multiplayer. | Radians |  |
| GEAR LEFT STEER ANGLE PCT | Left steer angle as a percentage. | Percent Over 100 |  |
| GEAR POSITION:index | Position of landing gear. NOTE: This is available in multiplayer to all near aircraft. See here for more information: Note On SimVars In Multiplayer. | Enum: 0 = unknown 1 = up 2 = down |  |
| GEAR RIGHT POSITION | Percent right gear extended. | Percent Over 100 |  |
| GEAR RIGHT STEER ANGLE | Right wheel angle, negative to the left, positive to the right. NOTE: This is available in multiplayer to all near aircraft. See here for more information: Note On SimVars In Multiplayer. | Radians |  |
| GEAR RIGHT STEER ANGLE PCT | Right steer angle as a percentage. | Percent Over 100 |  |
| GEAR SKIDDING FACTOR | The gear skidding factor, expressed as a value between 0 and 1. | Percent Over 100 |  |
| GEAR SPEED EXCEEDED | True if safe speed limit for gear exceeded. | Bool |  |
| GEAR STEER ANGLE:index | Alternative method of getting the steer angle. NOTE: This is available in multiplayer to all near aircraft. See here for more information: Note On SimVars In Multiplayer. | Radians |  |
| GEAR STEER ANGLE PCT:index | Alternative method of getting steer angle as a percentage. | Percent Over 100 |  |
| GEAR TAIL POSITION | Percent tail gear extended. NOTE: This is a deprecated legacy SimVar and should not be used, as it will always return 0. | Percent Over 100 |  |
| GEAR TOTAL PCT EXTENDED | Percent total gear extended. | Percent |  |
| GEAR WARNING:index | Gear warnings. | Enum: 0 = None 1 = Gear Up 2 = Amphibious Gear Up 3 = Amphibious Gear Down 4 = On Ground Handle Up |  |
| GEAR WATER DEPTH | The depth of the gear in the water. | Centimeters |  |
| IS GEAR FLOATS | True if landing gear are floats | Bool |  |
| IS GEAR RETRACTABLE | True if gear can be retracted | Bool |  |
| IS GEAR SKIDS | True if landing gear is skids | Bool |  |
| IS GEAR SKIS | True if landing gear is skis | Bool |  |
| IS GEAR WHEELS | True if landing gear is wheels | Bool |  |
| LEFT WHEEL ROTATION ANGLE | Left wheel rotation angle (rotation around the axis for the wheel). | Radians |  |
| LEFT WHEEL RPM | Left landing gear rpm | RPM |  |
| NOSEWHEEL LOCK ON | True if the nosewheel lock is engaged. This can be set using the NosewheelLock parameter. | Bool |  |
| NOSEWHEEL MAX STEERING ANGLE | Can be used to get or set the maximum permitted steering angle for the nose wheel of the aircraft. | Radians |  |
| RETRACT FLOAT SWITCH | True if retract float switch on | Enum: -1: Retracted 0: Neutral 1: Extended |  |
| RETRACT LEFT FLOAT EXTENDED | If aircraft has retractable floats. | Percent (0 is fully retracted, 100 is fully extended) |  |
| RETRACT RIGHT FLOAT EXTENDED | If aircraft has retractable floats. | Percent (0 is fully retracted, 100 is fully extended) |  |
| RIGHT WHEEL ROTATION ANGLE | Right wheel rotation angle (rotation around the axis for the wheel). | Radians |  |
| RIGHT WHEEL RPM | Right landing gear rpm. | RPM |  |
| STEER INPUT CONTROL | Position of steering tiller. | Percent Over 100 |  |
| TAILWHEEL LOCK ON | True if tailwheel lock applied. This can be set using the TailwheelLock parameter. | Bool |  |
| WATER LEFT RUDDER EXTENDED | Percent extended. | Percent |  |
| WATER LEFT RUDDER STEER ANGLE | Water left rudder angle, negative to the left, positive to the right. | Percent Over 100 |  |
| WATER LEFT RUDDER STEER ANGLE PCT | Water left rudder angle as a percentage. | Percent Over 100 |  |
| WATER RIGHT RUDDER EXTENDED | Percent extended. | Percent |  |
| WATER RIGHT RUDDER STEER ANGLE | Water right rudder angle, negative to the left, positive to the right. | Percent Over 100 |  |
| WATER RIGHT RUDDER STEER ANGLE PCT | Water right rudder as a percentage. | Percent Over 100 |  |
| WATER RUDDER HANDLE POSITION | Position of the water rudder handle (0 handle retracted, 1 rudder handle applied). | Percent Over 100 |  |
| WHEEL ROTATION ANGLE:index | Wheel rotation angle (rotation around the axis for the wheel). | Radians |  |
| WHEEL RPM:index | Wheel rpm. | RPM |  |
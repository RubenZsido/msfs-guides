# Brakes

| Simulation Variable | Description | Units | Settable |
| --- | --- | --- | --- |
| ANTISKID BRAKES ACTIVE | True if antiskid brakes active. This can be set using the AntiSkidActive parameter. | Bool |  |
| AUTOBRAKES ACTIVE | Whether or not the AutoBrakes are currently active. | Bool |  |
| AUTO BRAKE SWITCH CB | Auto brake switch position | Number |  |
| BRAKE DEPENDENT HYDRAULIC PRESSURE | Brake dependent hydraulic pressure reading | Pounds per square foot (psf) |  |
| BRAKE INDICATOR | Brake on indication | Position (0 to 16K) 0 = off 16K = full |  |
| BRAKE LEFT POSITION | Percent left brake. Note that this SimVar no longer sets the right brake percent and simply triggers a brake pressure increase regardless of the value passed. | Position (0 to 32K) 0 = off 32K = full |  |
| BRAKE LEFT POSITION EX1 | Triggers a brake pressure increase on the left brake regardless of the value passed. | Position (0 to 32K) 0 = off 32K = full |  |
| BRAKE PARKING INDICATOR | Parking brake indicator | Bool |  |
| BRAKE PARKING POSITION | Gets the parking brake position - either on (true) or off (false). | Bool |  |
| BRAKE RIGHT POSITION | Percent right brake. | Position (0 to 32K) 0 = off 32K = full |  |
| BRAKE RIGHT POSITION EX1 | Triggers a brake pressure increase on the right brake regardless of the value passed. | Position (0 to 32K) 0 = off 32K = full |  |
| REJECTED TAKEOFF BRAKES ACTIVE | Whether or not the rejected takeoff brakes are currently active. | Bool |  |
| TOE BRAKES AVAILABLE | True if toe brakes are available | Bool |  |
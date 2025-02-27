# Ornithopter

| Simulation Variable | Description | Units | Settable |
| --- | --- | --- | --- |
| ORNITHOPTER CONTROL LEVERS X | The deflection control left / right, usually used for animation. | Position 16k |  |
| ORNITHOPTER CONTROL LEVERS Y | The deflection control fore / aft, usually used for animation. | Position 16k |  |
| ORNITHOPTER DIVE MODE ENABLED | Returns whether the ornithopter dive mode is enabled (TRUE) or not (FALSE). | Boolean |  |
| ORNITHOPTER GLIDE MODE ENABLED | Returns whether the ornithopter glide mode is enabled (TRUE) or not (FALSE). | Boolean |  |
| ORNITHOPTER WINGS BRAKE ENABLED | Returns whether the ornithopter wing brake is enabled (TRUE) or not (FALSE). | Boolean |  |
| ORNITHOPTER WINGS BRAKE ACTIVE | Returns whether the ornithopter wing brake is active (TRUE) or not (FALSE). | Boolean |  |
| ORNITHOPTER WING HORIZONTAL TILT:index | The horizontal tilt of the indexed wing expressed as a value between 0 and 1. | Percent Over 100 |  |
| ORNITHOPTER WING PITCH:index | The pitch of the indexed wing expressed as a value between 0 and 1. | Percent Over 100 |  |
| ORNITHOPTER WING VERTICAL TILT:index | The vertical tilt of the indexed wing expressed as a value between 0 and 1. | Percent Over 100 |  |
| ORNITHOPTER WINGS BLUR | The current amount of blur applied to the animation of the ornithopter wings when flapping, expressed as a value between 0 (none) and 1 (maximum). | Percent Over 100 |  |
| ORNITHOPTER WINGS CLUTCH STATE | The current progress of engaging/disengaging the clutch on the wings when entering or leaving glide mode, expressed as a value between 0 and 1. | Percent Over 100 |  |
| ORNITHOPTER WINGS FOLDING OPERATION ID | Returns a value that defines the current folding operation of the wings, where: 0 - stand by 1 - parking (slow mode) 2 - setting up (slow mode) 3 - folding for diving (fast mode) 4 - unfolding from a dive (fast mode) | Number |  |
| ORNITHOPTER WORLD LIFT | Returns the current total lift of the ornithopter. | Pounds (lbs) |  |
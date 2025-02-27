# Carrier Operations

| Simulation Variable | Description | Units | Settable |
| --- | --- | --- | --- |
| BLAST SHIELD POSITION:index | Indexed from 1, 100 is fully deployed, 0 flat on deck | Percent Over 100 |  |
| CABLE CAUGHT BY TAILHOOK:index | A number 1 through 4 for the cable number caught by the tailhook. Cable 1 is the one closest to the stern of the carrier. A value of 0 indicates no cable was caught. | Number |  |
| CATAPULT STROKE POSITION:index | Catapults are indexed from 1. This value will be 0 before the catapult fires, and then up to 100 as the aircraft is propelled down the catapult. The aircraft may takeoff before the value reaches 100 (depending on the aircraft weight, power applied, and other factors), in which case this value will not be further updated. This value could be used to drive a bogie animation. | Number |  |
| HOLDBACK BAR INSTALLED | Holdback bars allow build up of thrust before takeoff from a catapult, and are installed by the deck crew of an aircraft carrier. | Bool |  |
| LAUNCHBAR HELD EXTENDED | This will be True if the launchbar is fully extended, and can be used, for example, to change the color of an instrument light. | Bool |  |
| LAUNCHBAR POSITION | Installed on aircraft before takeoff from a carrier catapult. Note that gear cannot retract with this extended. 100 = fully extended. | Percent Over 100 |  |
| LAUNCHBAR SWITCH | If this is set to True the launch bar switch has been engaged. | Bool |  |
| NUMBER OF CATAPULTS | Maximum of 4. A model can contain more than 4 catapults, but only the first four will be read and recognized by the simulation. | Number |  |
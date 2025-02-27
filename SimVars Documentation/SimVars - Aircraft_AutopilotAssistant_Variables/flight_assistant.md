---
category: SimVars Documentation
topic: Flight Assistant
description: The flight assistant panel is a panel that the user can open in the Microsoft Flight Simulator UI. this panel lets the user set a destination in-sim among nearest Airports, POI, Cities, etc... as well...
keywords: [Simulation Variable, Description, Units, Settable]
usage_context: Aircraft systems, simulation variables, flight modeling
---

# Flight Assistant

The flight assistant panel is a panel that the user can open in the Microsoft Flight Simulator UI. this panel lets the user set a destination in-sim among nearest Airports, POI, Cities, etc... as well as give information on some design speeds of the aircraft or turn on / off some assistances.

| Simulation Variable | Description | Units | Settable |
| --- | --- | --- | --- |
| FLY ASSISTANT CANCEL DESTINATION | When set with any value this will cancel the current flight assistant destination. | Number |  |
| FLY ASSISTANT CANCEL DESTINATION DISPLAY | When set with any value this will cancel the display of the current flight assistant destination. | Number |  |
| FLY ASSISTANT COM AI LOCKED | Returns true when the copilot AI control is active and therefore COM AI is locked on active too. | Bool |  |
| FLY ASSISTANT HAVE DESTINATION | Returns true when a destination has been set in the flight assistant. | Bool |  |
| FLY ASSISTANT LANDING SPEED | Returns the POH range or an estimated value for this speed. | String (max 32 chars) |  |
| FLY ASSISTANT LANDING SPEED DISPLAY MODE | Returns the display mode of the speed, CSS side (only STALL SPEED is working and will turn red when below). | String (max 32 chars) |  |
| FLY ASSISTANT NEAREST CATEGORY | Selected category | Enum: 1 = Airport 2 = Cities 3 = Landmark 4 = Fauna |  |
| FLY ASSISTANT NEAREST COUNT | Number of elements in this category | Number |  |
| FLY ASSISTANT NEAREST METADATA | Currently not used within the simulation. | - |  |
| FLY ASSISTANT NEAREST NAME | Returns the name of the element at the specified index. | String (max 256 chars) |  |
| FLY ASSISTANT NEAREST SELECTED | Returns the index of the currently selected element. | Number |  |
| FLY ASSISTANT RIBBONS ACTIVE | Returns true when both ribbon assistances are active (taxi and landing), and can also be used to set them. | Bool |  |
| FLY ASSISTANT SET AS DESTINATION | When set with any value, it will set the selected element as the current destination. | Number |  |
| FLY ASSISTANT STALL SPEED | Returns the flight assistant stall speed. | Knots |  |
| FLY ASSISTANT STALL SPEED DISPLAY MODE | Returns the flight assistant stall speed display mode. | String (max 32 chars) |  |
| FLY ASSISTANT TAKEOFF SPEED | Returns the flight assistant takeoff speed. | Knots |  |
| FLY ASSISTANT TAKEOFF SPEED DISPLAY MODE | Returns the flight assistant takeoff speed display mode. | String (max 32 chars) |  |
| FLY ASSISTANT TAKEOFF SPEED ESTIMATED | Can be set to override the estimated takeoff speed | Knots |  |
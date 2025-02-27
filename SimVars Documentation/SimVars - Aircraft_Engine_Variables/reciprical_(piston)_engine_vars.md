---
category: SimVars Documentation
topic: Reciprical (Piston) Engine Vars
description: The following SimVars are only valid for piston engines:
keywords: [Simulation Variable, Description, Units, Settable]
usage_context: Aircraft systems, simulation variables, flight modeling
---

# Reciprical (Piston) Engine Vars

The following SimVars are only valid for piston engines:

| Simulation Variable | Description | Units | Settable |
| --- | --- | --- | --- |
| RECIP CARBURETOR TEMPERATURE:index | Carburetor temperature the indexed engine (see note). | Celsius |  |
| RECIP ENG ALTERNATE AIR POSITION:index | Alternate air control the indexed engine (see note). | Position |  |
| RECIP ENG ANTIDETONATION TANK MAX QUANTITY:index | The maximum quantity of water/methanol mixture in the ADI tank for the indexed engine (see note). This value is set as part of the [ANTIDETONATION_SYSTEM.N] section in the aircraft configuration files. | Gallons |  |
| RECIP ENG ANTIDETONATION TANK QUANTITY:index | The quantity of water/methanol mixture currently in the ADI tank for the indexed engine (see note). | Gallons |  |
| RECIP ENG ANTIDETONATION TANK VALVE:index | The status of the ADI tank valve for the indexed engine (see note). | Bool |  |
| RECIP ENG ANTIDETONATION FLOW RATE:index | This gives the actual flow rate of the Anti Detonation system for the indexed engine (see note). | Gallons per hour |  |
| RECIP ENG BRAKE POWER:index | Brake power produced by the indexed engine (see note). | Foot pounds (ftlbs) per second |  |
| RECIP ENG COOLANT RESERVOIR PERCENT:index | Percent coolant available for the indexed engine (see note). | Percent |  |
| RECIP ENG COWL FLAP POSITION:index | Percent cowl flap opened for the indexed engine (see note). | Percent |  |
| RECIP ENG CYLINDER HEAD TEMPERATURE:index | Engine cylinder head temperature for the indexed engine (see note). | Celsius |  |
| RECIP ENG CYLINDER HEALTH:index | Index high 16 bits is engine number, low16 cylinder number, both indexed from 1. | Percent Over 100 |  |
| RECIP ENG DETONATING:index | Set to 1 (TRUE) if the indexed engine (see note) is detonating. | Bool |  |
| RECIP ENG EMERGENCY BOOST ACTIVE:index | Whether emergency boost is active (1, TRUE) or not (0, FALSE) for the indexed engine (see note). | Bool |  |
| RECIP ENG EMERGENCY BOOST ELAPSED TIME:index | The elapsed time that emergency boost has been active on the indexed engine (see note). The timer will start when boost is first activated. IMPORTANT! This timer does not reset. So if you set your time limit in the engines.cfg file to 315s and you spend 2 minutes with boost active, then pull back on the throttle for 1 minute, then engage boost again for 2 minutes, the simulation will consider that you spent 4 minutes with boost active. The 1 minute pause is not taken into account. | Hours |  |
| RECIP ENG ENGINE MASTER SWITCH:index | Whether or not the Engine Master switch is active on an indexed engine (see note). | Bool |  |
| RECIP ENG FUEL AVAILABLE:index | True if fuel is available for the indexed engine (see note). | Bool |  |
| RECIP ENG FUEL FLOW:index | The indexed engine (see note) fuel flow. | Pounds per hour |  |
| RECIP ENG FUEL NUMBER TANKS USED:index | Number of tanks currently being used by the indexed engine (see note). | Number |  |
| RECIP ENG FUEL TANKS USED:index | Fuel tanks used by the indexed engine (see note), one or more of the following bit flags: Center 1 Bit 0 Center 2 Bit 1 Center 3 Bit 2 Left Main Bit 3 Left Aux Bit 4 Left Tip Bit 5 Right Main Bit 6 Right Aux Bit 7 Right Tip Bit 8 External 1 Bit 9 External 2 Bit 10 | Mask |  |
| RECIP ENG FUEL TANK SELECTOR:index | Fuel tank selected for the indexed engine (see note). See Fuel Tank Selection for a list of values. | Enum |  |
| RECIP ENG GLOW PLUG ACTIVE:index | Whether or not the Glow Plug is active on the indexed engine (see note).. | Bool |  |
| RECIP ENG LEFT MAGNETO:index | Left magneto state for the indexed engine (see note). | Bool |  |
| RECIP ENG MANIFOLD PRESSURE:index | The indexed engine (see note) manifold pressure. | Pounds per square inch (psi |  |
| RECIP ENG NITROUS TANK MAX QUANTITY:index | The maximum quantity of nitrous permitted per indexed engine (see note). | Gallons |  |
| RECIP ENG NITROUS TANK QUANTITY:index | The quantity of nitrous per indexed engine (see note). | Gallons |  |
| RECIP ENG NITROUS TANK VALVE | The statte of the nitrous tank valve for the indexed engine (see note). Either 1 (TRUE) for open or 0 (FALSE) for closed. | Bool |  |
| RECIP ENG NUM CYLINDERS:index | The number of cylinders for the indexed engine (see note). | Number |  |
| RECIP ENG NUM CYLINDERS FAILED:index | The number of cylinders that have failed in the indexed engine (see note). | Number |  |
| RECIP ENG PRIMER:index | The indexed engine (see note) primer state. | Bool |  |
| RECIP ENG RADIATOR TEMPERATURE:index | The indexed engine (see note) radiator temperature. | Celsius |  |
| RECIP ENG RIGHT MAGNETO:index | The indexed engine (see note) right magneto state. | Bool |  |
| RECIP ENG STARTER TORQUE:index | Torque produced by the indexed engine (see note). | Foot pound |  |
| RECIP ENG SUPERCHARGER ACTIVE GEAR:index | Returns which of the supercharger gears is engaged for the indexed engine (see note). | Number |  |
| RECIP ENG TURBINE INLET TEMPERATURE:index | The indexed engine (see note) turbine inlet temperature. | Celsius |  |
| RECIP ENG TURBOCHARGER FAILED:index | The indexed engine (see note) turbo failed state. | Bool |  |
| RECIP ENG WASTEGATE POSITION:index | When the engines.cfg parameter turbocharged is TRUE, this SimVar will return the percentage that the turbo waste gate is closed for the indexed engine (see note). If the turbocharged variable is FALSE and the manifold_pressure_regulator parameter is TRUE, then this will return the percentage that the manifold pressure regulator is closed for the indexed engine. | Percent |  |
| RECIP MAX CHT | This will return the cylinder head temperature value set by the cht_heating_constant parameter in the engines.cfg file. | Rankine |  |
| RECIP MIXTURE RATIO:index | Fuel / Air mixture ratio for the indexed engine (see note). | Ratio |  |
| Number | Description |
| --- | --- |
| 0 | Off |
| 1 | All |
| 2 | Left |
| 3 | Right |
| 4 | Left auxiliary |
| 5 | Right auxiliary |
| 6 | Center |
| 7 | Center2 |
| 8 | Center3 |
| 9 | External1 |
| 10 | External2 |
| 11 | Right tip |
| 12 | Left tip |
| 13 | Crossfeed |
| 14 | Crossfeed left to right |
| 15 | Crossfeed right to left |
| 16 | Both |
| 17 | External |
| 18 | Isolate |
| 19 | Left main |
| 20 | Right main |
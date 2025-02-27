---
category: SimVars Documentation
topic: Miscellaneous Units
description: 
keywords: [Simulation Variable, Description, Units, Settable]
usage_context: Aircraft systems, simulation variables, flight modeling
---

# Miscellaneous Units

| Units | Description |
| --- | --- |
| FractionalLatLonDigits | The number of fractional lat / lon digits. |
| part | This is a base unit that will be used to make conversions when using other units in RPN and SimVar calculations. |
| half, halfs | The input will be halved. |
| third, thirds | The input will be divided by 3. |
| percent, percentage | Normally a value between 0 and 100, though sometimes values outside this range are possible (reverse thrust, for example). |
| percent over 100 | Normally a value between 0.0 and 1.0, though sometimes values outside this range are possible (reverse thrust, for example). |
| percent scaler 16k | This is a precentage value scaled by 16K, using the formula: VALUE / 16384.0 |
| percent scaler 32k | This is a precentage value scaled by 32K, using the formula: VALUE / 32767.0 |
| percent scaler 2pow23 | This is a precentage value scaled by 223, using the formula: VALUE / 8388608.0 |
| bel, bels | The bel is a unit used in the comparison of power levels in electrical communication or of intensities of sound, corresponding to an intensity ratio of 10 to 1. |
| decibel, decibels | The decibel is a relative unit of measurement equal to one tenth of a bel. |
| more_than_a_half | The input will be converted to either 0 (if it is less than a half of the "part" base value) or 1 (if it is more than half of the "part" base value) |
| times | The input value is a multiplier. |
| ratio | The input value is expected to be a ratio. |
| number, numbers | The input value is expected to be any real number. |
| scaler | The input value is expected to be a scaler. |
| position, position 16K, position 32K, position 128 | The input value will be converted to an integer position value either using the "part" base scale, or as a value between 0 and 16843, or 0 and , or as an integer between 0 and 128. |
| Enum | A positive or negative integer corresponding to the member of the enum |
| Bool, Boolean | The only reliable numeric equivalent is that 0 is returned for False. Non-zero values, especially both 1 and -1, are used to indicate True. |
| Bco16 | This unit requires a four digit octal number, and is usually only used for transponder codes. |
| mask | This indicates that the value is a bitmask where one or more bits in the value will be true/false, and each bit will represent a specific item. |
| flags | This indicates a selection of one or more flag values combined into a single value. |
| string | This unit expects some kind of string input. |
| per radian | The input is value that will be a ratio "per radian". |
| per degree | The input is value that will be a ratio "per degree". |
| keyframe, keyframes | The input is for an animation keyframe and will be divided by 200. |
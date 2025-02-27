---
category: SimVars Documentation
topic: Angles
description: 
keywords: [Simulation Variable, Description, Units, Settable]
usage_context: Aircraft systems, simulation variables, flight modeling
---

# Angles

| Units | Description |
| --- | --- |
| radian, radians | The radian is the base unit of temperature in the International System of Units (SI). One radian is defined as the angle subtended from the center of a circle which intercepts an arc equal in length to the radius of the circle. 1 radian is equivalent to 57.296°. |
| round, rounds | A round is defined as an angle of the full 360 degrees (ie: a circle). |
| degree, degrees, Degrees | The degree (°) is a base unit of angle defined such that an entire rotation is 360 degrees. 1° is equal to 0.0174533 radians. |
| grad, grads | The grad (or gradian) is a unit of measurement of an angle, defined as one hundredth of the right angle. 1 grad is equal to 90°, or 1.5708 radians. |
| angl16, degree angl16, degrees angl16 | This represents a unit that is a radian cast as a 16bit integer using the following formula: round(VALUE) / 65536.0 |
| angl32, degree angl32, degrees angl32 | This represents a unit that is a radian cast as a 32bit integer using the following formula: round(VALUE) / (65536.0 * 65536.0) |
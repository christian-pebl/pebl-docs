---
sidebar_position: 1
title: What is a tilt current meter?
description: How tilt current meters measure water current speed and direction, and where they fit against acoustic current profilers.
---

# What is a tilt current meter?

A tilt current meter measures water current speed and direction indirectly, by recording how far a submerged body leans over (tilts) under the drag of moving water, plus the direction it leans in from an internal compass. More tilt means faster current. There is no propeller, paddle wheel or acoustic transducer involved.

## How it works

* The instrument hangs from a fixed point (a mooring line, a frame, or its own weighted base) so that it is free to swing with the current.
* An internal accelerometer measures the tilt angle away from vertical.
* An internal compass (magnetometer) measures the heading the tilt points in.
* A calibration curve converts tilt angle to an estimated current speed, since the relationship depends on the shape and buoyancy of the instrument body, not a universal formula.

## Where it fits against other current sensors

* **Acoustic Doppler current profilers (ADCPs)** measure current speed and direction directly, at multiple depths in the water column, using sound reflected off particles in the water. They are accurate and give a full profile, but cost several times more than a tilt sensor and need more power.
* **Mechanical current meters** (paddle wheels, rotors) measure speed directly from a moving part, which is more prone to fouling and mechanical wear in a marine environment than a sealed tilt sensor.
* **Tilt current meters** trade some precision and full-depth-profile capability for a lower cost, no moving parts, and a simple single-point reading, which is often enough for a farm-level current assessment or mooring-load check rather than a full oceanographic survey.

## Tilt current meters in practice

PEBL's [GrowProbe](../growprobe/index.md) uses a tilt sensor for current speed and direction, alongside separately calibrated turbidity, temperature and light sensors. Its tilt angle range is 0 to 85°, roughly 0 to 2.5 knots (see the [specification](../growprobe/specification.md)); the current readings are raw tilt-angle output rather than independently calibrated against a known reference.

## Need help?

Get in touch at [hello@pebl-cic.co.uk](mailto:hello@pebl-cic.co.uk).

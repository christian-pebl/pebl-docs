---
sidebar_position: 5
title: Field results
description: What a real 62-day GrowProbe deployment actually recorded, parameter by parameter.
---

# Field results

Spec sheets describe what a sensor *can* measure. This page shows what one actually recorded: a real GrowProbe deployment, unedited apart from removing the site's exact location.

## The deployment

* **Device:** Growprobe unit D0005
* **Site:** a UK coastal aquaculture site, 15 m deployment depth
* **Duration:** 1 April to 2 June 2026, 62.2 days continuous
* **Sampling:** every 30 minutes, no gaps
* **Readings logged:** 2,985 timestamped records across all five parameters, close to 15,000 individual measurements from a single charge and a single recovery visit

## Temperature: 7.3 to 24.6 °C

Average temperature tracked the season: 8.4 °C in April, 9.2 °C in May, then a step up to an average of 18.4 °C in the early-June readings as the water warmed. Full range across the deployment was 7.3 to 24.6 °C, typical for UK coastal spring into early summer.

## Turbidity: 0 to 77.9 NTU

68% of readings came back below 0.5 NTU, clear water most of the time, with occasional sharp turbidity events up to 77.9 NTU. About 3% of readings exceeded the sensor's calibrated 0-40 NTU range, so the highest events are captured but read with reduced precision above the calibration ceiling, see the [turbidity / NTU glossary entry](../glossary/turbidity-and-ntu.md) for what that range means in practice. One reading in the full 2,985 hit the raw sensor channel's hardware ceiling during the single highest-turbidity event, a real limit worth knowing about, not a defect: it happened once in 62 days.

## Current: continuous tilt movement, not a static reading

The tilt sensor's pitch and roll swung across nearly their full range over the deployment (pitch 0 to 178°, roll -179° to 179°), and more than half of all 2,985 readings (57%) showed the probe rolled more than 90° from vertical. That is a real, continuously moving current field, not a fouled or stuck sensor sitting flat. This particular dataset doesn't carry an independently validated tilt-to-speed conversion for its exact mounting, so it's shown here as evidence the current sensor is doing its job, not as a knots figure, see [what is a tilt current meter](../glossary/tilt-current-meter.md) and the [specification](./specification.md) for how tilt angle maps to an approximate speed.

## What this costs per parameter

One GrowProbe, five parameters, one deployment, one CSV: £1,495 ex VAT works out to roughly £299 per parameter. A single dedicated turbidity logger alone commonly costs more than that whole unit, see the [full price comparison](https://www.pebl-cic.co.uk/post/affordable-multiparameter-water-quality-probes-in-2026-what-they-actually-cost).

## A note on this data

This is one real deployment from one PEBL customer, anonymised here (site identity and exact coordinates withheld). It illustrates what the instrument actually records in the field. It isn't a statistical guarantee of performance at every site, conditions vary with location, depth and mounting.

## Need help?

Get in touch at [hello@pebl-cic.co.uk](mailto:hello@pebl-cic.co.uk).

---
sidebar_position: 2
title: What is a multiparameter water quality logger?
description: What a multiparameter water quality logger measures, how it differs from single-parameter loggers, and how to pick one.
---

# What is a multiparameter water quality logger?

A multiparameter water quality logger is a single instrument that records several water-quality measurements at once, on the same schedule, to the same dataset, instead of running a separate single-parameter logger for each one. Deploy it once and recover one file covering everything it measures.

## What "multiparameter" typically covers

Different instruments combine different sets of parameters. Common ones across the industry include:

* **Physical parameters**: temperature, turbidity, light, current speed and direction.
* **Chemical parameters**: conductivity/salinity, dissolved oxygen, pH.
* **Biological proxies**: chlorophyll-a (a proxy for algal biomass).

No single instrument measures everything, and the right combination depends on what a site actually needs to track. A full water-chemistry sonde with conductivity, dissolved oxygen and pH is a different, typically more expensive instrument class than a physical-environment logger tracking temperature, turbidity, light and current, see [sonde vs CTD](./sonde-vs-ctd.md).

## Why use one instrument instead of several

* **One deployment, one dataset.** A single mooring point and a single CSV instead of reconciling timestamps and depths across multiple loggers.
* **Lower total hardware cost** than buying a separate logger per parameter, since a chassis, battery, memory and housing are shared.
* **Less field time.** One instrument to deploy, service and recover instead of several.

The tradeoff is that a combined instrument fixes which parameters travel together. If a site only ever needs one parameter, a dedicated single-parameter logger can still be the simpler choice.

## An example: GrowProbe

PEBL's [GrowProbe](../growprobe/index.md) is a multiparameter logger covering the physical-environment side: turbidity, temperature, light, current speed and current direction, in one 50 m-rated device. It does not measure conductivity, dissolved oxygen, pH or chlorophyll, see the [full specification](../growprobe/specification.md) and the [pricing FAQ](https://www.pebl-cic.co.uk/products) for how it compares to full water-chemistry sondes.

## Need help?

Get in touch at [hello@pebl-cic.co.uk](mailto:hello@pebl-cic.co.uk).

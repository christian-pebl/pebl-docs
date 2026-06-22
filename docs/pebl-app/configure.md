---
sidebar_position: 2
title: Configure
description: Set deployment details, video and image settings, presets, and sensor calibration.
---

# Configure

Open **Configure** from the Home card or the sidebar. The device must be stopped first. The Configure screen is one scrolling page that ends in **Save and start logging**.

![The PEBL App Configure screen, top to bottom.](/img/app-configure.png)

## Device to Configure

A summary of the connected device: its UID, storage used and free (here 2.5 GiB used of 117.7 GiB), and battery level.

## Deployment

* **Device Name**: a friendly name for the unit (here AML-3).
* **Deployment Coordinates**: latitude and longitude, with a coordinate-format selector (for example WGS84 Decimal).
* **Notes**: free-text deployment notes.
* **Deployment Depth**: depth in metres.

## Video Settings

| Setting | Options |
| --- | --- |
| **Presets** | A built-in preset (Standard, a high-quality preset for short deployments, or a storage-saver preset for long deployments), or any custom preset you have saved |
| **Resolution** | 1920 x 1080 (Full HD), 1280 x 720 (HD), or 640 x 480 (VGA) |
| **Frame Rate** | 15, 24, 30 or 60 fps |
| **Autofocus** | On or off |
| **Time Stamp Overlay** | On or off |
| **Brightness Cutoff** | On or off |

**Create preset from settings** saves the current video settings as a reusable preset.

## Image Settings

The same layout as Video Settings, for still images:

| Setting | Options |
| --- | --- |
| **Presets** | A built-in preset (for example a maximum-detail 12 MP preset), or a custom preset |
| **Resolution** | Up to 4608 x 2592 (12 MP) |
| **Autofocus** | On or off |
| **Time Stamp Overlay** | On or off |
| **Brightness Cutoff** | On or off |

## Sensor Calibration

Calibrate the on-board sensors. Each row shows when it was last calibrated and a **Calibrate sensor** button:

* **Heading Direction** (orientation / compass).
* **Turbidity**.

When everything is set, build a [Schedule](./schedule.md) and press **Save and start logging**. The status LED turns green and the device enters logging mode within about 30 seconds.

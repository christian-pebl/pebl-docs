---
sidebar_position: 2
title: Connect and configure
description: Connect to the PEBL App over WiFi, calibrate sensors and configure the GrowProbe.
---

# Connect and configure

:::tip
This is the quick version for the GrowProbe. For the full app reference (every setting, the schedule builder, and data and media management), see the [PEBL App guide](../pebl-app/index.md).
:::

<video controls preload="metadata" style={{width: '100%', borderRadius: '8px'}}>
  <source src="/videos/PEBL_GrowProbe_Calibration_V1.mp4" type="video/mp4" />
  Your browser does not support embedded video. <a href="/videos/PEBL_GrowProbe_Calibration_V1.mp4">Download the video</a> instead.
</video>

A 2-minute walkthrough of the full setup: connecting, calibrating the heading and turbidity sensor, and starting a logging session. Captions are burned in.

## Power up

1. Unscrew the float to access the power button.
2. Press and hold the **power button for 5 seconds**. A light shows the WiFi turning on.

## Connect to the PEBL App

1. On your phone or laptop, join the GrowProbe's WiFi network. The network name and password are the same, and match the device serial number, for example `Growprobe-D0012`.
2. Open [peblapp.co.uk](https://peblapp.co.uk) (or `10.0.0.1:8000`) in any browser.

:::info
No internet or mobile signal is needed. The PEBL App runs entirely over the GrowProbe's own WiFi network, so it works anywhere, including offshore.
:::

## Calibrate the heading (compass)

In the PEBL App, go to **Configure** and calibrate the heading direction first, before turbidity.

:::warning
Position the device on your rigging frame before calibrating. Metal objects affect compass readings, so calibrate with all rigging in place for accurate headings. During calibration, tilt through all orientations with smooth, continuous movements. It takes about 30 to 60 seconds.
:::

Tap **Start Calibration** and move the device around for about a minute, until the app shows accurate north and south directions.

## Calibrate the turbidity sensor

1. Start fresh with the **zero NTU** calibration.
2. Fit the waterproofing ring and slide the clear acrylic tube onto the device.
3. Fill the tube with water to the top and start the measurement. This gives the zero NTU reading.
4. Enter **40 NTU**, pour in the 40 NTU calibration fluid, and press **Start Calibration**. This gives the 40 NTU reading.
5. Remove the liquid and rinse the GrowProbe thoroughly.

:::tip
This is the quick field version. For the precise bench procedure (exact volumes, timings and safety information), see [Turbidity calibration](./turbidity-calibration.md).
:::

## Set deployment details and start logging

1. Enter a device name, the deployment depth, and any notes.
2. Set the start date and time. The logging interval is preset to 30 minutes, but you can change it.
3. Press **Save and start logging**.

You then have 30 seconds to review your settings before the device shuts down and enters logging mode.

## Deploy

Screw the float back on and deploy the probe.

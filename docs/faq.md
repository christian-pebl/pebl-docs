---
sidebar_position: 8
title: FAQ and troubleshooting
description: Common questions and fixes for the PEBL SubCam, from connecting and charging to deployment and care.
---

# FAQ and troubleshooting

Quick answers to common SubCam questions. Each links to the fuller guide page.

## Connecting

### I can't see the SubCam's WiFi network

Power the SubCam on (hold the power button for 5 seconds) and wait about 20 seconds for it to start broadcasting. Check the status LED is on, and make sure WiFi is enabled on your phone or laptop. The network is named after the device serial, for example `Subcam-D0001`. See [Connect and configure](./connect-and-configure.md).

### The WiFi says "no internet"

That is expected. The SubCam's WiFi is a local network with no internet of its own, so your device reports "no internet" for it. The PEBL App still works fully over that connection. See the [PEBL App guide](./pebl-app/index.md).

### The app won't load

Make sure you are connected to the SubCam's WiFi, then open [peblapp.co.uk](https://peblapp.co.uk) or `10.0.0.1:8000`. If `peblapp.co.uk` does not load, use `10.0.0.1:8000` directly.

## Power and charging

### The charge LEDs are flashing red

That means an incompatible charger or cable. Use the supplied **9V USB-C PD** charger and cable. See [Hardware, LEDs and charging](./hardware.md).

### The device won't turn on

The battery may be flat. Charge it (the charge LEDs show the level), then hold the power button for 5 seconds.

### How long does charging take, and how long does a charge last?

A full charge takes about 4 hours and gives up to 15 hours of recording, which you can spread across a schedule or use in a single session. See the [Specification](./specification.md).

### What do the status LED colours mean?

Orange means on but not yet configured, green means configured, and a pulsing LED means booting or initialising. Full table on [Hardware, LEDs and charging](./hardware.md).

## Configuring and scheduling

### The Configure button is greyed out

The device is logging. Press **Stop** first (this ends the session and does not delete any data), then open Configure. See [Configure](./pebl-app/configure.md).

### The heading or compass reading looks wrong

Calibrate the magnetometer with all rigging and metal hardware in their final positions, tilting the device smoothly through all orientations (about 30 to 60 seconds). See [Configure](./pebl-app/configure.md).

### Should I use Smart Capture or a Custom Schedule?

Use **Smart Capture** to set a deployment window and recordings per day and let the device adapt to daylight (dawn and dusk fixed). Use a **Custom Schedule** to define each wake event yourself. See [Schedule](./pebl-app/schedule.md).

### How do I make a deployment last longer?

Record fewer or shorter clips, lower the resolution or frame rate, or use the storage-saver preset. The Schedule screen shows a live recording estimate so you can balance coverage against the battery and storage budget. See [Schedule](./pebl-app/schedule.md).

## Data and media

### How do I get my data and media off the device?

Two ways: in the PEBL App, use the **Data** and **Media** screens; or stop the device, remove the SD card, and read it on a computer. See [Data and media](./pebl-app/data-and-media.md).

### What is in the data file?

A CSV sensor log (water temperature, camera orientation and other sensor readings), named with the device name and the logging window. See [Data and media](./pebl-app/data-and-media.md).

### What video and photo formats does it produce?

H.264 video (`.mp4`) and JPEG stills (`.jpg`). See the [Specification](./specification.md).

## Deployment and care

### How deep can the SubCam go?

It is rated for continuous submersion to 50 m. See the [Specification](./specification.md).

### How do I look after it after a deployment?

Rinse in fresh water, clean the lens with a soft cloth and fresh water or isopropyl alcohol (no abrasives), then dry the body and the area around the USB-C bung. See [Maintenance](./maintenance.md).

### Can I open the USB-C port when the device is wet?

No. The bung keeps the device sealed. Only open it (to charge or to remove the SD card) when the device is dry, and dry around the port before refitting the bung. See [Maintenance](./maintenance.md).

### How should I store it between deployments?

Charge to roughly half full, keep it cool, dry and out of direct sunlight in the supplied IP67 case, and top up the charge every few months. See [Maintenance](./maintenance.md).

## Mounting

### How do I mount the SubCam?

On a pole using the optional mounting kit (see [Mounting](./mounting.md)), or on a benthic Microlander frame for seabed deployments (see the [Mooring Guide](./mooring-guide/index.md)).

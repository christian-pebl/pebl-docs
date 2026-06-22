---
sidebar_position: 2
title: Hardware, LEDs and charging
description: The SubCam controls, status and charge LEDs, power, and charging.
---

# Hardware, LEDs and charging

## The device end

All controls and indicators are on the device end face.

![SubCam device end: power button, status LED, SD card slot, charge LEDs, USB-C port and serial number.](/img/subcam-ui.png)

1. Power button
2. Device status LED
3. SD card slot
4. Charge status LEDs
5. USB-C charge port
6. Serial number

## Power on and off

Press and hold the **power button for 5 seconds** to turn the SubCam on or off.

## Status LED

The device status LED shows whether the SubCam is on and whether it has been configured.

![SubCam status LED states.](/img/subcam-status-led.png)

| Status LED | Meaning |
| --- | --- |
| Orange, pulsing | Device booting, not configured |
| Orange, steady | Device on, not configured |
| Green, pulsing | Device initialising, configured |
| Green, steady | Device on, configured |

## Charging

Plug the supplied PEBL charger into a mains socket and the USB-C cable into the SubCam.

![SubCam charge status LED levels.](/img/subcam-charge-led.png)

| Charge status LEDs | Battery level |
| --- | --- |
| 1 LED pulsing | &lt; 25% |
| 2 LEDs lit | &gt; 25% |
| 3 LEDs lit | &gt; 50% |
| 4 LEDs lit | &gt; 75% |
| 4 LEDs steady | 100%, fully charged |
| 4 LEDs flashing red | Incompatible charger or cable |

:::warning
Use the supplied **9V USB-C PD** charger and cable. A flashing red charge LED means the charger or cable is not compatible.
:::

A full charge takes about 4 hours. See the [Specification](./specification.md) for battery and charging details.

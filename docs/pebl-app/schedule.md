---
sidebar_position: 3
title: Schedule
description: Build a custom capture schedule, or let the device decide with Smart Capture.
---

# Schedule

The Schedule section sits at the bottom of the Configure screen. It controls when the device wakes and what it captures.

![The Schedule builder in the PEBL App.](/img/app-schedule.png)

## Schedule Mode

* **Custom Schedule**: you define one or more wake events (below).
* **Smart Capture**: the device captures adaptively rather than to a fixed schedule.

## Building a custom schedule

Press **Add schedule** to add a wake-event row. Each row has:

| Field | Meaning |
| --- | --- |
| **Start Capture** | The date and time the event first fires. |
| **Video Length** | How long to record video, in seconds or minutes. |
| **Image Burst** | How many still images to take at the event. |
| **Repeat Every** | The interval between repeats, in minutes, hours or days. |
| **Limit Times** | Optionally restrict the event to certain times of day. |
| **Sensor Logging** | Whether to log the on-board sensors at this event. |

Add as many rows as you need (each row has a delete button), then press **Save and start logging**.

:::tip
Plan the schedule against the device's recording budget (up to 15 hours of video on the SubCam). Short, frequent clips stretch a deployment across weeks. Long or continuous capture uses the budget quickly.
:::

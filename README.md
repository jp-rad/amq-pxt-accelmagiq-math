
> Open this page at GitHub Pages: [https://jp-rad.github.io/amq-pxt-accelmagiq-math/](https://jp-rad.github.io/amq-pxt-accelmagiq-math/)

## Quaternions with AccelMagiQ and micro:bit!

A Simplified Analytic Attitude Determination Algorithm
using Accelerometer and Magnetometer on micro:bit.

It's like magic! This algorithm turns raw data into accurate and efficient quaternion estimations,
transforming your projects and making you go, "Wow!" Using the handy micro:bit, it feels like trying
out quaternions is pure magic. AccelMagiQ brings a touch of enchantment to the technical world.
We hope this helps you in your learning journey and sparks your curiosity about the fascinating
world of quaternions.

"AccelMagiQ" refers to this amazing algorithm that combines accelerometer and magnetometer data to
create precise quaternion calculations. It's a playful blend of 'acceleration', 'magnetometer', and 'magic' with
quaternions ('Q'), making advanced concepts seem like magic!


- [https://github.com/jp-rad/amq-pxt-accelmagiq-estimator/](https://github.com/jp-rad/amq-pxt-accelmagiq-estimator/)
- [https://github.com/jp-rad/amq-pxt-accelmagiq-service/](https://github.com/jp-rad/amq-pxt-accelmagiq-service/)
- [https://github.com/jp-rad/amq-pxt-accelmagiq-math/](https://github.com/jp-rad/amq-pxt-accelmagiq-math/)
- [https://github.com/jp-rad/amq-weblueth-accelmagiq/](https://github.com/jp-rad/amq-weblueth-accelmagiq/)


> [DEMO (github pages) - https://jp-rad.github.io/amq-weblueth-accelmagiq/](https://jp-rad.github.io/amq-weblueth-accelmagiq/)


# Blocks preview

<!--
This image shows the blocks code from the last commit in master.
This image may take a few minutes to refresh.

![A rendered view of the blocks](https://github.com/jp-rad/amq-pxt-accelmagiq-math/raw/master/.github/makecode/blocks.png)
-->
![A rendered view of the blocks](https://github.com/jp-rad/amq-pxt-accelmagiq-math/raw/master/.github/statics/blocks.png)

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/jp-rad/amq-pxt-accelmagiq-math** and import

```text
https://github.com/jp-rad/amq-pxt-accelmagiq-math
```

## Downloaded HEX file to Use as Extension

Released HEX file can be imported as an **extension** in MakeCode.

* open [https://github.com/jp-rad/amq-pxt-accelmagiq-math/releases](https://github.com/jp-rad/amq-pxt-accelmagiq-math/releases)
* download HEX file
* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* click on **Import File**
* select downloaded HEX file and click on **Go ahead!**

## Example

**JavaScript**

```js

let angle: accelmagiq.EulerAngles = null
let estimated: number[] = []
if (input.buttonIsPressed(Button.B)) {
    input.calibrateCompass()
}
accelmagiq.setCoordinateSystem(accelmagiq.CoordinateSystem.BASIC)
accelmagiq.setLowPassFilterAlpha(0.2)
basic.forever(function () {
    estimated = accelmagiq.estimate()
    accelmagiq.notifyData(estimated)
    angle = accelmagiq.rpyFromQuat(accelmagiq.quatFrom(estimated))
    serial.writeNumbers([
    accelmagiq.intDeg(accelmagiq.angle(angle, accelmagiq.AngleRPY.Roll)),
    accelmagiq.intDeg(accelmagiq.angle(angle, accelmagiq.AngleRPY.Pitch)),
    accelmagiq.intDeg(accelmagiq.angle(angle, accelmagiq.AngleRPY.Yaw)),
    accelmagiq.intDeg(accelmagiq.angle(angle, accelmagiq.AngleRPY.Azimuth))
    ])
})

```

**Blocks**

```blocks

if (input.buttonIsPressed(Button.B)) {
    input.calibrateCompass()
}
accelmagiq.setCoordinateSystem(accelmagiq.CoordinateSystem.BASIC)
accelmagiq.setLowPassFilterAlpha(0.2)

```

```blocks

let estimated: number[] = []
let angle: accelmagiq.EulerAngles = null
basic.forever(function () {
    estimated = accelmagiq.estimate()
    accelmagiq.notifyData(estimated)
    angle = accelmagiq.rpyFromQuat(accelmagiq.quatFrom(estimated))
    serial.writeNumbers([
    accelmagiq.intDeg(accelmagiq.angle(angle, accelmagiq.AngleRPY.Roll)),
    accelmagiq.intDeg(accelmagiq.angle(angle, accelmagiq.AngleRPY.Pitch)),
    accelmagiq.intDeg(accelmagiq.angle(angle, accelmagiq.AngleRPY.Yaw)),
    accelmagiq.intDeg(accelmagiq.angle(angle, accelmagiq.AngleRPY.Azimuth))
    ])
})

```

#### Metadata (used for search, rendering)

* for PXT/microbit

<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/jp-rad/pxt-ubit-extension/.github/statics/gh-pages-img.css">
<script src="https://cdn.jsdelivr.net/gh/jp-rad/pxt-ubit-extension/.github/statics/gh-pages-embed.js"></script>
<script>makeCodeRender("{{ site.makecode.home_url }}", [ "estimator=github:jp-rad/amq-pxt-accelmagiq-estimator", "service=github:jp-rad/amq-pxt-accelmagiq-service", "math=github:jp-rad/amq-pxt-accelmagiq-math", ]);</script>

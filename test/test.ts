/**
 * tests go here; this will not be compiled when this package is used as an extension.
 */
let quaternion1 = accelmagiq.quatFrom([
    1,
    2,
    3,
    4
])
serial.writeNumbers(accelmagiq.quatAsArray(quaternion1))
quaternion1 = accelmagiq.normalize(quaternion1)
serial.writeNumbers(accelmagiq.quatAsArray(quaternion1))
serial.writeNumbers(accelmagiq.quatAsArray(accelmagiq.conjugate(quaternion1)))
let quaternion2 = accelmagiq.multiply(quaternion1, quaternion1)
serial.writeNumbers(accelmagiq.quatAsArray(quaternion2))
serial.writeNumbers(accelmagiq.quatAsArray(accelmagiq.diff(quaternion1, quaternion2)))
serial.writeNumbers(accelmagiq.quatAsArray(accelmagiq.diff(quaternion2, quaternion1)))
serial.writeValue("a1", accelmagiq.quatRotationAngle(quaternion1))
serial.writeValue("a2", accelmagiq.quatRotationAngle(quaternion2))
let angle1 = accelmagiq.rpyFromQuat(quaternion1)
serial.writeNumbers(accelmagiq.rpyAsArray(angle1))
serial.writeValue("R", accelmagiq.intDeg(accelmagiq.angle(angle1, accelmagiq.AngleRPY.Roll)))
serial.writeValue("P", accelmagiq.intDeg(accelmagiq.angle(angle1, accelmagiq.AngleRPY.Pitch)))
serial.writeValue("Y", accelmagiq.intDeg(accelmagiq.angle(angle1, accelmagiq.AngleRPY.Yaw)))
serial.writeValue("A", accelmagiq.intDeg(accelmagiq.angle(angle1, accelmagiq.AngleRPY.Azimuth)))

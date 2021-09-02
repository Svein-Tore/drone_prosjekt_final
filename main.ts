blockytalky.onReceivedString(function (key, receivedString) {
    motatte_tegn = receivedString
})
let roll = 0
let pitch = 0
let yaw = 0
let throttle = 0
let motatte_tegn = ""
let tekst_til_kk2 = ""
motatte_tegn = "0R0T0Y0"
serial.redirect(
SerialPin.P1,
SerialPin.P2,
BaudRate.BaudRate115200
)
basic.forever(function () {
    basic.clearScreen()
    tekst_til_kk2 = "P" + motatte_tegn
    throttle = AirBit.getNumber("T", tekst_til_kk2)
    yaw = AirBit.getNumber("Y", tekst_til_kk2)
    pitch = AirBit.getNumber("P", tekst_til_kk2)
    roll = AirBit.getNumber("R", tekst_til_kk2)
    led.plot(Math.map(roll, -90, 90, 0, 5), Math.map(pitch, -90, 90, 5, 0))
    led.plot(0, Math.map(throttle, 0, 100, 4, 0))
    led.plot(Math.map(yaw, -45, 45, 0, 4), 0)
    led.plot(4, 4)
    AirBit.FlightControl(
    throttle,
    yaw,
    pitch,
    roll,
    0,
    1,
    0
    )
})

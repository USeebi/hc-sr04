let distance = 0
basic.pause(200)
servos.P2.setAngle(0)
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(distance)
        basic.pause(500)
    } else {
        if (distance <= 10) {
            servos.P2.setAngle(90)
        } else {
            servos.P2.setAngle(0)
        }
        basic.pause(500)
    }
})

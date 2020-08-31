input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # # . . .
        # # . . .
        `)
    basic.showIcon(IconNames.Heart)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.showString("WOEF!")
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . # . # .
        . . . . .
        . . . . .
        . # # # .
        # . . . #
        `)
    basic.pause(500)
    music.playMelody("D C D C D C D C ", 120)
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("A F G F D E D C ", 120)
    basic.pause(200)
    basic.showString("WOEF!")
    basic.showLeds(`
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        . # # # .
        `)
})
basic.showLeds(`
    . . . # .
    # . . # #
    # # # # #
    # # # # .
    . # . # .
    `)
basic.showString("zz.zz.zz")
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    # # . . .
    # # . . .
    `)
basic.showString("WAF! WAF!")
basic.forever(function () {
    basic.showLeds(`
        . . . # .
        # . . # #
        # # # # #
        # # # # .
        . # . # .
        `)
})

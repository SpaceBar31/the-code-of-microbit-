input.onGesture(Gesture.LogoUp, function () {
    basic.showString("Sus")
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . # # .
        . # . . #
        # # # # .
        # # # # .
        . # . # .
        `)
})
basic.forever(function () {
	
})

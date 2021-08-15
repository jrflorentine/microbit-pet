input.onButtonPressed(Button.A, function () {
    timer = 0
    basic.showIcon(IconNames.Happy)
    music.playMelody("E B C5 A B G A F ", 200)
})
input.onGesture(Gesture.Shake, function () {
    timer = 0
    basic.showIcon(IconNames.Surprised)
    music.playMelody("C D E F G A B C5 ", 200)
})
let timer = 0
timer = 0
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    . # # # .
    . . . . .
    `)
music.playMelody("A F E F D G E F ", 200)
basic.forever(function () {
    basic.pause(1000)
    timer += 1
    if (timer == 10) {
        basic.showIcon(IconNames.Sad)
        music.playMelody("C5 B A G F E D C ", 200)
    }
})

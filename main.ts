function newTarget () {
    target = game.createSprite(randint(0, 4), randint(0, 4))
}
input.onButtonPressed(Button.A, function () {
    sprite.turn(Direction.Left, 45)
})
input.onButtonPressed(Button.B, function () {
    sprite.turn(Direction.Right, 45)
})
let target: game.LedSprite = null
let sprite: game.LedSprite = null
game.setScore(0)
sprite = game.createSprite(2, 2)
sprite.turn(Direction.Right, randint(0, 180))
newTarget()
basic.forever(function () {
    basic.pause(100)
    basic.clearScreen()
    sprite.move(1)
    sprite.ifOnEdgeBounce()
    if (sprite.isTouching(target)) {
        game.addScore(1)
        basic.showNumber(game.score())
        target.delete()
        newTarget()
    }
})

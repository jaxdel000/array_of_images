let count = 0
let list = [sprites.castle.skellyFront, sprites.castle.skellyWalkFront1, sprites.castle.skellyAttackFront1, sprites.castle.skellyAttackFront3, sprites.castle.skellyAttackFront4, sprites.castle.skellyFront]
let duck = sprites.create(list[0], SpriteKind.Player)
game.onUpdateInterval(200, function () {
    duck.setImage(list[count % list.length])
    count += 1
})

namespace SpriteKind {
    export const OverlapChangeLevel = SpriteKind.create()
}
function SetChaseCar () {
    for (let value of tiles.getTilesByType(assets.tile`SpawnChaseCar`)) {
        PursuitCar = sprites.create(img`
            . . . . . . e e c c e e . . . . 
            . . . . . e 2 2 2 2 2 2 e . . . 
            . . . . 2 c 2 2 2 2 2 2 c 2 . . 
            . . . e 2 c 4 2 2 2 2 2 c 2 e . 
            . . . f 2 2 4 2 2 2 2 2 c 2 f . 
            . . . f 2 2 4 2 2 2 2 2 2 2 f . 
            . . . f 2 2 4 2 2 2 2 2 2 2 f . 
            . . . f 2 c 2 4 4 2 2 2 c 2 f . 
            . . . e 2 c e c c c c e c 2 e . 
            . . . e 2 e c b b b b c e 2 e . 
            . . . e 2 e b b b b b b e 2 e . 
            . . . e e e e e e e e e e e e . 
            . . . f e d e e e e e e d e f . 
            . . . f e 2 d e e e e d 2 e f . 
            . . . f f e e e e e e e e f f . 
            . . . . f f . . . . . . f f . . 
            `, SpriteKind.Player)
        tiles.placeOnTile(PursuitCar, value)
        scene.cameraFollowSprite(PursuitCar)
        controller.moveSprite(PursuitCar)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile19`, function (sprite, location) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    tiles.setCurrentTilemap(tilemap`level4`)
    scene.cameraFollowSprite(PursuitCar)
    info.changeScoreBy(1)
    PursuitCar.setPosition(100, 540)
    game.splash("Level 2")
    SetCopCar2()
    pause(1000)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    PursuitCar,
    [img`
        . . . . . . e e c c e e . . . . 
        . . . . . e 2 2 2 2 2 2 e . . . 
        . . . . 2 c 2 2 2 2 2 2 c 2 . . 
        . . . e 2 c 4 2 2 2 2 2 c 2 e . 
        . . . f 2 2 4 2 2 2 2 2 c 2 f . 
        . . . f 2 2 4 2 2 2 2 2 2 2 f . 
        . . . f 2 2 4 2 2 2 2 2 2 2 f . 
        . . . f 2 c 2 4 4 2 2 2 c 2 f . 
        . . . e 2 c e c c c c e c 2 e . 
        . . . e 2 e c b b b b c e 2 e . 
        . . . e 2 e b b b b b b e 2 e . 
        . . . e e e e e e e e e e e e . 
        . . . f e d e e e e e e d e f . 
        . . . f e 2 d e e e e d 2 e f . 
        . . . f f e e e e e e e e f f . 
        . . . . f f . . . . . . f f . . 
        `],
    500,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.OverlapChangeLevel, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.OverlapChangeLevel)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    game.gameOver(false)
})
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    CopCar.follow(PursuitCar, 85)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile15`, function (sprite, location) {
    controller.moveSprite(PursuitCar, 50, 50)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile22`, function (sprite, location) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    tiles.setCurrentTilemap(tilemap`level1`)
    scene.cameraFollowSprite(PursuitCar)
    info.changeScoreBy(1)
    PursuitCar.setPosition(70, 540)
    game.splash("Level 2")
    SetCopCar2()
    pause(1000)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`EnemyOverlap1`, function (sprite, location) {
    for (let value of tiles.getTilesByType(assets.tile`EnemyOverlap1`)) {
        tiles.setTileAt(value, assets.tile`myTile13`)
    }
    PullOutCopCar()
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.brick, function (sprite, location) {
    game.gameOver(false)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile16`, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(3, 14), assets.tile`myTile15`)
    tiles.setTileAt(tiles.getTileLocation(2, 13), assets.tile`myTile15`)
    tiles.setTileAt(tiles.getTileLocation(1, 12), assets.tile`myTile15`)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
scene.onOverlapTile(SpriteKind.Enemy, sprites.builtin.brick, function (sprite, location) {
	
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
	
})
function PullOutCopCar () {
    for (let value of tiles.getTilesByType(assets.tile`CopCarPullOut`)) {
        CopCar = sprites.create(img`
            . . . . . . 8 8 c c 8 8 . . . . 
            . . . . . 8 6 6 6 6 6 6 8 . . . 
            . . . . 6 c 6 6 6 6 6 6 c 6 . . 
            . . . 8 6 c 9 6 6 6 6 6 c 6 8 . 
            . . . f 6 6 9 6 6 6 6 6 c 6 f . 
            . . . f 6 6 9 6 6 6 6 6 6 6 f . 
            . . . f 6 6 9 6 6 6 6 6 6 6 f . 
            . . . f 6 c 6 9 9 6 6 6 c 6 f . 
            . . . 8 6 c 8 c c c c 8 c 6 8 . 
            . . . 8 6 8 c b b b b c 8 6 8 . 
            . . . 8 6 8 b b b b b b 8 6 8 . 
            . . . 8 8 8 8 8 8 8 8 8 8 8 8 . 
            . . . f 8 d 8 8 8 8 8 8 d 8 f . 
            . . . f 8 6 d 8 8 8 8 d 6 8 f . 
            . . . f f 8 8 8 8 8 8 8 8 f f . 
            . . . . f f . . . . . . f f . . 
            `, SpriteKind.Enemy)
        tiles.placeOnTile(CopCar, value)
        CopCar.follow(PursuitCar, 50)
    }
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    PursuitCar,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 2 2 2 . . . . 
        . . . . . 2 2 4 4 2 2 2 2 . . . 
        . . . . . c 4 2 2 2 2 2 c . . . 
        . . . . 2 c 4 2 2 2 2 2 c 2 . . 
        . . . e 2 c 4 2 2 2 2 2 c 2 e . 
        . . . f 2 c 4 2 2 2 2 2 c 2 f . 
        . . . f e c 2 2 2 2 2 2 c e f . 
        . . . f 2 c 2 b b b b 2 c 2 f . 
        . . . e 2 2 b c c c c b 2 2 e . 
        . . . e e b c c c c c c b e e . 
        . . . f e 4 4 4 4 4 4 4 4 e f . 
        . . . f e d 2 2 2 2 2 2 d e f . 
        . . . . 2 d d 2 2 2 2 d d 2 f . 
        . . . . f 2 d 2 2 2 2 d 2 f . . 
        . . . . . e 2 2 2 2 2 2 e . . . 
        `],
    500,
    true
    )
})
function SetCopCar2 () {
    for (let value of tiles.getTilesByType(assets.tile`myTile20`)) {
        CopCar2 = sprites.create(img`
            . . . . . . 8 8 c c 8 8 . . . . 
            . . . . . 8 6 6 6 6 6 6 8 . . . 
            . . . . 6 c 6 6 6 6 6 6 c 6 . . 
            . . . 8 6 c 9 6 6 6 6 6 c 6 8 . 
            . . . f 6 6 9 6 6 6 6 6 c 6 f . 
            . . . f 6 6 9 6 6 6 6 6 6 6 f . 
            . . . f 6 6 9 6 6 6 6 6 6 6 f . 
            . . . f 6 c 6 9 9 6 6 6 c 6 f . 
            . . . 8 6 c 8 c c c c 8 c 6 8 . 
            . . . 8 6 8 c b b b b c 8 6 8 . 
            . . . 8 6 8 b b b b b b 8 6 8 . 
            . . . 8 8 8 8 8 8 8 8 8 8 8 8 . 
            . . . f 8 d 8 8 8 8 8 8 d 8 f . 
            . . . f 8 6 d 8 8 8 8 d 6 8 f . 
            . . . f f 8 8 8 8 8 8 8 8 f f . 
            . . . . f f . . . . . . f f . . 
            `, SpriteKind.Enemy)
        tiles.placeOnTile(CopCar2, value)
        CopCar2.setVelocity(0, 40)
        CopCar2.setBounceOnWall(true)
    }
}
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile21`, function (sprite, location) {
    sprites.destroy(sprite)
})
function SetCopCar () {
    for (let value of tiles.getTilesByType(assets.tile`SpawnCopCar`)) {
        CopCar = sprites.create(img`
            . . . . . . 8 8 c c 8 8 . . . . 
            . . . . . 8 6 6 6 6 6 6 8 . . . 
            . . . . 6 c 6 6 6 6 6 6 c 6 . . 
            . . . 8 6 c 9 6 6 6 6 6 c 6 8 . 
            . . . f 6 6 9 6 6 6 6 6 c 6 f . 
            . . . f 6 6 9 6 6 6 6 6 6 6 f . 
            . . . f 6 6 9 6 6 6 6 6 6 6 f . 
            . . . f 6 c 6 9 9 6 6 6 c 6 f . 
            . . . 8 6 c 8 c c c c 8 c 6 8 . 
            . . . 8 6 8 c b b b b c 8 6 8 . 
            . . . 8 6 8 b b b b b b 8 6 8 . 
            . . . 8 8 8 8 8 8 8 8 8 8 8 8 . 
            . . . f 8 d 8 8 8 8 8 8 d 8 f . 
            . . . f 8 6 d 8 8 8 8 d 6 8 f . 
            . . . f f 8 8 8 8 8 8 8 8 f f . 
            . . . . f f . . . . . . f f . . 
            `, SpriteKind.Enemy)
        tiles.placeOnTile(CopCar, value)
    }
}
let CopCar2: Sprite = null
let CopCar: Sprite = null
let PursuitCar: Sprite = null
tiles.setCurrentTilemap(tilemap`level2`)
let OverlapDestroyPullOutCar = sprites.create(img`
    666................................666
    666................................666
    666................................666
    666................................666
    666................................666
    666................................666
    666................................666
    666................................666
    666................................666
    666................................666
    666................................666
    666................................666
    666................................666
    666................................666
    66666666666666666666666666666666666666
    66666666666666666666666666666666666666
    66666666666666666666666666666666666666
    66666666666666666666666666666666666666
    `, SpriteKind.OverlapChangeLevel)
OverlapDestroyPullOutCar.x = 112
OverlapDestroyPullOutCar.y = 10
info.setScore(1)
SetChaseCar()
SetCopCar()
game.onUpdate(function () {
    if (tiles.tileAtLocationEquals(PursuitCar.tilemapLocation(), assets.tile`myTile10`) || (tiles.tileAtLocationEquals(PursuitCar.tilemapLocation(), sprites.skillmap.islandTile3) || (tiles.tileAtLocationEquals(PursuitCar.tilemapLocation(), assets.tile`myTile10`) || (tiles.tileAtLocationEquals(PursuitCar.tilemapLocation(), assets.tile`myTile8`) || (tiles.tileAtLocationEquals(PursuitCar.tilemapLocation(), assets.tile`myTile6`) || (tiles.tileAtLocationEquals(PursuitCar.tilemapLocation(), sprites.skillmap.islandTile5) || (tiles.tileAtLocationEquals(PursuitCar.tilemapLocation(), sprites.skillmap.islandTile1) || (tiles.tileAtLocationEquals(PursuitCar.tilemapLocation(), assets.tile`myTile7`) || (tiles.tileAtLocationEquals(PursuitCar.tilemapLocation(), assets.tile`myTile1`) || (tiles.tileAtLocationEquals(PursuitCar.tilemapLocation(), assets.tile`myTile2`) || (tiles.tileAtLocationEquals(PursuitCar.tilemapLocation(), assets.tile`myTile4`) || tiles.tileAtLocationEquals(PursuitCar.tilemapLocation(), sprites.skillmap.islandTile4)))))))))))) {
        tiles.setTileAt(PursuitCar.tilemapLocation(), assets.tile`myTile9`)
        scene.cameraShake(2, 500)
    }
})
game.onUpdateInterval(1000, function () {
    controller.moveSprite(PursuitCar, 100, 100)
})
game.onUpdateInterval(4000, function () {
    if (info.score() == 2) {
        SetCopCar2()
    }
})

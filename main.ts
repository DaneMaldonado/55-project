namespace SpriteKind {
    export const OverlapChangeLevel = SpriteKind.create()
    export const CoinsCollect = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile19`, function (sprite, location) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    tiles.setCurrentTilemap(tilemap`level4`)
    SpawnMainCar()
    SetCopCar2()
    info.changeScoreBy(1)
    game.splash("Level 2")
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    MainCar,
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
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorDarkDiamond, function (sprite, location) {
    game.gameOver(false)
})
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    CopCar.follow(MainCar, 85)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile15`, function (sprite, location) {
    controller.moveSprite(MainCar, 50, 50)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile22`, function (sprite, location) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    tiles.setCurrentTilemap(tilemap`level1`)
    SpawnMainCar()
    CollectCoins2()
    info.changeScoreBy(1)
    game.splash("Level 3")
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.CoinsCollect, function (sprite, otherSprite) {
    otherSprite.vy = -10
    music.play(music.createSoundEffect(WaveShape.Square, 400, 600, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    animation.runMovementAnimation(
    otherSprite,
    animation.animationPresets(animation.bobbing),
    1000,
    false
    )
    pause(300)
    sprites.destroy(otherSprite)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (info.score() == 3) {
        animation.runImageAnimation(
        MainCar,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 2 2 2 2 2 2 2 2 . . 
            . . . . . 2 c 2 2 2 2 2 2 4 2 . 
            . . . . 2 c c 2 2 2 2 2 2 4 c 2 
            . . d 2 4 c c 2 4 4 4 4 4 4 c c 
            . d 2 2 4 c b e e e e e e e 2 c 
            . 2 2 2 4 b e e b b b e b b e 2 
            . 2 2 2 2 2 e b b b b e b b b e 
            . 2 2 2 2 e 2 2 2 2 2 e 2 2 2 e 
            . 2 d d 2 e f e e e f e e e e e 
            . d d 2 e e e f e e f e e e e e 
            . e e e e e e e f f f e e e e e 
            . e e e e f f f e e e e f f f f 
            . . . e f f f f f e e f f f f f 
            . . . . f f f f . . . . f f f . 
            . . . . . . . . . . . . . . . . 
            `],
        500,
        true
        )
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile21`, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile16`, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(3, 14), assets.tile`myTile15`)
    tiles.setTileAt(tiles.getTileLocation(2, 13), assets.tile`myTile15`)
    tiles.setTileAt(tiles.getTileLocation(1, 12), assets.tile`myTile15`)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (info.score() == 3) {
        animation.runImageAnimation(
        MainCar,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . 2 2 2 2 2 2 2 2 . . . . 
            . . . 2 4 2 2 2 2 2 2 c 2 . . . 
            . . 2 c 4 2 2 2 2 2 2 c c 2 . . 
            . 2 c c 4 4 4 4 4 4 2 c c 4 2 d 
            . 2 c 2 e e e e e e e b c 4 2 2 
            . 2 2 e b b e b b b e e b 4 2 2 
            . 2 e b b b e b b b b e 2 2 2 2 
            . e e 2 2 2 e 2 2 2 2 2 e 2 2 2 
            . e e e e e e f e e e f e 2 d d 
            . e e e e e e f e e f e e e 2 d 
            . e e e e e e f f f e e e e e e 
            . e f f f f e e e e f f f e e e 
            . . f f f f f e e f f f f f e . 
            . . . f f f . . . . f f f f . . 
            . . . . . . . . . . . . . . . . 
            `],
        500,
        true
        )
    }
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
        CopCar.follow(MainCar, 50)
        tiles.setTileAt(value, sprites.vehicle.roadVertical)
    }
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    MainCar,
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
function CollectCoins1 () {
    for (let value of tiles.getTilesByType(assets.tile`myTile25`)) {
        Coins = sprites.create(img`
            . . b b b b . . 
            . b 5 5 5 5 b . 
            b 5 d 3 3 d 5 b 
            b 5 3 5 5 1 5 b 
            c 5 3 5 5 1 d c 
            c d d 1 1 d d c 
            . f d d d d f . 
            . . f f f f . . 
            `, SpriteKind.CoinsCollect)
        tiles.placeOnTile(Coins, value)
        Coins.scale = 1.25
        animation.runImageAnimation(
        Coins,
        [img`
            . . b b b b . . 
            . b 5 5 5 5 b . 
            b 5 d 3 3 d 5 b 
            b 5 3 5 5 1 5 b 
            c 5 3 5 5 1 d c 
            c d d 1 1 d d c 
            . f d d d d f . 
            . . f f f f . . 
            `,img`
            . . b b b . . . 
            . b 5 5 5 b . . 
            b 5 d 3 d 5 b . 
            b 5 3 5 1 5 b . 
            c 5 3 5 1 d c . 
            c 5 d 1 d d c . 
            . f d d d f . . 
            . . f f f . . . 
            `,img`
            . . . b b . . . 
            . . b 5 5 b . . 
            . b 5 d 1 5 b . 
            . b 5 3 1 5 b . 
            . c 5 3 1 d c . 
            . c 5 1 d d c . 
            . . f d d f . . 
            . . . f f . . . 
            `,img`
            . . . b b . . . 
            . . b 5 5 b . . 
            . . b 1 1 b . . 
            . . b 5 5 b . . 
            . . b d d b . . 
            . . c d d c . . 
            . . c 3 3 c . . 
            . . . f f . . . 
            `,img`
            . . . b b . . . 
            . . b 5 5 b . . 
            . b 5 1 d 5 b . 
            . b 5 1 3 5 b . 
            . c d 1 3 5 c . 
            . c d d 1 5 c . 
            . . f d d f . . 
            . . . f f . . . 
            `,img`
            . . . b b b . . 
            . . b 5 5 5 b . 
            . b 5 d 3 d 5 b 
            . b 5 1 5 3 5 b 
            . c d 1 5 3 5 c 
            . c d d 1 d 5 c 
            . . f d d d f . 
            . . . f f f . . 
            `],
        500,
        true
        )
    }
}
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
        tiles.setTileAt(value, sprites.vehicle.roadVertical)
    }
}
function GameWin () {
    for (let value of tiles.getTilesByType(assets.tile`myTile24`)) {
        PlayerWinGame = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 6 6 6 6 . . . . . . 
            . . . . 6 6 6 5 5 6 6 6 . . . . 
            . . . 7 7 7 7 6 6 6 6 6 6 . . . 
            . . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
            . . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
            . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
            . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
            . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
            . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
            . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
            . . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
            . . . 6 8 8 8 8 8 8 8 8 6 . . . 
            . . . . 6 6 8 8 8 8 6 6 . . . . 
            . . . . . . 6 6 6 6 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Food)
        tiles.placeOnTile(PlayerWinGame, value)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    game.gameOver(true)
})
function CollectCoins2 () {
    for (let value of tiles.getTilesByType(assets.tile`myTile26`)) {
        Coins = sprites.create(img`
            . . b b b b . . 
            . b 5 5 5 5 b . 
            b 5 d 3 3 d 5 b 
            b 5 3 5 5 1 5 b 
            c 5 3 5 5 1 d c 
            c d d 1 1 d d c 
            . f d d d d f . 
            . . f f f f . . 
            `, SpriteKind.CoinsCollect)
        tiles.placeOnTile(Coins, value)
        Coins.scale = 1.25
        animation.runImageAnimation(
        Coins,
        [img`
            . . b b b b . . 
            . b 5 5 5 5 b . 
            b 5 d 3 3 d 5 b 
            b 5 3 5 5 1 5 b 
            c 5 3 5 5 1 d c 
            c d d 1 1 d d c 
            . f d d d d f . 
            . . f f f f . . 
            `,img`
            . . b b b . . . 
            . b 5 5 5 b . . 
            b 5 d 3 d 5 b . 
            b 5 3 5 1 5 b . 
            c 5 3 5 1 d c . 
            c 5 d 1 d d c . 
            . f d d d f . . 
            . . f f f . . . 
            `,img`
            . . . b b . . . 
            . . b 5 5 b . . 
            . b 5 d 1 5 b . 
            . b 5 3 1 5 b . 
            . c 5 3 1 d c . 
            . c 5 1 d d c . 
            . . f d d f . . 
            . . . f f . . . 
            `,img`
            . . . b b . . . 
            . . b 5 5 b . . 
            . . b 1 1 b . . 
            . . b 5 5 b . . 
            . . b d d b . . 
            . . c d d c . . 
            . . c 3 3 c . . 
            . . . f f . . . 
            `,img`
            . . . b b . . . 
            . . b 5 5 b . . 
            . b 5 1 d 5 b . 
            . b 5 1 3 5 b . 
            . c d 1 3 5 c . 
            . c d d 1 5 c . 
            . . f d d f . . 
            . . . f f . . . 
            `,img`
            . . . b b b . . 
            . . b 5 5 5 b . 
            . b 5 d 3 d 5 b 
            . b 5 1 5 3 5 b 
            . c d 1 5 3 5 c 
            . c d d 1 d 5 c 
            . . f d d d f . 
            . . . f f f . . 
            `],
        500,
        true
        )
    }
    if (true) {
    	
    }
}
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
        tiles.setTileAt(value, sprites.vehicle.roadVertical)
    }
}
function SpawnMainCar () {
    for (let value of tiles.getTilesByType(assets.tile`myTile27`)) {
        MainCar = sprites.create(img`
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
        tiles.placeOnTile(MainCar, value)
        scene.cameraFollowSprite(MainCar)
        tiles.setTileAt(value, sprites.vehicle.roadVertical)
        controller.moveSprite(MainCar)
    }
}
let PlayerWinGame: Sprite = null
let CopCar2: Sprite = null
let Coins: Sprite = null
let CopCar: Sprite = null
let MainCar: Sprite = null
tiles.setCurrentTilemap(tilemap`level2`)
info.setScore(1)
SpawnMainCar()
SetCopCar()
CollectCoins1()
game.onUpdate(function () {
    if (tiles.tileAtLocationEquals(MainCar.tilemapLocation(), sprites.dungeon.greenInnerNorthWest) || (tiles.tileAtLocationEquals(MainCar.tilemapLocation(), sprites.dungeon.greenInnerSouthEast) || (tiles.tileAtLocationEquals(MainCar.tilemapLocation(), sprites.dungeon.greenInnerSouthWest) || (tiles.tileAtLocationEquals(MainCar.tilemapLocation(), sprites.dungeon.greenInnerNorthEast) || (tiles.tileAtLocationEquals(MainCar.tilemapLocation(), sprites.dungeon.greenOuterWest0) || (tiles.tileAtLocationEquals(MainCar.tilemapLocation(), sprites.dungeon.greenOuterEast1) || (tiles.tileAtLocationEquals(MainCar.tilemapLocation(), sprites.dungeon.greenOuterSouth0) || (tiles.tileAtLocationEquals(MainCar.tilemapLocation(), sprites.dungeon.greenOuterNorth0) || (tiles.tileAtLocationEquals(MainCar.tilemapLocation(), sprites.dungeon.greenOuterSouthEast) || (tiles.tileAtLocationEquals(MainCar.tilemapLocation(), sprites.dungeon.greenOuterNorthEast) || (tiles.tileAtLocationEquals(MainCar.tilemapLocation(), sprites.dungeon.greenOuterSouthWest) || (tiles.tileAtLocationEquals(MainCar.tilemapLocation(), sprites.dungeon.greenOuterNorth1) || (tiles.tileAtLocationEquals(MainCar.tilemapLocation(), sprites.dungeon.greenOuterNorthWest) || tiles.tileAtLocationEquals(MainCar.tilemapLocation(), sprites.dungeon.greenOuterSouth2)))))))))))))) {
        game.gameOver(false)
    }
})
game.onUpdate(function () {
    if (tiles.tileAtLocationEquals(MainCar.tilemapLocation(), assets.tile`myTile10`) || (tiles.tileAtLocationEquals(MainCar.tilemapLocation(), sprites.skillmap.islandTile3) || (tiles.tileAtLocationEquals(MainCar.tilemapLocation(), assets.tile`myTile10`) || (tiles.tileAtLocationEquals(MainCar.tilemapLocation(), assets.tile`myTile8`) || (tiles.tileAtLocationEquals(MainCar.tilemapLocation(), assets.tile`myTile6`) || (tiles.tileAtLocationEquals(MainCar.tilemapLocation(), sprites.skillmap.islandTile5) || (tiles.tileAtLocationEquals(MainCar.tilemapLocation(), sprites.skillmap.islandTile1) || (tiles.tileAtLocationEquals(MainCar.tilemapLocation(), assets.tile`myTile7`) || (tiles.tileAtLocationEquals(MainCar.tilemapLocation(), assets.tile`myTile1`) || (tiles.tileAtLocationEquals(MainCar.tilemapLocation(), assets.tile`myTile2`) || (tiles.tileAtLocationEquals(MainCar.tilemapLocation(), assets.tile`myTile4`) || tiles.tileAtLocationEquals(MainCar.tilemapLocation(), sprites.skillmap.islandTile4)))))))))))) {
        tiles.setTileAt(MainCar.tilemapLocation(), assets.tile`myTile9`)
        scene.cameraShake(2, 500)
    }
})
game.onUpdate(function () {
    if (tiles.tileAtLocationEquals(MainCar.tilemapLocation(), sprites.dungeon.darkGroundNorthWest1) || (tiles.tileAtLocationEquals(MainCar.tilemapLocation(), sprites.dungeon.darkGroundEast) || (tiles.tileAtLocationEquals(MainCar.tilemapLocation(), sprites.dungeon.darkGroundNorthEast0) || (tiles.tileAtLocationEquals(MainCar.tilemapLocation(), sprites.dungeon.darkGroundSouthEast0) || (tiles.tileAtLocationEquals(MainCar.tilemapLocation(), sprites.dungeon.darkGroundNorthWest0) || (tiles.tileAtLocationEquals(MainCar.tilemapLocation(), sprites.dungeon.darkGroundSouthWest0) || (tiles.tileAtLocationEquals(MainCar.tilemapLocation(), sprites.dungeon.darkGroundNorth) || (tiles.tileAtLocationEquals(MainCar.tilemapLocation(), sprites.dungeon.darkGroundWest) || (tiles.tileAtLocationEquals(MainCar.tilemapLocation(), sprites.dungeon.darkGroundSouth) || tiles.tileAtLocationEquals(MainCar.tilemapLocation(), sprites.dungeon.greenOuterSouth2)))))))))) {
        tiles.setTileAt(MainCar.tilemapLocation(), assets.tile`myTile9`)
        scene.cameraShake(2, 500)
    }
})
game.onUpdateInterval(1000, function () {
    controller.moveSprite(MainCar, 100, 100)
})
game.onUpdateInterval(4000, function () {
    if (info.score() == 2) {
        SetCopCar2()
    }
})

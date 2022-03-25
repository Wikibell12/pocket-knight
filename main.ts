enum ActionKind {
    Walking,
    Idle,
    Jumping,
    enemyAttack
}
namespace SpriteKind {
    export const follow = SpriteKind.create()
    export const blocker = SpriteKind.create()
    export const damager = SpriteKind.create()
    export const potion = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (CanPressButton == true) {
        CanPressButton = false
        follow.y += -16
    } else {
    	
    }
})
function wallPanic () {
    follow.setPosition(mySprite.x, mySprite.y)
}
function on_start () {
    anim = animation.createAnimation(ActionKind.enemyAttack, 250)
    anim.addAnimationFrame(img`
        . 1 1 . . f f f f f f f f f . . 
        . 1 1 . f d d d d d d d d d f . 
        . 1 1 f d 1 1 1 1 1 1 1 1 1 d f 
        b b b b d 1 1 1 1 1 1 1 1 1 d f 
        . d 1 f f f 1 f f f 1 1 1 1 d f 
        . d 1 f d 1 1 1 1 1 1 1 1 1 d f 
        . . . f d 1 1 1 1 1 1 1 1 1 d f 
        . . . . f d f d f d f d d d f . 
        . . . . . f f f f f f f f f . . 
        . . . . f e e e e e e e e f f . 
        . . . . f e e e f f e e f e f . 
        . . . . f e e f e e f f e e f . 
        . . . . f e f e e f e e e e f . 
        . . . . . f f f f f f f f f . . 
        . . . . . f 1 1 1 f 1 1 1 f . . 
        . . . . . . f f f . f f f . . . 
        `)
    anim.addAnimationFrame(img`
        . . . . . f f f f f f f f f . . 
        . . . . f d d d d d d d d d f . 
        . . . f d 1 1 1 1 1 1 1 1 1 d f 
        . . . f d 1 1 1 1 1 1 1 1 1 d f 
        . . . f f f 1 f f f 1 1 1 1 d f 
        . . . f d 1 1 1 1 1 1 1 1 1 d f 
        . . . f d 1 1 1 1 1 1 1 1 1 d f 
        . . . . f d f d f d f d d d f . 
        . . . . . 1 d f f f f f f f . . 
        . . . . f 1 d e e e e e e f f . 
        . . . . b b b b f f e e f e f . 
        . . . . f 1 1 f e e f f e e f . 
        . . . . f 1 1 e e f e e e e f . 
        . . . . . 1 1 f f f f f f f . . 
        . . . . . f 1 1 1 f 1 1 1 f . . 
        . . . . . . f f f . f f f . . . 
        `)
    tiles.setCurrentTilemap(tilemap`level2`)
    follow = sprites.create(img`
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        `, SpriteKind.follow)
    mySprite = sprites.create(img`
        . . . f f f f f f . . . . . . . 
        . . f 2 2 2 2 2 2 f . . . . . . 
        . f 2 2 f f f f f f f . . . . . 
        f 2 2 f 4 4 4 4 4 4 4 f . . . . 
        f 2 f 4 4 4 4 4 f 4 4 4 f . . . 
        . f 4 4 4 4 f 4 f 4 f 4 f . . . 
        . f 4 4 f 4 f 4 f 4 f 4 f . . . 
        . f 4 4 f 4 f 4 f 4 f 4 f . . . 
        . f 4 4 4 4 f 4 f 4 f 4 f . . . 
        . . f f f f f f f f f f f . . . 
        . . f 5 5 5 5 5 5 5 5 f a f f f 
        . . f f f f f f f f f f a 1 1 f 
        . . f 5 5 f 6 6 6 6 6 f a 1 1 f 
        . . f f f f 6 6 6 6 6 f a f f f 
        . . f 6 6 6 f f 6 6 6 f f . . . 
        . . . f f f . . f f f . . . . . 
        `, SpriteKind.Player)
    statusbarPlayerHealth = statusbars.create(20, 4, StatusBarKind.Health)
    statusbarPlayerHealth.max = 5
    statusbarPlayerHealth.attachToSprite(mySprite, -20, 0)
    sprites.setDataNumber(mySprite, "Health", 5)
    sprites.setDataSprite(mySprite, "Health", mySprite)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(6, 2))
    tiles.placeOnTile(follow, tiles.getTileLocation(6, 2))
    for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
        followBlocker = sprites.create(img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            `, SpriteKind.blocker)
        followBlockerLeft = sprites.create(img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            `, SpriteKind.blocker)
        tiles.placeOnTile(followBlocker, value)
        followBlocker.z = -999
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile0`)) {
        followBlocker = sprites.create(img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            `, SpriteKind.blocker)
        tiles.placeOnTile(followBlocker, value)
        followBlocker.z = -999
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile1`)) {
        followBlocker = sprites.create(img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            `, SpriteKind.blocker)
        tiles.placeOnTile(followBlocker, value)
        followBlocker.z = -999
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile2`)) {
        followBlocker = sprites.create(img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            `, SpriteKind.blocker)
        tiles.placeOnTile(followBlocker, value)
        followBlocker.z = -999
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile13`)) {
        skeleton = sprites.create(img`
            . . . . . f f f f f f f f f . . 
            . . . . f d d d d d d d d d f . 
            . . . f d 1 1 1 1 1 1 1 1 1 d f 
            . . . f d 1 1 1 1 1 1 1 1 1 d f 
            . . . f f f 1 f f f 1 1 1 1 d f 
            . . . f d 1 1 1 1 1 1 1 1 1 d f 
            . . . f d 1 1 1 1 1 1 1 1 1 d f 
            . . . . f d f d f d f d d d f . 
            . . . . . f f f f f f f f f . . 
            . . . b f e e e e e e e e f f . 
            1 1 1 b f e e e f f e e f e f . 
            1 1 1 b f e e f e e f f e e f . 
            . . . b f e f e e f e e e e f . 
            . . . . . f f f f f f f f f . . 
            . . . . . f 1 1 1 f 1 1 1 f . . 
            . . . . . . f f f . f f f . . . 
            `, SpriteKind.Enemy)
        sprites.setDataSprite(skeleton, "Health", skeleton)
        sprites.setDataNumber(skeleton, "Health", 3)
        statusbar = statusbars.create(16, 4, StatusBarKind.EnemyHealth)
        statusbar.setColor(7, 4, 10)
        statusbar.value = 3
        statusbar.max = 3
        statusbar.attachToSprite(skeleton, -20, 2)
        statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
        animation.runImageAnimation(
        skeleton,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f f f f . . 
            . . . . f d d d d d d d d d f . 
            . . . f d 1 1 1 1 1 1 1 1 1 d f 
            . . . f d 1 1 1 1 1 1 1 1 1 d f 
            . . . f f f 1 f f f 1 1 1 1 d f 
            . . . f d 1 1 1 1 1 1 1 1 1 d f 
            . . . f d 1 1 1 1 1 1 1 1 1 d f 
            . . . . f d f d f d f d d d f . 
            . . . b f f f f f f f f f f f . 
            1 1 1 b f e e e f f e e f e f . 
            1 1 1 b f e e f e e f f e e f . 
            . . . b f e f e e f e e e e f . 
            . . . . . f f f f f f f f f . . 
            . . . . . f 1 1 1 f 1 1 1 f . . 
            . . . . . . f f f . f f f . . . 
            `,img`
            . . . . . f f f f f f f f f . . 
            . . . . f d d d d d d d d d f . 
            . . . f d 1 1 1 1 1 1 1 1 1 d f 
            . . . f d 1 1 1 1 1 1 1 1 1 d f 
            . . . f f f 1 f f f 1 1 1 1 d f 
            . . . f d 1 1 1 1 1 1 1 1 1 d f 
            . . . f d 1 1 1 1 1 1 1 1 1 d f 
            . . . . f d f d f d f d d d f . 
            . . . . . f f f f f f f f f . . 
            . . . . f e e e e e e e e f f . 
            . . . b f e e e f f e e f e f . 
            1 1 1 b f e e f e e f f e e f . 
            1 1 1 b f e f e e f e e e e f . 
            . . . b f f f f f f f f f f f . 
            . . . . . f 1 1 1 f 1 1 1 f . . 
            . . . . . . f f f . f f f . . . 
            `],
        500,
        true
        )
        tiles.placeOnTile(skeleton, value)
        tiles.setTileAt(value, assets.tile`myTile6`)
        tiles.setWallAt(value, true)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile14`)) {
        potion = sprites.create(img`
            . . . . . . f f f f f . . . . . 
            . . . . . . f 4 4 4 f . . . . . 
            . . . . . f f f f f f f . . . . 
            . . . . . f . . . . . f . . . . 
            . . . . . f f f f f f f . . . . 
            . . . . . f 2 2 2 2 1 f . . . . 
            . . . . . f 2 2 2 2 1 f . . . . 
            . . . . . f 2 2 2 2 1 f . . . . 
            . . . . . f 2 2 2 2 1 f . . . . 
            . . . . . f 2 2 2 2 1 f . . . . 
            . . . . . f 2 2 2 2 1 f . . . . 
            . . . . . f 2 2 2 2 1 f . . . . 
            . . . . . f 2 2 2 2 1 f . . . . 
            . . . . . f 2 2 2 2 1 f . . . . 
            . . . . . f 2 2 2 2 1 f . . . . 
            . . . . . f f f f f f f . . . . 
            `, SpriteKind.potion)
        tiles.placeOnTile(potion, value)
        tiles.setTileAt(value, assets.tile`myTile6`)
        tiles.setWallAt(value, true)
    }
    mySprite.follow(follow)
    follow.z = -999
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.blocker, function (sprite, otherSprite) {
    if (sprites.readDataNumber(sprite, "Health") < 1) {
        otherSprite.destroy()
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    on_A_button_pressed()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (CanPressButton == true) {
        CanPressButton = false
        follow.x += -16
        if (Facing_Left == true) {
        	
        } else {
            Facing_Left = true
            animation.runImageAnimation(
            mySprite,
            [img`
                . . . . . . . f f f f f f . . . 
                . . . . . . f 2 2 2 2 2 2 f . . 
                . . . . . f f f f f f f 2 2 f . 
                . . . . f 4 4 4 4 4 4 4 f 2 2 f 
                . . . f 4 4 4 f 4 4 4 4 4 f 2 f 
                . . . f 4 f 4 f 4 f 4 4 4 4 f . 
                . . . f 4 f 4 f 4 f 4 f 4 4 f . 
                . . . f 4 f 4 f 4 f 4 f 4 4 f . 
                . . . f 4 f 4 f 4 f 4 4 4 4 f . 
                . . . f f f f f f f f f f f . . 
                f f f a f 5 5 5 5 5 5 5 5 f . . 
                f 1 1 a f f f f f f f f f f . . 
                f 1 1 a f 6 6 6 6 6 6 f 5 f . . 
                f f f a f 6 6 6 6 6 6 f f f . . 
                . . . f f 6 6 6 f f 6 6 6 f . . 
                . . . . . f f f . . f f f . . . 
                `,img`
                . . . . . . . f f f f f f . . . 
                . . . . . . f 2 2 2 2 2 2 f . . 
                . . . . . f f f f f f f 2 2 f . 
                . . . . f 4 4 4 4 4 4 4 f 2 2 f 
                . . . f 4 4 4 f 4 4 4 4 4 f 2 f 
                . . . f 4 f 4 f 4 f 4 4 4 4 f . 
                . . . f 4 f 4 f 4 f 4 f 4 4 f . 
                . . . f 4 f 4 f 4 f 4 f 4 4 f . 
                . . . f 4 f 4 f 4 f 4 4 4 4 f . 
                . . . f f f f f f f f f f f . . 
                . . . f f 5 5 5 5 5 5 5 5 f . . 
                f f f a f f f f f f f f f f . . 
                f 1 1 a f 6 6 6 6 6 f 5 5 f . . 
                f 1 1 a f 6 6 6 6 6 f f f f . . 
                f f f a f 6 6 6 f f 6 6 6 f . . 
                . . . f . f f f . . f f f . . . 
                `],
            500,
            true
            )
        }
    } else {
    	
    }
})
sprites.onOverlap(SpriteKind.follow, SpriteKind.blocker, function (sprite, otherSprite) {
    sprite.setPosition(mySprite.x, mySprite.y)
})
sprites.onOverlap(SpriteKind.follow, SpriteKind.potion, function (sprite, otherSprite) {
    sprite.setPosition(mySprite.x, mySprite.y)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (CanPressButton == true) {
        CanPressButton = false
        follow.x += 16
        if (Facing_Left == false) {
        	
        } else {
            Facing_Left = false
            animation.runImageAnimation(
            mySprite,
            [img`
                . . . f f f f f f . . . . . . . 
                . . f 2 2 2 2 2 2 f . . . . . . 
                . f 2 2 f f f f f f f . . . . . 
                f 2 2 f 4 4 4 4 4 4 4 f . . . . 
                f 2 f 4 4 4 4 4 f 4 4 4 f . . . 
                . f 4 4 4 4 f 4 f 4 f 4 f . . . 
                . f 4 4 f 4 f 4 f 4 f 4 f . . . 
                . f 4 4 f 4 f 4 f 4 f 4 f . . . 
                . f 4 4 4 4 f 4 f 4 f 4 f . . . 
                . . f f f f f f f f f f f . . . 
                . . f 5 5 5 5 5 5 5 5 f a f f f 
                . . f f f f f f f f f f a 1 1 f 
                . . f 5 f 6 6 6 6 6 6 f a 1 1 f 
                . . f f f 6 6 6 6 6 6 f a f f f 
                . . f 6 6 6 f f 6 6 6 f f . . . 
                . . . f f f . . f f f . . . . . 
                `,img`
                . . . f f f f f f . . . . . . . 
                . . f 2 2 2 2 2 2 f . . . . . . 
                . f 2 2 f f f f f f f . . . . . 
                f 2 2 f 4 4 4 4 4 4 4 f . . . . 
                f 2 f 4 4 4 4 4 f 4 4 4 f . . . 
                . f 4 4 4 4 f 4 f 4 f 4 f . . . 
                . f 4 4 f 4 f 4 f 4 f 4 f . . . 
                . f 4 4 f 4 f 4 f 4 f 4 f . . . 
                . f 4 4 4 4 f 4 f 4 f 4 f . . . 
                . . f f f f f f f f f f f . . . 
                . . f 5 5 5 5 5 5 5 5 f f . . . 
                . . f f f f f f f f f f a f f f 
                . . f 5 5 f 6 6 6 6 6 f a 1 1 f 
                . . f f f f 6 6 6 6 6 f a 1 1 f 
                . . f 6 6 6 f f 6 6 6 f a f f f 
                . . . f f f . . f f f . f . . . 
                `],
            500,
            true
            )
        }
    } else {
    	
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (CanPressButton == true) {
        CanPressButton = false
        follow.y += 16
    } else {
    	
    }
})
sprites.onOverlap(SpriteKind.damager, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    sprites.changeDataNumberBy(otherSprite, "Health", -1)
    sprites.changeDataNumberBy(mySprite, "Health", -1)
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -1
    statusbars.getStatusBarAttachedTo(StatusBarKind.Health, mySprite).value += -1
    if (sprites.readDataNumber(otherSprite, "Health") < 1) {
        tiles.setWallAt(otherSprite.tilemapLocation(), false)
        otherSprite.destroy(effects.disintegrate, 500)
    }
    if (Facing_Left == false) {
        animation.runImageAnimation(
        otherSprite,
        [img`
            . . . . 1 1 f f f f f f f f . . 
            . . . . 1 1 d d d d d d d d f . 
            . . . f 1 1 1 1 1 1 1 1 1 1 d f 
            . . . b b b b 1 1 1 1 1 1 1 d f 
            . . . f f f 1 f f f 1 1 1 1 d f 
            . . . f d 1 1 1 1 1 1 1 1 1 d f 
            . . . f d 1 1 1 1 1 1 1 1 1 d f 
            . . . . f d f d f d f d d d f . 
            . . . . . f f f f f f f f f . . 
            . . . . f e e e e e e e e f f . 
            . . . . f e e e f f e e f e f . 
            . . . . f e e f e e f f e e f . 
            . . . . f e f e e f e e e e f . 
            . . . . . f f f f f f f f f . . 
            . . . . . f 1 1 1 f 1 1 1 f . . 
            . . . . . . f f f . f f f . . . 
            `,img`
            2 2 2 2 2 f f f f f f f f f . . 
            2 2 2 2 f d d d d d d d d d f . 
            . . . f d 1 1 1 1 1 1 1 1 1 d f 
            . . . f d 1 1 1 1 1 1 1 1 1 d f 
            . . . f f f 1 f f f 1 1 1 1 d f 
            . . . f d 1 1 1 1 1 1 1 1 1 d f 
            . . . f d 1 1 1 1 1 1 1 1 1 d f 
            . . . . f d f d f d f d d d f . 
            . . . . . f f f f f f f f f . . 
            . . . . b e e e e e e e e f f . 
            . . . . b 1 1 1 f f e e f e f . 
            . . . . b 1 1 1 e e f f e e f . 
            . . . . b e f e e f e e e e f . 
            . . . . . f f f f f f f f f . . 
            2 2 2 2 . f 1 1 1 f 1 1 1 f . . 
            2 2 2 2 2 . f f f . f f f . . . 
            `],
        500,
        false
        )
        pause(250)
        enemyattackanim = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Player)
        enemyattackanim.setPosition(mySprite.x, mySprite.y)
        pause(250)
        enemyattackanim.destroy()
        animation.runImageAnimation(
        otherSprite,
        [img`
            . . . . . f f f f f f f f f . . 
            . . . . f d d d d d d d d d f . 
            . . . f d 1 1 1 1 1 1 1 1 1 d f 
            . . . f d 1 1 1 1 1 1 1 1 1 d f 
            . . . f f f 1 f f f 1 1 1 1 d f 
            . . . f d 1 1 1 1 1 1 1 1 1 d f 
            . . . f d 1 1 1 1 1 1 1 1 1 d f 
            . . . . f d f d f d f d d d f . 
            . . . . . f f f f f f f f f . . 
            . . . b f e e e e e e e e f f . 
            1 1 1 b f e e e f f e e f e f . 
            1 1 1 b f e e f e e f f e e f . 
            . . . b f e f e e f e e e e f . 
            . . . . . f f f f f f f f f . . 
            . . . . . f 1 1 1 f 1 1 1 f . . 
            . . . . . . f f f . f f f . . . 
            `],
        500,
        false
        )
    } else if (Facing_Left == true) {
        animation.runImageAnimation(
        otherSprite,
        [img`
            . . f f f f f f f f 1 1 . . . . 
            . f d d d d d d d d 1 1 . . . . 
            f d 1 1 1 1 1 1 1 1 1 1 f . . . 
            f d 1 1 1 1 1 1 1 b b b b . . . 
            f d 1 1 1 1 f f f 1 f f f . . . 
            f d 1 1 1 1 1 1 1 1 1 d f . . . 
            f d 1 1 1 1 1 1 1 1 1 d f . . . 
            . f d d d f d f d f d f . . . . 
            . . f f f f f f f f f . . . . . 
            . f f e e e e e e e e f . . . . 
            . f e f e e f f e e e f . . . . 
            . f e e f f e e f e e f . . . . 
            . f e e e e f e e f e f . . . . 
            . . f f f f f f f f f . . . . . 
            . . f 1 1 1 f 1 1 1 f . . . . . 
            . . . f f f . f f f . . . . . . 
            `,img`
            . . f f f f f f f f f 2 2 2 2 2 
            . f d d d d d d d d d f 2 2 2 2 
            f d 1 1 1 1 1 1 1 1 1 d f . . . 
            f d 1 1 1 1 1 1 1 1 1 d f . . . 
            f d 1 1 1 1 f f f 1 f f f . . . 
            f d 1 1 1 1 1 1 1 1 1 d f . . . 
            f d 1 1 1 1 1 1 1 1 1 d f . . . 
            . f d d d f d f d f d f . . . . 
            . . f f f f f f f f f . . . . . 
            . f f e e e e e e e e b . . . . 
            . f e f e e f f 1 1 1 b . . . . 
            . f e e f f e e 1 1 1 b . . . . 
            . f e e e e f e e f e b . . . . 
            . . f f f f f f f f f . . . . . 
            . . f 1 1 1 f 1 1 1 f . 2 2 2 2 
            . . . f f f . f f f . 2 2 2 2 2 
            `],
        500,
        false
        )
        pause(250)
        enemyattackanim = sprites.create(img`
            2 2 2 2 2 2 2 . . . . . . . . . 
            2 2 2 2 2 2 2 2 2 2 . . . . . . 
            . . . . . . . 2 2 2 2 . . . . . 
            . . . . . . . . . 2 2 . . . . . 
            . . . . . . . . . . 2 2 . . . . 
            . . . . . . . . . . 2 2 . . . . 
            . . . . . . . . . . 2 2 . . . . 
            . . . . . . . . . . 2 2 . . . . 
            . . . . . . . . . . 2 2 . . . . 
            . . . . . . . . . . 2 2 . . . . 
            . . . . . . . . . . 2 2 . . . . 
            . . . . . . . . . . 2 2 . . . . 
            . . . . . . . . . 2 2 . . . . . 
            . . . . . . . 2 2 2 2 . . . . . 
            2 2 2 2 2 2 2 2 2 2 . . . . . . 
            2 2 2 2 2 2 2 . . . . . . . . . 
            `, SpriteKind.Player)
        enemyattackanim.setPosition(mySprite.x, mySprite.y)
        pause(250)
        enemyattackanim.destroy()
        animation.runImageAnimation(
        otherSprite,
        [img`
            . . f f f f f f f f f . . . . . 
            . f d d d d d d d d d f . . . . 
            f d 1 1 1 1 1 1 1 1 1 d f . . . 
            f d 1 1 1 1 1 1 1 1 1 d f . . . 
            f d 1 1 1 1 f f f 1 f f f . . . 
            f d 1 1 1 1 1 1 1 1 1 d f . . . 
            f d 1 1 1 1 1 1 1 1 1 d f . . . 
            . f d d d f d f d f d f . . . . 
            . . f f f f f f f f f . . . . . 
            . f f e e e e e e e e f b . . . 
            . f e f e e f f e e e f b 1 1 1 
            . f e e f f e e f e e f b 1 1 1 
            . f e e e e f e e f e f b . . . 
            . . f f f f f f f f f . . . . . 
            . . f 1 1 1 f 1 1 1 f . . . . . 
            . . . f f f . f f f . . . . . . 
            `],
        500,
        false
        )
    }
})
sprites.onOverlap(SpriteKind.follow, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.setPosition(mySprite.x, mySprite.y)
})
sprites.onOverlap(SpriteKind.damager, SpriteKind.potion, function (sprite, otherSprite) {
    tiles.setWallAt(otherSprite.tilemapLocation(), false)
    otherSprite.destroy(effects.warmRadial, 500)
})
function on_A_button_pressed () {
    if (attacking == false && CanPressButton == true) {
        if (Facing_Left == false) {
            attacking = true
            CanPressButton = false
            animation.runImageAnimation(
            mySprite,
            [img`
                . . . f f f f f f f f f f . . . 
                . . f 2 2 2 2 2 2 f 1 1 f . . . 
                . f 2 2 f f f f f f 1 1 f . . . 
                f 2 2 f 4 4 4 4 4 a a a a . . . 
                f 2 f 4 4 4 4 4 f 4 4 4 f . . . 
                . f 4 4 4 4 f 4 f 4 f 4 f . . . 
                . f 4 4 f 4 f 4 f 4 f 4 f . . . 
                . f 4 4 f 4 f 4 f 4 f 4 f . . . 
                . f 4 4 4 4 f 4 f 4 f 4 f . . . 
                . . f f f f f f f f f f f . . . 
                . . f 5 5 5 5 5 5 5 5 f . . . . 
                . . f f f f f f f f f f . . . . 
                . . f 5 5 f 6 6 6 6 6 f . . . . 
                . . f f f f 6 6 6 6 6 f . . . . 
                . . f 6 6 6 f f 6 6 6 f . . . . 
                . . . f f f . . f f f . . . . . 
                `,img`
                . . . f f f f f f . . 1 1 1 1 1 
                . . f 2 2 2 2 2 2 f . . 1 1 1 1 
                . f 2 2 f f f f f f f . . . . . 
                f 2 2 f 4 4 4 4 4 4 4 f . . . . 
                f 2 f 4 4 4 4 4 f 4 4 4 f . . . 
                . f 4 4 4 4 f 4 f 4 f 4 f . . . 
                . f 4 4 f 4 f 4 f 4 f 4 f . . . 
                . f 4 4 f 4 f 4 f 4 f 4 f . . . 
                . f 4 4 4 4 f 4 f 4 f 4 f . . . 
                . . f f f f f f f f f f . . . . 
                . . f 5 5 5 5 5 5 5 5 f . . . . 
                . . f f f f f f f f a f . . . . 
                . . f 5 5 f 6 f 1 1 a f . . . . 
                . . f f f f 6 f 1 1 a f . . . . 
                . . f 6 6 6 f f f f a f 1 1 1 1 
                . . . f f f . . f f f 1 1 1 1 1 
                `],
            250,
            false
            )
            pause(250)
            damager = sprites.create(img`
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                `, SpriteKind.damager)
            damager.z = -999
            attack_anim = sprites.create(img`
                1 1 . . . . . . . . . . . . . . 
                1 1 1 1 1 . . . . . . . . . . . 
                . . 1 1 1 1 . . . . . . . . . . 
                . . . . 1 1 . . . . . . . . . . 
                . . . . . 1 1 . . . . . . . . . 
                . . . . . 1 1 . . . . . . . . . 
                . . . . . 1 1 . . . . . . . . . 
                . . . . . 1 1 . . . . . . . . . 
                . . . . . 1 1 . . . . . . . . . 
                . . . . . 1 1 . . . . . . . . . 
                . . . . . 1 1 . . . . . . . . . 
                . . . . . 1 1 . . . . . . . . . 
                . . . . 1 1 . . . . . . . . . . 
                . . 1 1 1 1 . . . . . . . . . . 
                1 1 1 1 1 . . . . . . . . . . . 
                1 1 . . . . . . . . . . . . . . 
                `, SpriteKind.Player)
            damager.setPosition(mySprite.x, mySprite.y)
            attack_anim.setPosition(mySprite.x, mySprite.y)
            damager.x += 16
            attack_anim.x += 16
            pause(100)
            damager.destroy()
            pause(750)
            attack_anim.destroy()
            attacking = false
            CanPressButton = true
            animation.runImageAnimation(
            mySprite,
            [img`
                . . . f f f f f f . . . . . . . 
                . . f 2 2 2 2 2 2 f . . . . . . 
                . f 2 2 f f f f f f f . . . . . 
                f 2 2 f 4 4 4 4 4 4 4 f . . . . 
                f 2 f 4 4 4 4 4 f 4 4 4 f . . . 
                . f 4 4 4 4 f 4 f 4 f 4 f . . . 
                . f 4 4 f 4 f 4 f 4 f 4 f . . . 
                . f 4 4 f 4 f 4 f 4 f 4 f . . . 
                . f 4 4 4 4 f 4 f 4 f 4 f . . . 
                . . f f f f f f f f f f f . . . 
                . . f 5 5 5 5 5 5 5 5 f a f f f 
                . . f f f f f f f f f f a 1 1 f 
                . . f 5 f 6 6 6 6 6 6 f a 1 1 f 
                . . f f f 6 6 6 6 6 6 f a f f f 
                . . f 6 6 6 f f 6 6 6 f f . . . 
                . . . f f f . . f f f . . . . . 
                `,img`
                . . . f f f f f f . . . . . . . 
                . . f 2 2 2 2 2 2 f . . . . . . 
                . f 2 2 f f f f f f f . . . . . 
                f 2 2 f 4 4 4 4 4 4 4 f . . . . 
                f 2 f 4 4 4 4 4 f 4 4 4 f . . . 
                . f 4 4 4 4 f 4 f 4 f 4 f . . . 
                . f 4 4 f 4 f 4 f 4 f 4 f . . . 
                . f 4 4 f 4 f 4 f 4 f 4 f . . . 
                . f 4 4 4 4 f 4 f 4 f 4 f . . . 
                . . f f f f f f f f f f f . . . 
                . . f 5 5 5 5 5 5 5 5 f f . . . 
                . . f f f f f f f f f f a f f f 
                . . f 5 5 f 6 6 6 6 6 f a 1 1 f 
                . . f f f f 6 6 6 6 6 f a 1 1 f 
                . . f 6 6 6 f f 6 6 6 f a f f f 
                . . . f f f . . f f f . f . . . 
                `],
            500,
            true
            )
        } else if (Facing_Left == true) {
            attacking = true
            CanPressButton = false
            animation.runImageAnimation(
            mySprite,
            [img`
                . . . f f f f f f f f f f . . . 
                . . . f 1 1 f 2 2 2 2 2 2 f . . 
                . . . f 1 1 f f f f f f 2 2 f . 
                . . . a a a a 4 4 4 4 4 f 2 2 f 
                . . . f 4 4 4 f 4 4 4 4 4 f 2 f 
                . . . f 4 f 4 f 4 f 4 4 4 4 f . 
                . . . f 4 f 4 f 4 f 4 f 4 4 f . 
                . . . f 4 f 4 f 4 f 4 f 4 4 f . 
                . . . f 4 f 4 f 4 f 4 4 4 4 f . 
                . . . f f f f f f f f f f f . . 
                . . . . f 5 5 5 5 5 5 5 5 f . . 
                . . . . f f f f f f f f f f . . 
                . . . . f 6 6 6 6 6 f 5 5 f . . 
                . . . . f 6 6 6 6 6 f f f f . . 
                . . . . f 6 6 6 f f 6 6 6 f . . 
                . . . . . f f f . . f f f . . . 
                `,img`
                1 1 1 1 1 . . f f f f f f . . . 
                1 1 1 1 . . f 2 2 2 2 2 2 f . . 
                . . . . . f f f f f f f 2 2 f . 
                . . . . f 4 4 4 4 4 4 4 f 2 2 f 
                . . . f 4 4 4 f 4 4 4 4 4 f 2 f 
                . . . f 4 f 4 f 4 f 4 4 4 4 f . 
                . . . f 4 f 4 f 4 f 4 f 4 4 f . 
                . . . f 4 f 4 f 4 f 4 f 4 4 f . 
                . . . f 4 f 4 f 4 f 4 4 4 4 f . 
                . . . . f f f f f f f f f f . . 
                . . . . f 5 5 5 5 5 5 5 5 f . . 
                . . . . f a f f f f f f f f . . 
                . . . . f a 1 1 f 6 f 5 5 f . . 
                . . . . f a 1 1 f 6 f f f f . . 
                1 1 1 1 f a f f f f 6 6 6 f . . 
                1 1 1 1 1 f f f . . f f f . . . 
                `],
            250,
            false
            )
            pause(250)
            damager = sprites.create(img`
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                `, SpriteKind.damager)
            damager.z = -999
            attack_anim = sprites.create(img`
                . . . . . . . . . . . . . . 1 1 
                . . . . . . . . . . . 1 1 1 1 1 
                . . . . . . . . . . 1 1 1 1 . . 
                . . . . . . . . . . 1 1 . . . . 
                . . . . . . . . . 1 1 . . . . . 
                . . . . . . . . . 1 1 . . . . . 
                . . . . . . . . . 1 1 . . . . . 
                . . . . . . . . . 1 1 . . . . . 
                . . . . . . . . . 1 1 . . . . . 
                . . . . . . . . . 1 1 . . . . . 
                . . . . . . . . . 1 1 . . . . . 
                . . . . . . . . . 1 1 . . . . . 
                . . . . . . . . . . 1 1 . . . . 
                . . . . . . . . . . 1 1 1 1 . . 
                . . . . . . . . . . . 1 1 1 1 1 
                . . . . . . . . . . . . . . 1 1 
                `, SpriteKind.Player)
            damager.setPosition(mySprite.x, mySprite.y)
            attack_anim.setPosition(mySprite.x, mySprite.y)
            damager.x += -16
            attack_anim.x += -16
            pause(100)
            damager.destroy()
            pause(750)
            attack_anim.destroy()
            attacking = false
            CanPressButton = true
            animation.runImageAnimation(
            mySprite,
            [img`
                . . . . . . . f f f f f f . . . 
                . . . . . . f 2 2 2 2 2 2 f . . 
                . . . . . f f f f f f f 2 2 f . 
                . . . . f 4 4 4 4 4 4 4 f 2 2 f 
                . . . f 4 4 4 f 4 4 4 4 4 f 2 f 
                . . . f 4 f 4 f 4 f 4 4 4 4 f . 
                . . . f 4 f 4 f 4 f 4 f 4 4 f . 
                . . . f 4 f 4 f 4 f 4 f 4 4 f . 
                . . . f 4 f 4 f 4 f 4 4 4 4 f . 
                . . . f f f f f f f f f f f . . 
                f f f a f 5 5 5 5 5 5 5 5 f . . 
                f 1 1 a f f f f f f f f f f . . 
                f 1 1 a f 6 6 6 6 6 6 f 5 f . . 
                f f f a f 6 6 6 6 6 6 f f f . . 
                . . . f f 6 6 6 f f 6 6 6 f . . 
                . . . . . f f f . . f f f . . . 
                `,img`
                . . . . . . . f f f f f f . . . 
                . . . . . . f 2 2 2 2 2 2 f . . 
                . . . . . f f f f f f f 2 2 f . 
                . . . . f 4 4 4 4 4 4 4 f 2 2 f 
                . . . f 4 4 4 f 4 4 4 4 4 f 2 f 
                . . . f 4 f 4 f 4 f 4 4 4 4 f . 
                . . . f 4 f 4 f 4 f 4 f 4 4 f . 
                . . . f 4 f 4 f 4 f 4 f 4 4 f . 
                . . . f 4 f 4 f 4 f 4 4 4 4 f . 
                . . . f f f f f f f f f f f . . 
                . . . f f 5 5 5 5 5 5 5 5 f . . 
                f f f a f f f f f f f f f f . . 
                f 1 1 a f 6 6 6 6 6 f 5 5 f . . 
                f 1 1 a f 6 6 6 6 6 f f f f . . 
                f f f a f 6 6 6 f f 6 6 6 f . . 
                . . . f . f f f . . f f f . . . 
                `],
            500,
            true
            )
        }
    }
}
let attack_anim: Sprite = null
let damager: Sprite = null
let attacking = false
let enemyattackanim: Sprite = null
let Facing_Left = false
let potion: Sprite = null
let statusbar: StatusBarSprite = null
let skeleton: Sprite = null
let followBlockerLeft: Sprite = null
let followBlocker: Sprite = null
let statusbarPlayerHealth: StatusBarSprite = null
let anim: animation.Animation = null
let mySprite: Sprite = null
let follow: Sprite = null
let CanPressButton = false
on_start()
forever(function () {
    if (Facing_Left == true) {
    	
    } else if (Facing_Left == false) {
    	
    }
})
forever(function () {
    if (mySprite.x == follow.x && mySprite.y == follow.y && attacking == false) {
        CanPressButton = true
    }
})

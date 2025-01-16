let mySprite = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ...........7....................
    ...........77...................
    ............777777..............
    ............7...7...............
    ............7...7...............
    ............7...7...............
    ...........7....7...............
    ...........7....7...............
    ...........7....7...............
    ...........7....7...............
    ...........7...7................
    ..........7....7................
    ..........7....7................
    ..........7....77...............
    ..........7.....7...............
    ..........7.....7...............
    ..........77777.7...............
    ...............77...............
    ................................
    ................................
    ................................
    `, SpriteKind.Player)
extraEffects.createSpreadEffectOnAnchor(mySprite, extraEffects.createSingleColorSpreadEffectData(2, ExtraEffectPresetShape.Spark), 200)
extraEffects.createSpreadEffectOnAnchor(mySprite, extraEffects.createSingleColorSpreadEffectData(2, ExtraEffectPresetShape.Spark), 200)
extraEffects.createSpreadEffectOnAnchor(mySprite, extraEffects.createSingleColorSpreadEffectData(2, ExtraEffectPresetShape.Spark), 200)
extraEffects.createSpreadEffectOnAnchor(mySprite, extraEffects.createSingleColorSpreadEffectData(2, ExtraEffectPresetShape.Spark), 200)

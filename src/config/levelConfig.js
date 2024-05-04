export const levelConfig = {
  // Define the width and height of the level
  tileWidth: 16,
  tileHeight: 16,

  // Define the tiles
  tiles: {
    "@": () => [
      sprite("ninja_frog"),
      area({ shape: new Rect(vec2(10, 0), 14, 32) }),
      body(),
      offscreen({ hide: true }),
      "player",
    ],
    "*": () => [
      sprite("exit"),
      area(),
      scale(0.5),
      tile({ isObstacle: false }),
      "exit",
    ],
    m: () => [
      sprite("moss_tl"),
      area(),
      body({ isStatic: true }),
      tile({ isObstacle: true }),
    ],
    n: () => [
      sprite("moss_ml"),
      area(),
      body({ isStatic: true }),
      tile({ isObstacle: true }),
    ],
    o: () => [
      sprite("moss_bl"),
      area(),
      body({ isStatic: true }),
      tile({ isObstacle: true }),
    ],
    p: () => [
      sprite("moss_tm"),
      area(),
      body({ isStatic: true }),
      tile({ isObstacle: true }),
    ],
    q: () => [
      sprite("moss_tr"),
      area(),
      body({ isStatic: true }),
      tile({ isObstacle: true }),
    ],
    r: () => [
      sprite("moss_mr"),
      area(),
      body({ isStatic: true }),
      tile({ isObstacle: true }),
    ],
    s: () => [
      sprite("moss_bm"),
      area(),
      body({ isStatic: true }),
      tile({ isObstacle: true }),
    ],
    t: () => [
      sprite("moss_br"),
      area(),
      body({ isStatic: true }),
      tile({ isObstacle: true }),
    ],
    "<": () => [
      sprite("grass_left"),
      area(),
      body({ isStatic: true }),
      tile({ isObstacle: true }),
    ],
    "=": () => [
      sprite("grass_middle"),
      area(),
      body({ isStatic: true }),
      tile({ isObstacle: true }),
    ],
    ">": () => [
      sprite("grass_right"),
      area(),
      body({ isStatic: true }),
      tile({ isObstacle: true }),
    ],
    "[": () => [
      sprite("ground_left"),
      area(),
      body({ isStatic: true }),
      tile({ isObstacle: true }),
    ],
    "-": () => [
      sprite("ground_middle"),
      area(),
      body({ isStatic: true }),
      tile({ isObstacle: true }),
    ],
    "]": () => [
      sprite("ground_right"),
      area(),
      body({ isStatic: true }),
      tile({ isObstacle: true }),
    ],

    "(": () => [
      sprite("grass_bottom_left"),
      area(),
      body({ isStatic: true }),
      tile({ isObstacle: true }),
    ],
    ":": () => [
      sprite("grass_bottom_middle"),
      area(),
      body({ isStatic: true }),
      tile({ isObstacle: true }),
    ],
    ")": () => [
      sprite("grass_bottom_right"),
      area(),
      body({ isStatic: true }),
      tile({ isObstacle: true }),
    ],
    x: () => [
      sprite("steel"),
      area(),
      body({ isStatic: true }),
      tile({ isObstacle: true }),
      fixed(),
    ],
    y: () => [
      sprite("stone"),
      area(),
      body({ isStatic: true }),
      tile({ isObstacle: false }),
      fixed(),
    ],
    z: () => [
      sprite("wood"),
      area(),
      body({ isStatic: true }),
      tile({ isObstacle: false }),
      fixed(),
    ],
    "#": () => [
      sprite("spikes"),
      area({ shape: new Rect(vec2(0, 8), 16, 8) }),
      body({ isStatic: true }),
      tile({ isObstacle: false }),
      "spikes",
    ],
    f: () => [
      sprite("fruits"),
      area({ shape: new Rect(vec2(8, 8), 16, 16) }),
      "fruits",
    ],
  },
};

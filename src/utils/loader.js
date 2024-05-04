export const load = {
  player: () => {
    loadSprite("ninja_frog", "assets/main_characters/ninja_frog/tilemap.png", {
      sliceX: 12,
      sliceY: 7,
      anims: {
        idle: {
          from: 36,
          to: 46,
          speed: 20,
          loop: true,
        },
        run: {
          from: 60,
          to: 71,
          speed: 20,
          loop: true,
        },
        jump: 48,
      },
    });
  },
  terrain: () => {
    loadSpriteAtlas("assets/terrain/terrain_(16x16).png", {
      moss_tl: {
        x: 0,
        y: 128,
        width: 16,
        height: 16,
      },
      moss_ml: {
        x: 0,
        y: 144,
        width: 16,
        height: 16,
      },
      moss_bl: {
        x: 0,
        y: 160,
        width: 16,
        height: 16,
      },
      moss_tm: {
        x: 16,
        y: 128,
        width: 16,
        height: 16,
      },
      moss_tr: {
        x: 32,
        y: 128,
        width: 16,
        height: 16,
      },
      moss_mr: {
        x: 32,
        y: 144,
        width: 16,
        height: 16,
      },
      moss_bm: {
        x: 16,
        y: 160,
        width: 16,
        height: 16,
      },
      moss_br: {
        x: 32,
        y: 160,
        width: 16,
        height: 16,
      },
      grass_left: {
        x: 96,
        y: 0,
        width: 16,
        height: 16,
      },
      grass_middle: {
        x: 112,
        y: 0,
        width: 16,
        height: 16,
      },
      grass_right: {
        x: 128,
        y: 0,
        width: 16,
        height: 16,
      },
      ground_left: {
        x: 96,
        y: 16,
        width: 16,
        height: 16,
      },
      ground_middle: {
        x: 112,
        y: 16,
        width: 16,
        height: 16,
      },
      ground_right: {
        x: 128,
        y: 16,
        width: 16,
        height: 16,
      },
      grass_bottom_left: {
        x: 96,
        y: 32,
        width: 16,
        height: 16,
      },
      grass_bottom_middle: {
        x: 112,
        y: 32,
        width: 16,
        height: 16,
      },
      grass_bottom_right: {
        x: 128,
        y: 32,
        width: 16,
        height: 16,
      },
      steel: {
        x: 192,
        y: 80,
        width: 16,
        height: 16,
      },
      stone: {
        x: 16,
        y: 0,
        width: 16,
        height: 9,
      },
      wood: {
        x: 39,
        y: 80,
        width: 9,
        height: 16,
      },
    });
  },
  items: () => {
    loadSprite("exit", "assets/items/checkpoints/end/end_(idle).png"),
      loadSprite("fruits", "assets/items/fruits/tilemap.png", {
        sliceX: 17,
        sliceY: 9,
        anims: {
          apple: {
            from: 0,
            to: 16,
            speed: 30,
            loop: true,
          },
          banana: {
            from: 17,
            to: 33,
            speed: 30,
            loop: true,
          },
          cherry: {
            from: 34,
            to: 50,
            speed: 30,
            loop: true,
          },
          collected: {
            from: 51,
            to: 57,
            speed: 20,
            loop: false,
          },
          kiwi: {
            from: 68,
            to: 84,
            speed: 30,
            loop: true,
          },
          watermelon: {
            from: 85,
            to: 101,
            speed: 30,
            loop: true,
          },
          orange: {
            from: 102,
            to: 118,
            speed: 30,
            loop: true,
          },
          pineapple: {
            from: 119,
            to: 135,
            speed: 30,
            loop: true,
          },
          strawberry: {
            from: 136,
            to: 152,
            speed: 30,
            loop: true,
          },
        },
      });
  },
  traps: () => {
    loadSprite("spikes", "assets/traps/spikes/idle.png");
  },
  fonts: () => {
    loadFont("jersey", "assets/fonts/Jersey10-Regular.ttf");
  },
  sounds: () => {
    loadSound("coin", "assets/audio/Coin 1.wav");
    loadSound("gameOver", "assets/audio/Game Over 1.wav");
    loadSound("jump", "assets/audio/Jump 1.wav");
    loadSound("powerup", "assets/audio/Power Up 1.wav");
  },
};

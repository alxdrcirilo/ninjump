import kaboom from "kaboom";
import { levelConfig } from "./config/levelConfig";
import { levels } from "./scenes/levels";
import { load } from "./utils/loader";
import { playerConfig } from "./entities/player";
import { ui } from "./utils/ui";

kaboom({
  width: 512,
  height: 320,
  letterbox: false,
  scale: 1.5,
  font: "jersey",
});

volume(0.2);

load.fonts();
load.items();
load.player();
load.sounds();
load.terrain();
load.traps();

export let currentLevel = 1;
export let score = 0;
export const FRUIT_SCORES = {
  apple: 1,
  banana: 1,
  cherry: 2,
  kiwi: 2,
  orange: 3,
  pineapple: 3,
  strawberry: 4,
  watermelon: 5,
};

const scenes = {
  menu: () => {
    // Reset level and score
    currentLevel = 1;
    score = 0;

    // Show menu
    ui.displayMenu();
  },
  rewards: () => {
    ui.displayFruitScores();
  },
  win: () => {
    ui.displayWin();

    if (currentLevel < Object.keys(levels).length) {
      onKeyPress("space", () => {
        go(++currentLevel);
      });
    } else {
      go("end");
    }
  },
  over: () => {
    ui.displayGameOver();
  },
  end: () => {
    ui.displayEnd();
  },
};

const levelBackground = ["brown", "pink", "purple"];
for (let i = 1; i <= 3; i++) {
  scenes[i] = () => {
    ui.displayBackground(levelBackground[i - 1]);
    let currentScore = ui.displayLevelScore();

    const level = addLevel(levels[i], levelConfig);
    const player = level.get("player")[0];
    player.play("idle");
    playerConfig.setup(player);

    level.get("fruits").forEach((fruit) => {
      const fruits = Object.keys(FRUIT_SCORES);
      const randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
      fruit.name = randomFruit;
      fruit.play(randomFruit);
    });

    player.onCollide("fruits", async (fruit) => {
      play("coin");
      fruit.play("collected");
      await wait(0.2);
      destroy(fruit);
      score += FRUIT_SCORES[fruit.name];
      currentScore.text = `Score: ${score}`;
    });

    ui.displayBorder();
  };
}

for (const key in scenes) {
  scene(key, scenes[key]);
}

go("menu");

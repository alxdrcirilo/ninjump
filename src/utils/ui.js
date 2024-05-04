import { controls } from "../scenes/controls";
import { FRUIT_SCORES, score, currentLevel } from "../main";
import { levelConfig } from "../config/levelConfig";
import { menu } from "../scenes/menu";

class UI {
  displayMenuText(message = "Press SPACE to start", showControls = true) {
    const menuText = add([
      text(message, {
        size: 30,
      }),
      area(),
      anchor("center"),
      pos(center().x, center().y + 100),
      opacity(),
      state("blink", ["blink", "stop"]),
    ]);

    if (showControls) {
      add([
        text("Press R to show the rewards", {
          size: 16,
        }),
        area(),
        anchor("center"),
        pos(center().x, center().y + 120),
        opacity(0.75),
      ]);
    }

    menuText.onStateEnter("blink", async () => {
      await tween(
        menuText.opacity,
        0,
        0.5,
        (opacity) => (menuText.opacity = opacity),
        easings.linear,
      );
      menuText.enterState("stop");
    });

    menuText.onStateEnter("stop", async () => {
      await tween(
        menuText.opacity,
        1,
        0.5,
        (opacity) => (menuText.opacity = opacity),
        easings.linear,
      );
      menuText.enterState("blink");
    });
  }

  displayBackground(color = "green") {
    loadSprite("background", `assets/background/${color}.png`);
    const menuBackground = add([
      sprite("background", {
        tiled: true,
        width: width() * 4,
        height: height() * 4,
      }),
      pos(-width(), -height()),
      state("blink", ["blink", "stop"]),
    ]);

    menuBackground.onStateEnter("blink", async () => {
      await tween(
        menuBackground.pos,
        vec2(-width(), -height() * 2),
        3,
        (val) => (menuBackground.pos = val),
        easings.linear,
      );
      menuBackground.enterState("stop");
    });

    menuBackground.onStateEnter("stop", async () => {
      await tween(
        menuBackground.pos,
        vec2(-width(), -height()),
        3,
        (val) => (menuBackground.pos = val),
        easings.linear,
      );
      menuBackground.enterState("blink");
    });
  }

  displayLogo() {
    loadSprite("logo", "assets/logo.png");
    add([
      sprite("logo"),
      scale(0.2),
      anchor("center"),
      pos(center().x, center().y - 30),
    ]);
  }

  displayFakeLevel() {
    const fakeLevel = addLevel(menu, levelConfig);
    const player = fakeLevel.get("player")[0];
    player.play("idle");
  }

  displayBorder() {
    for (let i = 0; i < height(); i += 16) {
      // Add wood borders
      add([sprite("wood"), pos(0, 9 + i), fixed()]);
      add([
        sprite("wood", {
          flipX: true,
        }),
        pos(width() - 8, 9 + i),
        fixed(),
      ]);
    }
    // Add stone borders
    for (let i = 0; i < width(); i += 16) {
      add([sprite("stone"), pos(i, 0), fixed()]);
      add([sprite("stone"), pos(i, height() - 8), fixed()]);
    }
  }

  displayFruitScores() {
    this.displayBackground();
    this.displayBorder();

    const level = addLevel(controls, levelConfig);
    const fruits = level.get("fruits");
    fruits.forEach((fruit, i) => {
      fruit.name = Object.keys(FRUIT_SCORES)[i];
      fruit.play(fruit.name);
      add([
        text(
          `${fruit.name.charAt(0).toUpperCase() + fruit.name.slice(1)}: ${Object.values(FRUIT_SCORES)[i]}`,
          {
            size: 20,
          },
        ),
        pos(fruit.pos.x + 40, fruit.pos.y + 6),
      ]);
    });
    const keys = ["r", "escape"];
    for (let i in keys) {
      onKeyPress(keys[i], () => {
        go("menu");
      });
    }
  }

  displayWin() {
    this.displayBackground();
    add([pos(0, 0), rect(width(), height()), color("#000000"), opacity(0.3)]);
    add([
      text("You won!", {
        size: 38,
      }),
      anchor("center"),
      pos(center().x, center().y),
    ]);
    add([
      text(`Score: ${score}`, {
        size: 24,
      }),
      anchor("center"),
      pos(center().x, center().y + 30),
    ]);
    ui.displayMenuText("Press SPACE to continue", false);
  }

  displayGameOver() {
    this.displayBackground();
    add([pos(0, 0), rect(width(), height()), color("#000000"), opacity(0.3)]);
    add([
      text("Game Over", {
        size: 38,
      }),
      anchor("center"),
      pos(center().x, center().y),
    ]);
    add([
      text(`Score: ${score}`, {
        size: 24,
      }),
      anchor("center"),
      pos(center().x, center().y + 30),
    ]);
    play("gameOver");
    onKeyPress(() => {
      go("menu");
    });
  }

  displayLevelScore() {
    const levelText = add([
      text(`Level ${currentLevel}`, {
        size: 26,
      }),
      pos(14, 10),
      fixed(),
    ]);
    const scoreText = add([
      text(`Score: ${score}`, {
        size: 18,
      }),
      pos(14, 36),
      fixed(),
    ]);

    return scoreText;
  }

  displayEnd() {
    this.displayBackground("yellow");
    add([pos(0, 0), rect(width(), height()), color("#000000"), opacity(0.3)]);
    add([
      text("You made it to the end!", {
        size: 38,
      }),
      anchor("center"),
      pos(center().x, center().y),
    ]);
  }

  displayMenu() {
    this.displayBackground();
    this.displayFakeLevel();
    this.displayLogo();
    this.displayMenuText();

    onKeyPress("space", () => {
      go(1);
    });

    onKeyPress("r", () => {
      go("rewards");
    });
  }
}

export const ui = new UI();

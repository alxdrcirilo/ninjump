export const playerConfig = {
  setup: (player) => {
    setGravity(1200);

    const SPEED = 120;
    const JUMP_FORCE = 500;
    const FALL_DEATH = 400;

    player.onUpdate(() => {
      // Centre camera on player
      camPos(player.worldPos());
      // Check if player falls to death
      if (player.pos.y >= FALL_DEATH) {
        go("over");
      }
    });

    player.on("grounded", () => {
      player.play("idle");
    });

    player.onCollide("spikes", async (exit) => {
      addKaboom(exit.pos);
      go("over");
    });

    player.onCollide("exit", () => {
      play("powerup");
      go("win");
    });

    onKeyPress("space", () => {
      if (player.isGrounded()) {
        player.play("jump");
        player.jump(JUMP_FORCE);
        play("jump");
      }
    });

    onKeyDown("left", () => {
      player.flipX = true;
      player.move(-SPEED, 0);
      if (player.curAnim() !== "run") {
        player.play("run");
      }
      if (!player.isGrounded()) {
        player.play("jump");
      }
    });

    onKeyDown("right", () => {
      player.flipX = false;
      player.move(SPEED, 0);
      if (player.curAnim() !== "run") {
        player.play("run");
      }
      if (!player.isGrounded()) {
        player.play("jump");
      }
    });

    onKeyRelease("space", () => {
      player.play("idle");
    });

    onKeyRelease("left", () => {
      player.play("idle");
    });

    onKeyRelease("right", () => {
      player.play("idle");
    });
  },
};

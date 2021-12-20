export default class LevelCompleted extends Phaser.Scene {
  constructor() {
    super({
      key: 'LevelCompleted'
    });
    this.level = 0;
    this.levelNames = ['HouseMenu', 'level1', 'level2'];
  }

  create() {
    this.gameOverText = this.add.text(140, 180, "LEVEL COMPLETED", {
      fontSize: 58,
      align: 'center'
    });
    this.continueText = this.add.text(200, 300, "Press Space To Continue", {
      fontSize: 28,
      align: 'right'
    })
    this.continue = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
  }

  update() {
    if (this.continue.isDown) {
      this.level++;
      this.scene.start(this.levelNames[this.level], this.level);
    }
  }
}
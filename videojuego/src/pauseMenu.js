export default class PauseMenu extends Phaser.Scene {
    constructor() {
        super({
          key: 'PauseMenu'
        });

    }    

    create() {
      this.title = this.add.text(0, 60, "GAME PAUSED", {
        fontSize: 58,
        align: 'center'
      });
      console.log("aaa");
      this.pause = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
    }

    update() {
      if (Phaser.Input.Keyboard.JustDown(this.pause)) {
        this.title.destroy();
        this.scene.pause();
        this.scene.resume('Level');
     }
    }
}
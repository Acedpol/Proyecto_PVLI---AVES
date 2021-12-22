export default class PauseMenu extends Phaser.Scene {
    /**
   * Constructor de PauseMenu
   */
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
      this.subtitle = this.add.text(0, 110, "Press ESC to unpause", {
        fontSize: 28,
        align: 'right'
      })
      console.log("aaa");
      this.pause = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
    }

    update() {
      if (Phaser.Input.Keyboard.JustDown(this.pause)) {
        this.title.destroy();
        this.subtitle.destroy();
        this.scene.pause();
        this.scene.resume('Level');
     }
    }
}
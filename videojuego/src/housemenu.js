export default class HouseMenu extends Phaser.Scene {
  /**
   * Constructor de HouseMenu
   */
  constructor() {
    super({
      key: 'HouseMenu'
    });
    this.lvl = 0;
    this.passed = null;
  }

  init(pass) {
    if (this.passed === null) 
    this.passed = true;
    else this.passed = pass.win;
  }

  create() {
    this.background = this.add.image(360, 250, "fondoCasa");
    this.title = this.add.text(480, 60, "AVES: ", {
      fontSize: 58,
      align: 'center'
    });
    this.subtitle = this.add.text(460, 110, "El Videojuego", {
      fontSize: 28,
      align: 'right'
    })
    this.startText = this.add.text(160, 470, "Press Space to Start", {
      fontSize: 28,
      align: 'right'
    })
    this.start = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
  }

  update() {
    if (this.start.isDown) {
      if (this.passed !== null && this.passed === true) {
        // this.lvl++;
        this.lvl = 4;
        if (this.lvl > 4) this.lvl = 1;
      }
      this.scene.start('Level', this.lvl);
    }
  }


}
export default class HouseMenu extends Phaser.Scene {
    constructor() {
        super({
          key: 'HouseMenu'
        });

    }    

    create() {
      this.background = this.add.image(360,250,"fondoCasa");
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
        this.scene.start('Level');
     }
    }
  
    
}
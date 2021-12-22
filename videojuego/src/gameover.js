export default class GameOver extends Phaser.Scene {
    constructor() {
        super({
          key: 'GameOver'
        });        
      }    

    create() {
        this.gameOverText = this.add.text(220, 180, "GAME OVER", {

          fontSize: 58,
          align: 'center'
        });
        
        this.restartText = this.add.text(200, 300, "Press Space To Restart", {
          fontSize: 28,
          align: 'right'
        })
        this.scene.remove("UI");
        this.restart = this .input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update() {
      if (this.restart.isDown) {
         this.scene.start('HouseMenu');
      }
    }
    
}

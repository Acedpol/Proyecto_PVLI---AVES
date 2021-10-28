import Character from './character.js';
export default class Player extends Character { 


    constructor(scene, x, y){
        
        super(scene, x, y, 'player')
        this.hp = 15;
        this.damage = 5;
        this.speed = 20;
        
        // esto para poder movernos con wasd en vez de teclas
        this.right = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.left = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.up = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.down = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    }


    preUpdate(t,dt) {
      // super.preUpdate(t,dt);
      if (this.up.isDown) {
        this.body.setVelocityY(-this.speed);
      }
      else if (this.down.isDown){
        this.body.setVelocityY(this.speed);
      }
      else this.body.setVelocityY(0);
      if (this.left.isDown) {
        this.body.setVelocityX(-this.speed);
      }
      else if (this.right.isDown) {
        this.body.setVelocityX(this.speed);
      }
      else {
        this.body.setVelocityX(0);
      }

      // if (this.scene.physics.overlap(this.scene.bird, this)) {

      //     this.damage(bird.damage);
      // }
    }


}
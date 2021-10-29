import Character from './character.js';
export default class Player extends Character { 


    constructor(scene, x, y){
        
        super(scene, x, y, 'protagonist');
        this.play('rundown')
        this.hp = 15;
        this.damage = 5;
        this.speed = 200;
        
        // esto para poder movernos con wasd en vez de teclas
        this.right = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.left = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.up = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.down = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    }


    preUpdate(t,dt) {
      super.preUpdate(t,dt);
      if (this.up.isDown) {
        this.body.setVelocityY(-this.speed);
        this.play('runup', true)
      }
      else if (this.down.isDown){
        this.body.setVelocityY(this.speed);
        this.play('rundown', true)
      }
      else {
        this.body.setVelocityY(0);
      }
      if (this.left.isDown) {
        this.body.setVelocityX(-this.speed);
        this.play('runleft', true)
      }
      else if (this.right.isDown) {
        this.body.setVelocityX(this.speed);
        this.play('runright', true)
      }
      else {
        this.body.setVelocityX(0);
      }

      // if (this.scene.physics.overlap(this.scene.bird, this)) {

      //     this.damage(bird.damage);
      // }
    }


}
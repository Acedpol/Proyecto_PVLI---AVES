import Character from './character.js';
export default class Player extends Character { 


    constructor(scene, x, y){
        
        super(scene, x, y, 'protagonist', 15, 200, 5);
        this.play('rundown')
        this.wood = 0;
        this.movement = new Phaser.Math.Vector2();
        // esto para poder movernos con wasd en vez de teclas
        this.right = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.left = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.up = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.down = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    }

    

    preUpdate(t,dt) 
    {
      // movimiento vertical:
      if (this.up.isDown) {
        this.movement.y = -1;
        this.play('runup', true)
      }
      else if (this.down.isDown){
        this.movement.y = 1;
        this.play('rundown', true)
      }
      else {
        this.movement.y = 0;
      }

      // movimiento horizontal:
      if (this.left.isDown) {
        this.movement.x = -1;
        this.play('runleft', true)
      }
      else if (this.right.isDown) {
        this.movement.x = 1;
        this.play('runright', true)
      }
      else {
        this.movement.x = 0;
      }

      this.movement.normalize();
      this.movement.scale(this.speed);
      this.body.setVelocity(this.movement.x,this.movement.y)
      // if (this.scene.physics.overlap(this.scene.bird, this)) {

      //     this.damage(bird.damage);
      // }
    }
}

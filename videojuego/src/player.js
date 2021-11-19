import Character from './character.js';
import Bird from './bird.js';
export default class Player extends Character { 


    constructor(scene, x, y){
        
        super(scene, x, y, 'protagonist', 15, 200, 5);
        this.play('idown');
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
      super.preUpdate(t, dt);
      // movimiento vertical:
      if (this.up.isDown) {
        this.movement.y = -1;
        //animacion del jugador
        this.play('runup', true);
      }
      else if (this.down.isDown){
        this.movement.y = 1;
        this.play('rundown', true);
      }
      else {
        this.movement.y = 0;
      }

      // movimiento horizontal:
      if (this.left.isDown) {
        this.movement.x = -1;
        this.play('runleft', true);
      }
      else if (this.right.isDown) {
        this.movement.x = 1;
        this.play('runright', true);
      }
      else {
        this.movement.x = 0;
      }

      if(this.down.isDown && this.left.isDown){
        this.play('rundownleft', true);
      }
      else if(this.down.isDown && this.right.isDown){
        this.play('rundownright', true);
      }
      else if(this.up.isDown && this.left.isDown){
        this.play('runupleft', true);
      }
      else if(this.up.isDown && this.right.isDown){
        this.play('runupright', true);
      }

      //para las animaciones de idle
      if(Phaser.Input.Keyboard.JustUp(this.up)) this.play('iup', true);
      else if(Phaser.Input.Keyboard.JustUp(this.down)) this.play('idown', true);
      else if(Phaser.Input.Keyboard.JustUp(this.right)) this.play('iright', true);
      else if(Phaser.Input.Keyboard.JustUp(this.left)) this.play('ileft', true);
      else if(Phaser.Input.Keyboard.JustUp(this.up) && Phaser.Input.Keyboard.JustUp(this.right)) this.play('iur', true);
      else if(Phaser.Input.Keyboard.JustUp(this.up) && Phaser.Input.Keyboard.JustUp(this.left)) this.play('iul', true);
      else if(Phaser.Input.Keyboard.JustUp(this.down) && Phaser.Input.Keyboard.JustUp(this.right)) this.play('idr', true);
      else if(Phaser.Input.Keyboard.JustUp(this.down) && Phaser.Input.Keyboard.JustUp(this.left)) this.play('idl', true);



      this.movement.normalize();
      this.movement.scale(this.speed);
      this.body.setVelocity(this.movement.x,this.movement.y);
    }
    update(t,dt)
    {
      if (this.scene.physics.overlap(this.scene.Bird, this)) {
  
          this.damage(Bird.damage);
      }
    }
}

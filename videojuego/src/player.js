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
        this.createanims();
    }

    addWood(wood)
    {
      this.wood+=wood;
    }

    heal(amount)
    {
      this.hp += amount;
      if(this.hp > this.max_hp) this.hp = this.max_hp;
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

    createanims(){
      this.anims.create({
        key: 'rundown',
        frames: this.anims.generateFrameNumbers('protagonist', { start: 0, end: 7 }),
        frameRate: 15, // Velocidad de la animación
        repeat: -1    // Animación en bucle
      });
      this.anims.create({
        key: 'runleft',
        frames: this.anims.generateFrameNumbers('protagonist', { start: 8, end: 15 }),
        frameRate: 15, // Velocidad de la animación
        repeat: -1    // Animación en bucle
      });
      this.anims.create({
        key: 'runright',
        frames: this.anims.generateFrameNumbers('protagonist', { start: 16, end: 23 }),
        frameRate: 15, // Velocidad de la animación
        repeat: -1    // Animación en bucle
      });
      this.anims.create({
        key: 'runup',
        frames: this.anims.generateFrameNumbers('protagonist', { start: 24, end: 31 }),
        frameRate: 15, // Velocidad de la animación
        repeat: -1    // Animación en bucle
      });
      this.anims.create({
        key: 'rundownleft',
        frames: this.anims.generateFrameNumbers('protagonist', { start: 32, end: 39 }),
        frameRate: 15, // Velocidad de la animación
        repeat: -1    // Animación en bucle
      });
      this.anims.create({
        key: 'rundownright',
        frames: this.anims.generateFrameNumbers('protagonist', { start: 40, end: 47 }),
        frameRate: 15, // Velocidad de la animación
        repeat: -1    // Animación en bucle
      });
      this.anims.create({
        key: 'runupleft',
        frames: this.anims.generateFrameNumbers('protagonist', { start: 48, end: 55 }),
        frameRate: 15, // Velocidad de la animación
        repeat: -1    // Animación en bucle
      });
      this.anims.create({
        key: 'runupright',
        frames: this.anims.generateFrameNumbers('protagonist', { start: 56, end: 63 }),
        frameRate: 15, // Velocidad de la animación
        repeat: -1    // Animación en bucle
      });
      this.anims.create({
        key: 'idown',
        frames: this.anims.generateFrameNumbers('protagonistidle', { start: 0, end: 0 }),
        frameRate: 1, // Velocidad de la animación
        repeat: -1    // Animación en bucle
      });
      this.anims.create({
        key: 'idr',
        frames: this.anims.generateFrameNumbers('protagonistidle', { start: 1, end: 1 }),
        frameRate: 1, // Velocidad de la animación
        repeat: -1    // Animación en bucle
      });
      this.anims.create({
        key: 'iright',
        frames: this.anims.generateFrameNumbers('protagonistidle', { start: 2, end: 2 }),
        frameRate: 1, // Velocidad de la animación
        repeat: -1    // Animación en bucle
      });
      this.anims.create({
        key: 'iur',
        frames: this.anims.generateFrameNumbers('protagonistidle', { start: 3, end: 3 }),
        frameRate: 1, // Velocidad de la animación
        repeat: -1    // Animación en bucle
      });
      this.anims.create({
        key: 'iup',
        frames: this.anims.generateFrameNumbers('protagonistidle', { start: 4, end: 4 }),
        frameRate: 1, // Velocidad de la animación
        repeat: -1    // Animación en bucle
      });
      this.anims.create({
        key: 'iul',
        frames: this.anims.generateFrameNumbers('protagonistidle', { start: 5, end: 5 }),
        frameRate: 1, // Velocidad de la animación
        repeat: -1    // Animación en bucle
      });
      this.anims.create({
        key: 'ileft',
        frames: this.anims.generateFrameNumbers('protagonistidle', { start: 6, end: 6 }),
        frameRate: 1, // Velocidad de la animación
        repeat: -1    // Animación en bucle
      });
      this.anims.create({
        key: 'idl',
        frames: this.anims.generateFrameNumbers('protagonistidle', { start: 7, end: 7 }),
        frameRate: 1, // Velocidad de la animación
        repeat: -1    // Animación en bucle
      });
    }
}

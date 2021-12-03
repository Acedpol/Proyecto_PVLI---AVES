import Character from './character.js';
import FollowingCitizen from './followingCitizen.js';
import Baseballbat from './baseballbat.js';
export default class Player extends Character {


  constructor(scene, x, y) {

    super(scene, x, y, 'protagonist', 150, 200, 5);
    this.wood = 0;
    this.rescued = false;
    this.visible = true;
    this.movement = new Phaser.Math.Vector2();
    // esto para poder movernos con wasd en vez de teclas
    this.right = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.left = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.up = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.down = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.space = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    this.orientation = this.down;
    this.attackcooldown = true;
    this.bat = this.up;
    this.createanims();
    this.play('idown', true);
  }

  attack(dx, dy) {
    this.bat = this.scene.add.existing(new Baseballbat(this.scene, this.x + dx, this.y + dy).setDepth(4));
    if (this.orientation === this.down) {
      this.bat.flipY = true;
    }
    if (this.orientation === this.right) {
      this.bat.angle = 90;
    }
    if (this.orientation === this.left) {
      this.bat.angle = -90;
    }
    if (this.orientation === this.up) this.bat.setDepth(2);
    this.timer = this.scene.time.addEvent({
      delay: 250,
      callback: onEvent,
      callbackScope: this,
      loop: false
    });

    function onEvent() {
      this.bat.destroy();
      this.attackcooldown = true;
    }
  }

  addWood(wood) {
    this.wood += wood;
  }

  heal(amount) {
    this.hp += amount;
    if (this.hp > this.max_hp) this.hp = this.max_hp;
  }

  rescueCitizen(x, y) {
    this.rescued = true;
    this.following = new FollowingCitizen(this.scene, x, y).setDepth(3);
  }

  hide() {
    this.visible = !this.visible
  }

  preUpdate(t, dt) {
    super.preUpdate(t, dt);
    // movimiento vertical:
    if (this.up.isDown && this.attackcooldown === true) {
      this.movement.y = -1;
      //animacion del jugador
      if (this.left.isUp && this.right.isUp) this.play('runup', true);
      this.orientation = this.up;
    } else if (this.down.isDown && this.attackcooldown === true) {
      this.movement.y = 1;
      if (this.left.isUp && this.right.isUp) this.play('rundown', true);
      this.orientation = this.down;
    } else {
      this.movement.y = 0;
    }

    // movimiento horizontal:
    if (this.left.isDown && this.attackcooldown === true) {
      this.movement.x = -1;
      if(this.up.isUp && this.down.isUp) this.play('runleft', true);
      this.orientation = this.left;
    } else if (this.right.isDown && this.attackcooldown === true) {
      this.movement.x = 1;
      if(this.up.isUp && this.down.isUp) this.play('runright', true);
      this.orientation = this.right;
    } else {
      this.movement.x = 0;
    }

    if (this.down.isDown && this.left.isDown && this.attackcooldown === true) {
      this.play('rundownleft', true);
    } else if (this.down.isDown && this.right.isDown && this.attackcooldown === true) {
      this.play('rundownright', true);
    } else if (this.up.isDown && this.left.isDown && this.attackcooldown === true) {
      this.play('runupleft', true);
    } else if (this.up.isDown && this.right.isDown && this.attackcooldown === true) {
      this.play('runupright', true);
    }

    //para las animaciones de idle
    if (Phaser.Input.Keyboard.JustUp(this.up) || (this.orientation === this.up && this.attackcooldown === false)) this.play('iup', true);
    else if (Phaser.Input.Keyboard.JustUp(this.down)|| (this.orientation === this.down && this.attackcooldown === false)) this.play('idown', true);
    else if (Phaser.Input.Keyboard.JustUp(this.right)|| (this.orientation === this.right && this.attackcooldown === false)) this.play('iright', true);
    else if (Phaser.Input.Keyboard.JustUp(this.left)|| (this.orientation === this.left && this.attackcooldown === false)) this.play('ileft', true);
    else if (Phaser.Input.Keyboard.JustUp(this.up) && Phaser.Input.Keyboard.JustUp(this.right)) this.play('iur', true);
    else if (Phaser.Input.Keyboard.JustUp(this.up) && Phaser.Input.Keyboard.JustUp(this.left)) this.play('iul', true);
    else if (Phaser.Input.Keyboard.JustUp(this.down) && Phaser.Input.Keyboard.JustUp(this.right)) this.play('idr', true);
    else if (Phaser.Input.Keyboard.JustUp(this.down) && Phaser.Input.Keyboard.JustUp(this.left)) this.play('idl', true);


    if (Phaser.Input.Keyboard.JustDown(this.space) && this.attackcooldown === true) {
      let dx = 0;
      let dy = 0;
      this.attackcooldown = false;
      if (this.orientation === this.down) {
        dx = 0;
        dy = this.height / 3;
      }
      if (this.orientation === this.right) {
        dx = this.width / 2;
        dy = 0;
      }
      if (this.orientation === this.left) {
        dx = - this.width / 2;
        dy = 0;
      }
      if (this.orientation === this.up) {
        dx = 0;
        dy = - this.height / 3;
      }
      this.attack(dx, dy);
    }

    this.movement.normalize();
    this.movement.scale(this.speed);
    this.body.setVelocity(this.movement.x, this.movement.y)

  }

  createanims() {
    this.anims.create({
      key: 'rundown',
      frames: this.anims.generateFrameNumbers('protagonist', {
        start: 0,
        end: 7
      }),
      frameRate: 15, // Velocidad de la animación
      repeat: -1 // Animación en bucle
    });
    this.anims.create({
      key: 'runleft',
      frames: this.anims.generateFrameNumbers('protagonist', {
        start: 8,
        end: 15
      }),
      frameRate: 15, // Velocidad de la animación
      repeat: -1 // Animación en bucle
    });
    this.anims.create({
      key: 'runright',
      frames: this.anims.generateFrameNumbers('protagonist', {
        start: 16,
        end: 23
      }),
      frameRate: 15, // Velocidad de la animación
      repeat: -1 // Animación en bucle
    });
    this.anims.create({
      key: 'runup',
      frames: this.anims.generateFrameNumbers('protagonist', {
        start: 24,
        end: 31
      }),
      frameRate: 15, // Velocidad de la animación
      repeat: -1 // Animación en bucle
    });
    this.anims.create({
      key: 'rundownleft',
      frames: this.anims.generateFrameNumbers('protagonist', {
        start: 32,
        end: 39
      }),
      frameRate: 15, // Velocidad de la animación
      repeat: -1 // Animación en bucle
    });
    this.anims.create({
      key: 'rundownright',
      frames: this.anims.generateFrameNumbers('protagonist', {
        start: 40,
        end: 47
      }),
      frameRate: 15, // Velocidad de la animación
      repeat: -1 // Animación en bucle
    });
    this.anims.create({
      key: 'runupleft',
      frames: this.anims.generateFrameNumbers('protagonist', {
        start: 48,
        end: 55
      }),
      frameRate: 15, // Velocidad de la animación
      repeat: -1 // Animación en bucle
    });
    this.anims.create({
      key: 'runupright',
      frames: this.anims.generateFrameNumbers('protagonist', {
        start: 56,
        end: 63
      }),
      frameRate: 15, // Velocidad de la animación
      repeat: -1 // Animación en bucle
    });
    this.anims.create({
      key: 'idown',
      frames: this.anims.generateFrameNumbers('protagonist', {
        start: 64,
        end: 64
      }),
      frameRate: 1, // Velocidad de la animación
      repeat: -1 // Animación en bucle
    });
    this.anims.create({
      key: 'idr',
      frames: this.anims.generateFrameNumbers('protagonist', {
        start: 65,
        end: 65
      }),
      frameRate: 1, // Velocidad de la animación
      repeat: -1 // Animación en bucle
    });
    this.anims.create({
      key: 'iright',
      frames: this.anims.generateFrameNumbers('protagonist', {
        start: 66,
        end: 66
      }),
      frameRate: 1, // Velocidad de la animación
      repeat: -1 // Animación en bucle
    });
    this.anims.create({
      key: 'iur',
      frames: this.anims.generateFrameNumbers('protagonist', {
        start: 67,
        end: 67
      }),
      frameRate: 1, // Velocidad de la animación
      repeat: -1 // Animación en bucle
    });
    this.anims.create({
      key: 'iup',
      frames: this.anims.generateFrameNumbers('protagonist', {
        start: 68,
        end: 68
      }),
      frameRate: 1, // Velocidad de la animación
      repeat: -1 // Animación en bucle
    });
    this.anims.create({
      key: 'iul',
      frames: this.anims.generateFrameNumbers('protagonist', {
        start: 69,
        end: 69
      }),
      frameRate: 1, // Velocidad de la animación
      repeat: -1 // Animación en bucle
    });
    this.anims.create({
      key: 'ileft',
      frames: this.anims.generateFrameNumbers('protagonist', {
        start: 70,
        end: 70
      }),
      frameRate: 1, // Velocidad de la animación
      repeat: -1 // Animación en bucle
    });
    this.anims.create({
      key: 'idl',
      frames: this.anims.generateFrameNumbers('protagonist', {
        start: 71,
        end: 71
      }),
      frameRate: 1, // Velocidad de la animación
      repeat: -1 // Animación en bucle
    });
  }

  getPos() {
    return new Phaser.Math.Vector2(this.x, this.y);
  }
}
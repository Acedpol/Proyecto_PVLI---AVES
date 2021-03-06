import Character from './character.js';
import FollowingCitizen from './followingcitizen.js';
import Baseballbat from './baseballbat.js';
export default class Player extends Character {

  /**
   * Constructor de Player
   * @param {Scene} scene Escena en la que aparece el botiquin
   * @param {number} x coordenada x
   * @param {number} y coordenada y
   */
  constructor(scene, x, y) {
    super(scene, x, y, 'protagonist', 150, 100, 1);
    this.wood = 0;
    this.rescued = false;
    this.hidden = false;
    // esto para poder movernos con wasd en vez de teclas
    this.right = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.left = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.up = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.down = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.space = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    this.pause = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);

    this.orientation = this.down;
    this.attackcooldown = true;
    this.bat = this.scene.add.existing(new Baseballbat(this.scene, 0, 0).setDepth(4));
    this.bat.disableBat();
    this.createanims();
    //this.load.audio('audio_bat','Bat.mp3');
    this.batSound = this.scene.sound.add('audio_bat');

    this.play('idown', true);
  }

  preUpdate(t, dt) {
    super.preUpdate(t, dt);
    //para el movimiento del jugador, sólo se podrá mover si no está escondido
    if (!this.hidden) {
      this.move();

      this.playanim();

      //Ataque, para que el jugador pueda atacar tiene que esperar a que se termine su cooldown
      this.attackinput();
    }

    if (Phaser.Input.Keyboard.JustDown(this.pause)) {
      let pe = this.scene.scene;
      this.scene.scene.pause();
      this.scene.scene.launch("PauseMenu");
    }
  }

  attack(dx, dy) {
    this.bat.enableBody(true, this.x + dx, this.y + dy, true, true)
    this.batSound.play(); //
    this.timer = this.scene.time.addEvent({
      delay: 250,
      callback: onEvent,
      callbackScope: this,
      loop: false
    });

    function onEvent() {
      this.bat.flipY = false;
      this.bat.angle = 0;
      this.bat.disableBat();
      this.attackcooldown = true;
    }
  }

  addWood(wood) {
    this.wood += wood;
  }

  getWood() {
    return this.wood;
  }

  heal(amount) {
    this.hp += amount;
    if (this.hp > this.max_hp) this.hp = this.max_hp;
  }

  getHealth() {
    return this.hp;
  }

  rescueCitizen(x, y) {
    this.rescued = true;
    this.following = new FollowingCitizen(this.scene, x, y).setDepth(3);
  }

  hide() {
    this.body.gameObject.alpha = 0;
    this.body.setVelocity(0, 0)
    this.hidden = true;
  }

  uncover() {
    this.body.gameObject.alpha = 255;
    this.hidden = false;
  }

  isHidden() {
    return this.hidden;
  }

  attackinput() {
    //si ha pasado el cooldown se llama al método para atacar
    //también orienta el sprite del bate en función del jugador
    if (Phaser.Input.Keyboard.JustDown(this.space) && this.attackcooldown === true) {
      let dx = 0;
      let dy = 0;
      this.attackcooldown = false;
      if (this.orientation === this.down) {
        this.bat.flipY = true;
        dx = 0;
        dy = this.height / 3;
      }
      if (this.orientation === this.right) {
        this.bat.angle = 90;
        dx = this.width / 2;
        dy = 0;
      }
      if (this.orientation === this.left) {
        this.bat.angle = -90;
        dx = -this.width / 2;
        dy = 0;
      }
      if (this.orientation === this.up) {
        dx = 0;
        dy = -this.height / 3;
      }
      this.attack(dx, dy);
    }
  }

  playanim() {
    // movimiento vertical:
    if (this.down.isDown && this.left.isDown && this.attackcooldown === true) {
      this.play('rundownleft', true);
    } else if (this.down.isDown && this.right.isDown && this.attackcooldown === true) {
      this.play('rundownright', true);
    } else if (this.up.isDown && this.left.isDown && this.attackcooldown === true) {
      this.play('runupleft', true);
    } else if (this.up.isDown && this.right.isDown && this.attackcooldown === true) {
      this.play('runupright', true);
    }

    //lógica para las animaciones de idle
    if (Phaser.Input.Keyboard.JustUp(this.up) || (this.orientation === this.up && this.attackcooldown === false))
      this.play('iup', true);
    else if (Phaser.Input.Keyboard.JustUp(this.down) || (this.orientation === this.down && this.attackcooldown === false))
      this.play('idown', true);
    else if (Phaser.Input.Keyboard.JustUp(this.right) || (this.orientation === this.right && this.attackcooldown === false))
      this.play('iright', true);
    else if (Phaser.Input.Keyboard.JustUp(this.left) || (this.orientation === this.left && this.attackcooldown === false))
      this.play('ileft', true);
    else if (Phaser.Input.Keyboard.JustUp(this.up) && Phaser.Input.Keyboard.JustUp(this.right))
      this.play('iur', true);
    else if (Phaser.Input.Keyboard.JustUp(this.up) && Phaser.Input.Keyboard.JustUp(this.left))
      this.play('iul', true);
    else if (Phaser.Input.Keyboard.JustUp(this.down) && Phaser.Input.Keyboard.JustUp(this.right))
      this.play('idr', true);
    else if (Phaser.Input.Keyboard.JustUp(this.down) && Phaser.Input.Keyboard.JustUp(this.left))
      this.play('idl', true);
  }

  move() {
    if (this.up.isDown && this.attackcooldown) {
        this.movement.y = -1;
        //animacion del jugador
        if (this.left.isUp && this.right.isUp)
          this.play('runup', true);
        this.orientation = this.up;
      } else if (this.down.isDown && this.attackcooldown) {
        this.movement.y = 1;
        if (this.left.isUp && this.right.isUp)
          this.play('rundown', true);
        this.orientation = this.down;
      } else {
        this.movement.y = 0;
      }

      // movimiento horizontal:
      if (this.left.isDown && this.attackcooldown) {
        this.movement.x = -1;
        if (this.up.isUp && this.down.isUp)
          this.play('runleft', true);
        this.orientation = this.left;
      } else if (this.right.isDown && this.attackcooldown) {
        this.movement.x = 1;
        if (this.up.isUp && this.down.isUp)
          this.play('runright', true);
        this.orientation = this.right;
      } else {
        this.movement.x = 0;
      }

      this.movement.normalize(); this.movement.scale(this.speed); this.body.setVelocity(this.movement.x, this.movement.y)
    }

    createanims() {
      let start = 0;
      let end = 7;
      let numanims = 8;
      let animnames = ['rundown', 'runleft', 'runright', 'runup', 'rundownleft', 'rundownright', 'runupleft', 'runupright'];
      for (let i = 0; i < numanims; i++) {
        this.anims.create({
          key: animnames[i],
          frames: this.anims.generateFrameNumbers('protagonist', {
            start: start,
            end: end
          }),
          frameRate: 15, // Velocidad de la animación
          repeat: -1 // Animación en bucle
        });
        start = end + 1;
        end += 8;
      }
      let idlenames = ['idown', 'idr', 'iright', 'iur', 'iup', 'iul', 'ileft', 'idl'];
      end = start;
      for (let i = 0; i < numanims; i++) {
        this.anims.create({
          key: idlenames[i],
          frames: this.anims.generateFrameNumbers('protagonist', {
            start: start,
            end: end
          }),
          frameRate: 1, // Velocidad de la animación
          repeat: -1 // Animación en bucle
        });
        start++;
        end++;
      }
    }

    reciveDamage(damage) {
      this.hp -= damage;
      if (this.hp <= 0) {
        // this.scene.scene.restart("Level");
        this.scene.scene.start("GameOver");
        this.scene.scene.remove("UI");
        this.destroy();
      }
    }

    getPos() {
      return new Phaser.Math.Vector2(this.x, this.y);
    }
  }
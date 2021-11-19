
/**
 * Clase que representa un personaje en el juego. Tanto el jugador como los enemigos como los vecinos una vez rescatados serán considerados personajes.
 */
export default class Character extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, type, hp, speed, damage){
    super(scene, x, y, type);
    this.max_hp = hp;
    this.hp = this.max_hp;
    this.speed = speed;
    this.damage = damage;
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.body.setCollideWorldBounds();
    this.createanims();
  }
  
  damage(damage)
  {
    this.hp-=damage;
    if(this.hp<=0)
      this.destroy();
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
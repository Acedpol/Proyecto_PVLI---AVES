
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
      frameRate: 2, // Velocidad de la animación
      repeat: -1    // Animación en bucle
    });
    this.anims.create({
      key: 'runleft',
      frames: this.anims.generateFrameNumbers('protagonist', { start: 8, end: 15 }),
      frameRate: 2, // Velocidad de la animación
      repeat: -1    // Animación en bucle
    });
    this.anims.create({
      key: 'runright',
      frames: this.anims.generateFrameNumbers('protagonist', { start: 16, end: 23 }),
      frameRate: 2, // Velocidad de la animación
      repeat: -1    // Animación en bucle
    });
    this.anims.create({
      key: 'runup',
      frames: this.anims.generateFrameNumbers('protagonist', { start: 24, end: 31 }),
      frameRate: 2, // Velocidad de la animación
      repeat: -1    // Animación en bucle
    });
  }
}

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
  }
  
  damage(damage)
  {
    this.hp-=damage;
    if(this.hp<=0)
      this.destroy();
  }
}
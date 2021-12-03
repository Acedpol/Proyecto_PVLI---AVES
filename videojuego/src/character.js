
/**
 * Clase que representa un personaje en el juego. Tanto el jugador como los enemigos como los vecinos una vez rescatados serán considerados personajes.
 */
export default class Character extends Phaser.GameObjects.Sprite {
    /**
   * Constructor de Heal
   * @param {Scene} scene Escena en la que aparece el jugador
   * @param {number} x coordenada x
   * @param {number} y coordenada y
   * @param {string} type tipo de gameObject
   * @param {number} hp vida del character
   * @param {number} speed velocidad a la que se desplaza el character
   * @param {number} damage daño que inflinge el character al atacar
   */
  constructor(scene, x, y, type, hp, speed, damage){
    super(scene, x, y, type);
    this.max_hp = hp;
    this.hp = this.max_hp;
    this.speed = speed;
    this.damage = damage;
    this.movement = new Phaser.Math.Vector2();
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.body.setCollideWorldBounds();
  }
  
  reciveDamage(damage) {
    this.hp-=damage;
    if(this.hp<=0)
      this.destroy();
  }

  followPlayer() {
    this.playerPos = this.scene.player.getPos();
    this.movement.x = -this.x + this.playerPos.x 
    this.movement.y = -this.y + this.playerPos.y 
    this.distance = this.playerPos.distance(new Phaser.Math.Vector2(this.x,this.y))
    this.movement.normalize();
    this.movement.scale(this.speed);
  }
}
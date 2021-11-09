export default class Heal extends Item {
  /**
   * Constructor de Heal
   * @param {Scene} scene Escena en la que aparece la estrella
   * @param {number} x coordenada x
   * @param {number} y coordenada y
   */
  constructor(scene, x, y, heal) {
    super(scene, x, y, 'heal');
    this.heal = heal
  }

  objectPickUp() {
    this.scene.player.hp += this.heal;
    if(this.scene.player.hp > this.scene.player.max_hp) this.scene.player.hp
  }
}
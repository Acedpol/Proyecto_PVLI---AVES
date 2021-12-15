import Item from './item.js';

export default class Heal extends Item {
  /**
   * Constructor de Heal
   * @param {Scene} scene Escena en la que aparece el botiquin
   * @param {number} x coordenada x
   * @param {number} y coordenada y
   * @param {number} heal cantidad de vida que cura el botiquín
   */
  constructor(scene, x, y, heal) {
    super(scene, x, y, 'heal');
    this.heal = heal
  }

  objectPickUp() {
    this.scene.player.heal(this.heal)
  }
}
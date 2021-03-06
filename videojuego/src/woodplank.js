import Item from './item.js';

export default class WoodPlank extends Item {

  /**
   * Constructor de WoodPlank
   * @param {Scene} scene Escena en la que aparece la estrella
   * @param {number} x coordenada x
   * @param {number} y coordenada y
   */
  constructor(scene, x, y) {
    super(scene, x, y, 'wood');
    this.setScale(1);
  }

  objectPickUp() {
    this.scene.woodSound.play();
    this.scene.player.addWood(1);
  }

}
import Item from './item.js';

export default class Citizen extends Item {

  /**
   * Constructor de Citizen
   * @param {Scene} scene Escena en la que aparece la estrella
   * @param {number} x coordenada x
   * @param {number} y coordenada y
   */
  constructor(scene, x, y) {
    super(scene, x, y, 'citizen');
    this.setScale(0.5);
    this.citizenSound = this.scene.sound.add('audio_citizen');
  }

  objectPickUp() {
    this.scene.player.rescueCitizen(this.x, this.y);
    this.citizenSound.play();
  }

}
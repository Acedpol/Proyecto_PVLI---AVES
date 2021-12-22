export default class Deadbird extends Phaser.GameObjects.Sprite {

      /**
   * Constructor de DeadBird
   * @param {Scene} scene Escena en la que aparece el botiquin
   * @param {number} x coordenada x
   * @param {number} y coordenada y
   */
    constructor(scene, x, y, mx) {
        super(scene, x, y);
        if (mx >= 0) this.flipX = true;
        this.play('birddeath');
    }
}
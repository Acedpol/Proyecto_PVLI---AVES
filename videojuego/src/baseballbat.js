
export default class Baseballbat extends Phaser.GameObjects.Sprite {
      /**
   * Constructor de Heal
   * @param {Scene} scene Escena en la que aparece el bate
   * @param {number} x coordenada x
   * @param {number} y coordenada y
   */
    constructor(scene, x, y){
        super(scene, x, y, 'attack');
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this, true);
        this.scene.physics.add.collider(this.scene.player, object);
    }
    preUpdate(t, dt){
        super.preUpdate(t,dt);
        if (this.scene.physics.overlap(this.scene.player, this)) {
            console.log("entered");
        }
    }
}
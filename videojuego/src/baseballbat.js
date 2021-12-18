export default class Baseballbat extends Phaser.Physics.Arcade.Sprite {
    /**
     * Constructor de Heal
     * @param {Scene} scene Escena en la que aparece el bate
     * @param {number} x coordenada x
     * @param {number} y coordenada y
     */
    constructor(scene, x, y) {
        super(scene, x, y, 'attack');
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);

    }
    preUpdate(t, dt) {
        super.preUpdate(t, dt);
    }

    disableBat(){
        this.disableBody(true, true);
    }
}
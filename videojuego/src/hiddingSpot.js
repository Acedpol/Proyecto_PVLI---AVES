export default class HiddingSpot extends Phaser.GameObjects.Sprite {
    /**
     * Constructor del jugador
     * @param {Phaser.Scene} scene Escena a la que pertenece el jugador
     * @param {number} x Coordenada X
     * @param {number} y Coordenada Y
     */
    constructor(scene, x, y) {
        super(scene, x, y, 'hiddingSpot');
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this, true);
        this.interact = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
    }

    /**
     * Redefinición del preUpdate de Phaser
     * @override
     */
    preUpdate() {
        super.preUpdate();
        if (this.scene.physics.overlap(this.scene.player, this) && this.interact.isDown && !this.scene.player.rescued) {
            // Delegamos en la escena para decidir qué hacer al 
            // haber cogido un objeto
            if(this.scene.player.isHidden()) this.scene.player.uncover();
            this.scene.player.hide();
        }
    }
}
export default class Item extends Phaser.GameObjects.Sprite{
    /**
    * Constructor del jugador
    * @param {Phaser.Scene} scene Escena a la que pertenece el jugador
    * @param {number} x Coordenada X
    * @param {number} y Coordenada Y
    */
    constructor(scene, x, y, type) {
        super(scene, x, y, type);
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this, true);
        this.scene.physics.add.collider(this.scene.player, Object);
        this.y -= this.height;
    }
    
    /**
    * Redefinición del preUpdate de Phaser
    * @override
    */
    preUpdate(){
        super.preUpdate();
        if (this.scene.physics.overlap(this.scene.player, this)) {
            // Delegamos en la escena para decidir qué hacer al 
            // haber cogido un objeto
            this.objectPickUp();
            this.destroy();
        }
    }
}
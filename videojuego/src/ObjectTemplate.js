export default class Object Phaser.GameObjects.Sprite{
    constructor{scene, x, y}{
        super(scene, x, y, '');
        this.scene.add.existing(this);
        this.x = x;
        this.y -= this.height;
    }

    this.physics.add.existing(this);
    this.physics.add.collider(player, Object)

    function OnCollision(player, Object){
        Object.disableBody(true, true);
    }

    
}
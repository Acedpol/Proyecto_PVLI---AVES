export default class Object Phaser.GameObjects.Sprite{
    constructor{scene, x, y}{
        super(scene, x, y, '');
        this.scene.add.existing(this);
        this.x = x;
        this.y -= this.height;
    }

    pickUpItem(player, Object){
        Object.disableBody(true, true);
    }

    
}
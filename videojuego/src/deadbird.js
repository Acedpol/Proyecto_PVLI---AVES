export default class Deadbird extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y) {
        super(scene, x, y);
        this.play('birddeath');
    }
}
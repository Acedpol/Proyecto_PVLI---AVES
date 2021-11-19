import Character from './character.js';
export default class Bird extends Character {

    constructor(scene, x, y){
        
        super(scene, x, y, 'enemy', 10, 100, 1);
        this.movement = new Phaser.Math.Vector2();
    }

    preupdate(t,dt)
    {
        this.rotation = Phaser.Math.Angle.Between(this.x, this.y, this.scene.player.x, this.scene.player.y);
        this.movement = this.rotation;
        this.body.setVelocity(movement)
    }
}
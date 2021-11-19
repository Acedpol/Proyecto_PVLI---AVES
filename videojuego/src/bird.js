import Character from './character.js';
export default class Bird extends Character {

    constructor(scene, x, y, type, hp, damage, speed){
        
        super(scene, x, y, type, hp, damage, speed);
        this.movement = new Phaser.Math.Vector2();
    }
    
    preupdate(t,dt)
    {
        this.rotation = Phaser.Math.Angle.Between(this.x, this.y, this.scene.player.x, this.scene.player.y);
        this.movement = this.rotation;
        this.body.setVelocity(movement)
    }
}

import Character from './character.js';
export default class Bird extends Character {

    constructor(scene, x, y){
        
        super(scene, x, y, 'enemy', 10, 100, 1);
        this.movement = new Phaser.Math.Vector2();
        this.createanims();
        this.play('bird')
    }

    preupdate(t,dt)
    {
        this.rotation = Phaser.Math.Angle.Between(this.x, this.y, this.scene.player.x, this.scene.player.y);
        this.movement = this.rotation;
        this.body.setVelocity(movement)
    }
    createanims()
    {
        this.anims.create({
            key:'bird',
            frames: this.anims.generateFrameNumbers('bird', {start: 0, end: 3}),
            framerate: 15,
            repeat: -1
        });
        
        
    }
}
    
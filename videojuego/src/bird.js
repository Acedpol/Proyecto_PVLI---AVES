import Character from './character.js';
import Player from './player.js';
export default class Bird extends Character {

    constructor(scene, x, y) {
        super(scene, x, y, 'enemy', 10, 100, 1);
        this.movement = new Phaser.Math.Vector2(0,0);
        this.createanims();
        this.play('bird');
    }

    preUpdate(t,dt) {
        super.preUpdate(t,dt)
        this.enemyPos = new Phaser.Math.Vector2(0,0);
        this.enemyPos = this.scene.player.getPos();
        this.movement.x = -this.x + this.enemyPos.x 
        this.movement.y = -this.y + this.enemyPos.y 
        this.distance = new Phaser.Math.Vector2();
        this.distance = this.enemyPos.distance(new Phaser.Math.Vector2(this.x,this.y))
        if(this.distance < 300)
        {
            this.movement.normalize();
            this.movement.scale(this.speed);
            this.body.setVelocity(this.movement.x, this.movement.y)
        }
        else this.body.setVelocity(0,0)

        // colisiones pajaros vs. jugador: si la hay, este recibe danio
        if (this.scene.physics.overlap(this.scene.player, this)) {
            this.scene.player.reciveDamage(1);
        }
    }
    
    createanims() {
        this.anims.create({
            key:'bird',
            frames: this.anims.generateFrameNumbers('bird', {start: 0, end: 3}),
            framerate: 15,
            repeat: -1
        });
    }
}
    
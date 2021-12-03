import Character from './character.js';
import Player from './player.js';
import Baseballbat from './baseballbat.js';
export default class Bird extends Character {

    constructor(scene, x, y) {
        super(scene, x, y, 'enemy', 10, 100, 1);
        this.createanims();
        this.play('bird');
    }

    preUpdate(t,dt) {
        super.preUpdate(t,dt)
        this.followPlayer()
        if(this.distance < 300)
        {
            this.body.setVelocity(this.movement.x, this.movement.y)
        }
        else this.body.setVelocity(0,0)

        // colisiones pajaros vs. jugador: si la hay, el jugador recibe danio
        if (this.scene.physics.overlap(this.scene.player, this)) {
            this.scene.player.reciveDamage(1);
        }
        // colisiones pajaros vs. jugador: si la hay, el jugador recibe danio
        if (this.scene.physics.overlap(this.scene.bat, this)) {
            this.reciveDamage(1);
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
    
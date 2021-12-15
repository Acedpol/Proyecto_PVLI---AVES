import Character from './character.js';
export default class Bird extends Character {

    constructor(scene, x, y) {
        super(scene, x, y, 'enemy', 2, 100, 1);
        this.play('bird');
        this.damaged = false;
    }

    preUpdate(t,dt) {
        super.preUpdate(t,dt);
        this.followPlayer();
        if(this.distance < 300)
        {
            this.body.setVelocity(this.movement.x, this.movement.y)
        }
        else this.body.setVelocity(0,0)

        // colisiones pajaros vs. jugador: si la hay, el jugador recibe danio
        if (this.scene.physics.overlap(this.scene.player, this)) {
            this.scene.player.reciveDamage(1);
        }
        // colisiones bate vs. pájaro: si la hay, el pájaro recibe danio
        if (this.scene.player.bat !== null && this.scene.physics.overlap(this.scene.player.bat, this) && this.damaged === false) {
            console.log("damage");
            this.reciveDamage(1);
            this.damaged = true;
            if(this.damaged === true && this.active === true){
                this.timer = this.scene.time.addEvent({
                    delay: 250,
                    callback: onEvent,
                    callbackScope: this
                });
                function onEvent() {
                    this.damaged = false;
                    console.log("timer finished")
                }
            }
        }
        
    }
}
    
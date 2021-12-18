import Character from './character.js';
export default class Bird extends Character {

    constructor(scene, x, y) {
        super(scene, x, y, 'enemy', 2, 100, 1);
        this.play('bird');
        this.damaged = false;
        this.damagedplayer = false;
        this.redirectCooldown = false;
    }

    preUpdate(t, dt) {
        super.preUpdate(t, dt);
        if (!this.scene.player.isHidden()) this.followPlayer();
        else {
           if (this.redirectCooldown === false) {
               this.redirectCooldown = true;
               this.timer = this.scene.time.addEvent({
                   delay: 500,
                   callback: redirect,
                   callbackScope: this,
                  loop: false
                });
    
               function redirect() {
                    this.movement = new Phaser.Math.Vector2(Phaser.Math.FloatBetween(-1, 1),Phaser.Math.FloatBetween(-1, 1));
                    this.movement.normalize();
                    this.movement.scale(this.speed);
                   this.redirectCooldown = false
               }
           }    
        }
        this.body.setVelocity(this.movement.x, this.movement.y)
        // colisiones pajaros vs. jugador: si la hay, el jugador recibe danio
        if (this.scene.physics.overlap(this.scene.player, this) && this.damagedplayer === false && !this.scene.player.isHidden()) {
            this.scene.player.reciveDamage(1);
            this.damagedplayer = true;
            if (this.damagedplayer === true && this.active === true) {
                this.playertimer = this.scene.time.addEvent({
                    delay: 250,
                    callback: onEven,
                    callbackScope: this
                });

                function onEven() {
                    this.damagedplayer = false;
                }
            }
        }
        // colisiones bate vs. pájaro: si la hay, el pájaro recibe danio
        if (this.scene.player.bat !== null && this.scene.physics.overlap(this.scene.player.bat, this) && this.damaged === false) {
            this.reciveDamage(1);
            this.damaged = true;
            if (this.damaged === true && this.active === true) {
                this.timer = this.scene.time.addEvent({
                    delay: 250,
                    callback: onEvent,
                    callbackScope: this
                });

                function onEvent() {
                    this.damaged = false;
                }
            }
        }

    }
}
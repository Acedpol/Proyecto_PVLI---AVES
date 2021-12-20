import Character from './character.js';
import Deadbird from './deadbird.js';
export default class Bird extends Character {

    constructor(scene, x, y) {
        super(scene, x, y, 'enemy', 2, 100, 1);
        this.play('bird');
        this.damaged = false;
        this.damagedplayer = false;
        this.redirectCooldown = false;
        this.follow = true;
    }

    preUpdate(t, dt) {
        super.preUpdate(t, dt);
        //Si el jugador no está escondido le persigue
        if (!this.scene.player.isHidden() && this.follow) this.followPlayer();
        //Si el jugador está escondido se mueve de forma aleatoria
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
        this.body.setVelocity(this.movement.x, this.movement.y);
        // colisiones pajaros vs. jugador: si la hay, el jugador recibe danio
        this.playerImpact();
        // colisiones bate vs. pájaro: si la hay, el pájaro recibe danio
        this.batImpact();

    }

    playerImpact() {
        if ((this.scene.physics.overlap(this.scene.player, this) || (this.scene.player.rescued && this.scene.physics.overlap(this.scene.player.following, this))) && 
        this.damagedplayer === false && !this.scene.player.isHidden()) {
            this.scene.player.reciveDamage(this.damage);
            this.damagedplayer = true;
            if (this.damagedplayer === true && this.active === true) {
                this.playertimer = this.scene.time.addEvent({
                    delay: 250,
                    callback: playerDamageTimer,
                    callbackScope: this
                });

                function playerDamageTimer() {
                    this.damagedplayer = false;
                }
            }
        }
    }

    batImpact() {
        if (this.scene.player.bat !== null && this.scene.physics.overlap(this.scene.player.bat, this) && this.damaged === false) {
            this.reciveDamage(this.scene.player.damage);
            this.damaged = true;
            if (this.damaged === true && this.active === true) {
                this.timer = this.scene.time.addEvent({
                    delay: 250,
                    callback: birdDamageTimer,
                    callbackScope: this
                });

                function birdDamageTimer() {
                    this.damaged = false;
                }
            }
        }
    }


    reciveDamage(damage) {
        this.hp -= damage;
        if (this.hp <= 0) {
            this.corpse = this.scene.add.existing(new Deadbird(this.scene, this.x, this.y).setDepth(4));
            this.destroy();
        }
    }
}
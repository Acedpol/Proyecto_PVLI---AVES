import Bird from './bird.js';
export default class Spawner extends Phaser.GameObjects.Sprite {


    constructor(scene, x, y) {
        super(scene, x, y, 'sewer');
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this, true);
        this.timerbool = false;
        this.delay = 1000 + (Math.random() * 4000);
        this.spawnRate = 5000;
    }

    preUpdate(t, dt) {
        super.preUpdate(t, dt)
        this.elapsed = this.scene.countdown.elapsedTime();
        this.duration = this.scene.countdown.getDuration();

        this.playerPos = this.scene.player.getPos();
        this.distance = this.playerPos.distance(new Phaser.Math.Vector2(this.x, this.y))
        //si el jugador está lejos no se spawnean pájaros
        if (this.distance < 300) {
            // calculo del delay de spawn
            if (this.timerbool === false && !this.scene.player.isHidden()) {
                this.timerbool = true;
                this.timer = this.scene.time.addEvent({
                    delay: this.delay,
                    callback: onEvent,
                    callbackScope: this,
                    loop: false
                });

                function onEvent() {
                    this.spawnBird();
                    this.delay = this.spawnRate / (this.elapsed / this.duration + 1);
                    this.timerbool = false
                    console.log(this.delay)
                }
            }
        }
    }

    spawnBird() {
        this.scene.add.existing(new Bird(this.scene, this.x, this.y).setDepth(4));
    }

}
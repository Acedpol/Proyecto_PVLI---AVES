import Bird from './bird.js';
import Countdown from './countdown.js';
export default class Spawner extends Phaser.GameObjects.Sprite {
  

    constructor(scene, x, y) {
      super(scene, x, y, 'sewer');
      this.scene.add.existing(this);
      this.scene.physics.add.existing(this, true);
      this.timerbool = false;
      this.initialDelay = 1000;
      this.newDelay = this.initialDelay;
    }

    preUpdate(t,dt){
        super.preUpdate(t,dt)
        this.elapsed = this.scene.countdown.elapsedTime();
        this.duration = this.scene.countdown.getDuration();
        // calculo del delay de spawn

        if(this.timerbool === false){
            this.timerbool = true;
            this.timer = this.scene.time.addEvent({
                delay: this.newDelay,               
                callback: onEvent,
                callbackScope: this,
                loop: false
            });
            
            function onEvent() {
                this.spawnBird();
                this.newDelay = this.initialDelay / (this.elapsed/this.duration+1);
                this.timerbool = false
            }
        }

    }

    spawnBird(){
        this.scene.add.existing(new Bird(this.scene, this.x, this.y).setDepth(4));
    }
    
    spawnRate(){    
        //this.newDelay = this.initialDelay * Phaser.Math.Percent(this.scene.countDown.remainingTime(), -this.scene.countDown.initialDuration(), this.scene.countDown.initialDuration())
        //this.newDelay = this.initialDelay * (((this.scene.countdown.elapsedTime()/this.scene.countdown.initialDuration())*100)+1);
    }

}


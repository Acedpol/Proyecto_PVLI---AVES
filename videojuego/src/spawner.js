import Bird from './bird.js';
export default class Spawner extends Phaser.GameObjects.Sprite {
  

    constructor(scene, x, y) {
      super(scene, x, y, 'base');
      this.scene.add.existing(this);
      this.scene.physics.add.existing(this, true);
    }

    /*
    Timer = Phaser.Time.timerEvent
    duration = 0;

    start(duration = 5000, callback)
    {
        this.finishedCallback = callback;
        this.timerEvent = this.scene.timerEvent.addEvent({
            delay: duration,
            callback:() => {
                this.restart()
                if(callback)
                {
                    callback()
                }
            }
        })
    }

    update(t,dt)
    {
        if(!this.timerEvent)
        {
            return;
        }
        const elapsed = this.timerEvent.getElapsed();
        if(elapsed === duration)
        {
            restart();
        }
    }

    restart()
    {
        elapsed = 0;
        this.spawnBird();
    }
*/
    spawnBird() {
    this.scene.add.existing(new Bird(this.scene, this.x, this.y).setDepth(4));
    }
}
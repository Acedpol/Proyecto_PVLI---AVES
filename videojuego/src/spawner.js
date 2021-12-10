import Bird from './bird.js';
export default class Spawner extends Phaser.GameObjects.Sprite {
  

    constructor(scene, x, y) {
      super(scene, x, y, 'sewer');
      this.scene.add.existing(this);
      this.scene.physics.add.existing(this, true);
      this.timerbool = false;
    }

    preUpdate(t,dt){
        super.preUpdate(t,dt)
        if(this.timerbool === false){
            this.timer = this.scene.time.addEvent({
                delay: 2000,               
                callback: onEvent,
                callbackScope: this,
                loop: true
            });
            this.timerbool = true;
            function onEvent() {
                this.spawnBird();
            }
        }

    }

    spawnBird() {
        this.scene.add.existing(new Bird(this.scene, this.x, this.y).setDepth(4));
    }

}


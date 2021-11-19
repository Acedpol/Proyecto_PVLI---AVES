import Bird from './bird.js';
export default class Spawner extends Phaser.GameObjects.Sprite {
  

    constructor(scene, x, y) {
      super(scene, x, y, 'base');
      this.scene.add.existing(this);
      this.scene.physics.add.existing(this, true);
    }
    spawnBird() {
        this.scene.add.existing(new Bird(this.scene, this.x, this.y));
    }

    preupdate(t,dt)
    {
        //timer = 0;
        //timer++;
        if(t%10===0)
        {
            this.spawnBird();
            timer = 0;
        }
    }
}
import Character from './character.js';
export default class FollowingCitizen extends Character { 

  constructor(scene, x, y) {
    super(scene, x, y, 'citizen', 0, 200, 0);
    this.movement = new Phaser.Math.Vector2(0,0);
  }

  preUpdate(t,dt)
  {
      super.preUpdate(t,dt)
      this.playerPos = new Phaser.Math.Vector2(0,0);
      this.playerPos = this.scene.player.getPos();
      this.movement.x = -this.x + this.playerPos.x 
      this.movement.y = -this.y + this.playerPos.y 
      this.distance = new Phaser.Math.Vector2();
      this.distance = this.playerPos.distance(new Phaser.Math.Vector2(this.x,this.y))
      if(this.distance > 30)
      {
          this.movement.normalize();
          this.movement.scale(this.speed);
          this.body.setVelocity(this.movement.x, this.movement.y)
      }
      else this.body.setVelocity(0,0)
  }

}
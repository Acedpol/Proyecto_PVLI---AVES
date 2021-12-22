import Character from './character.js';
export default class FollowingCitizen extends Character {

  constructor(scene, x, y) {
    super(scene, x, y, 'citizen', 0, 200, 0);
  }

  preUpdate(t, dt) {
    super.preUpdate(t, dt)
    this.followPlayer()
    if (this.distance > 30) {
      this.body.setVelocity(this.movement.x, this.movement.y)
    } else this.body.setVelocity(0, 0)
  }

}

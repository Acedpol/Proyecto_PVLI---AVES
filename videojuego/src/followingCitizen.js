import Character from './character.js';
export default class FollowingCitizen extends Character { 

  constructor(scene, x, y) {
    super(scene, x, y, 'citizen', 15, 0, 0);
  }
}
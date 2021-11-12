import Character from './character.js';
export default class Bird extends Character {

    constructor(scene, x, y, type, hp, damage, speed){
        
        super(scene, x, y, type, hp, damage, speed);
        this.movement = new Phaser.Math.Vector2();
        
    }
}
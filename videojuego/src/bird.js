import Character from './character.js';
export default class Bird extends Character {
    


    constructor(scene, x, y, type){
        
        super(scene, x, y, type)
        this.hp = 10;
        this.damage = 2;
        this.speed = 3;
        
    }


    preUpdate(t,dt) {
       
    }


}
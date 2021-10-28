import Character from './character.js';
export default class Player extends Character {
    


    constructor(scene, x, y, type){
        
        super(scene, x, y, type)
        this.hp = 15;
        this.damage = 5;
        this.speed = 5;
        
        // esto para poder movernos con wasd en vez de teclas
        this.right = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)
        this.left = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
        this.up = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)
        this.down = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)
    }


    preUpdate(t,dt) {
        if (this.right.isDown) {
          this.body.setVelocityX(this.Speed);
        }
        if (this.left.isDown) {
          this.body.setVelocityX(-this.speed);
        }
        if (this.up.isDown) {
          this.body.setVelocityY(this.speed);
        }
        if (this.down.isDown) {
            this.body.setVelocityY(-this.speed);
        }

        if (this.scene.physics.overlap(this.scene.bird, this)) {

            this.damage(bird.damage);
        }
    }


}
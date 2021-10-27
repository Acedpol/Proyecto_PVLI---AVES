import Character from './character.js';
export default class Player extends Character {
    

    speed = 5;
    hp = 10

    constructor(scene, x, y, type){
        
        super(scene, x, y, type)
        this.hp = 15;
        this.speed = 5;
    }

    movimiento(){

        // esto por si queremos movernos con wasd en vez de teclas
        this.right = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)
        this.left = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
        this.up = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)
        this.down = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)

        if(this.right.isDown)
        {
            this.x++;
        }
        if(this.left.isDown)
        {
            this.x--;
        }
        if(this.up.isDown)
        {
            this.y++;
        }
        if(this.down.isDown)
        {
            this.y--;
        }
        this.input.keybord.on("keydown_RIGHT",()=>{
            this.x++;
        })
        this.input.keybord.on("keydown_LEFT",()=>{
            this.x--;
        })
        this.input.keybord.on("keydown_UP",()=>{
            this.y++;
        })
        this.input.keybord.on("keydown_DOWN",()=>{
            this.y--;
        })
    }
    /*
    constructor(scene, x, y, type, hp, speed){
      super(scene, x, y, type);
      this.hp = hp
      this.speed = speed;
      this.scene.add.existing(this);
      this.scene.physics.add.existing(this);
      this.body.setCollideWorldBounds();
    }*/
  }
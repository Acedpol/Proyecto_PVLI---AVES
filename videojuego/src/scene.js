import Player from './player.js';
import Bird from './bird.js';
import Goal from './goal.js';
import Citizen from './citizen.js';
import Spawner from './spawner.js';
import WoodPlank from './woodplank.js';
import Heal from './heal.js';

/**
 * Escena principal del juego. La escena se compone de una serie de plataformas 
 * sobre las que se sitúan las bases en las podrán aparecer las estrellas. 
 * El juego comienza generando aleatoriamente una base sobre la que generar una estrella. 
 * Cada vez que el jugador recoge la estrella, aparece una nueva en otra base.
 * El juego termina cuando el jugador ha recogido 10 estrellas.
 * @extends Phaser.Scene
 */
export default class Level extends Phaser.Scene {
  /**
   * Constructor de la escena
   */
  constructor() {
    super({ key: 'level' });
  }

  /**
   * Creación de los elementos de la escena principal de juego
   */
  create() {
    //this.add.sprite('protagonist');
    // this.map = this.add.image(300, 250, 'mapa');
    this.player = new Player(this, 200, 300).setDepth(3);
    //this.spawner = new Spawner(this, 150, 250).setDepth(2);
    this.wood = new WoodPlank(this, 140, 160).setDepth(3);
    this.heal = new Heal(this, 350, 350).setDepth(3);
    //this.bird = new Bird(this, 100, 200).setDepth(4);
    //this.goal = new Goal(this, 200 , 400).setDepth(3);
    //this.citizen = new Citizen(this, 200, 200).setDepth(3);

    
    this.createMap(); // todo lo necesario para el mapa (sin objetos por ahora)
    this.createBirds();

    // Vista o punto de vista: cámara
    this.cameras.main.startFollow(this.player);

    // agregado de colisiones con el mapa al jugador:
    this.physics.add.collider(this.player, this.groundLayer); // terreno
    this.physics.add.collider(this.player, this.immovableLayer); // objetos/colliders
    this.physics.add.collider(this.player, this.backLayer); // sombras

  }

  createBirds(){
    this.birds = this.physics.add.group({key: 'birds', frameQuantity: 0});
    this.birdsCount = 0;
    
    for (const objeto of this.map.getObjectLayer('birds').objects) {
      if (objeto.type === '') {
        this.birds.add(new Bird(this, objeto.x, objeto.y).setDepth(4), true);
        this.birdsCount++;
      }
    }
  }

  createMap() 
  {
    // creación del mapa:
    this.map = this.make.tilemap({ 
      key: 'demo_map', // nombre dado al mapa.json en el boot.js
      tileWidth: 16, 
      tileHeight: 16 
    });

    // asignación de imagenes (tileset) a el 'name' de cada tileset en el pre-configurado.json:
    const tileset = this.map.addTilesetImage('TX_Props', 'img_TX_Props');
    const tileset1 = this.map.addTilesetImage('TX_Shadow', 'img_TX_Shadow');
    const tileset2 = this.map.addTilesetImage('TX_Struct', 'img_TX_Struct');
    const tileset3 = this.map.addTilesetImage('TX_Tileset_Grass', 'img_TX_Tileset_Grass');
    const tileset4 = this.map.addTilesetImage('TX_Tileset_Stone_Ground', 'img_TX_Tileset_Stone_Ground');
    const tileset5 = this.map.addTilesetImage('TX_Tileset_Wall', 'img_TX_Tileset_Wall');

    // creación de layers: 3 principales (fondo, fore y colliders)
    this.groundLayer = this.map.createLayer('ground', [tileset2, tileset3, tileset4, tileset5]).setDepth(1); // 'BackGroundLayer'
    this.immovableLayer = this.map.createLayer('colliders', [tileset, tileset2, tileset5]).setDepth(3); // 'GroundLayer'
    this.backLayer = this.map.createLayer('sombras', [tileset1, tileset3, tileset4]).setDepth(2); // 'ForeGroundLayer'

    // definición de colisiones:
    this.groundLayer.setCollisionByProperty({muro : true}); // -> con propiedad en TILED
    this.immovableLayer.setCollisionByProperty({muro : true}); // -> con propiedad en TILED
    this.backLayer.setCollisionByProperty({muro : true});
    
    // tamaño del mundo de juego:
    this.physics.world.setBounds(0, 0, this.map.tileWidth * this.map.width, this.map.tileHeight * this.map.height);

  }
}
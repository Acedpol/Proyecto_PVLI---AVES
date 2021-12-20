import Player from './player.js';
import Goal from './goal.js';
import Citizen from './citizen.js';
import Spawner from './spawner.js';
import WoodPlank from './woodplank.js';
import Heal from './heal.js';
import Countdown from './countdown.js';
import UI from './ui.js'
import HiddingSpot from './hiddingSpot.js';
/**
 * Escena principal del juego.
 * @extends Phaser.Scene
 */
export default class Level extends Phaser.Scene {
  /**
   * Constructor de la escena
   */
  constructor() {
    super({
      key: 'Level'
    });
    this.lvl = 0;
  }

  init(datos) {
    this.level = datos;
  }

  /**
   * Creación de los elementos de la escena principal de juego
   */
  create() {
    this.player = new Player(this, 200, 300).setDepth(3);
    this.countdown = new Countdown(this, 60000);
    this.ui = this.scene.add("UI", new UI(this.player, this.countdown), true)

    // inicia el mapa
    switch(this.level) {
      case 0:
        this.createDemo();
        break;
      case 1:
        this.createNivel2();
        break;
      case 2:
        this.createNivel1();
        break;
    }
    
    this.createObjects(); // creates all objects of the scene

    this.goal = new Goal(this, this.map.tileWidth * this.map.width - 150, 200).setDepth(3);

    // Vista o punto de vista: cámara
    this.cameras.main.startFollow(this.player);

    // agregado de colisiones con el mapa al jugador:
    this.physics.add.collider(this.player, this.groundLayer); // terreno
    this.physics.add.collider(this.player, this.immovableLayer); // objetos/colliders
    this.physics.add.collider(this.player, this.backLayer); // sombras

    this.createanims();
    // this.createsounds();
  }

  createNivel1() {
    this.createMap(
      'level', 'nivelJ', 16, 16, 
      'rpgUrbanKit1', null, null, null, null, null, 
      'img_tilemap', null, null, null, null, null, 
      'ground', 'colliders', 'foreground'
    );
  }

  createNivel2() {
    this.createMap(
      'level', 'nivelM', 16, 16, 
      'rpgUrbanKit1', null, null, null, null, null, 
      'img_tilemap', null, null, null, null, null, 
      'ground', 'colliders', 'foreground'
    );
  }

  createDemo() {
    this.createMap(
      'demo', 'demo_map', 16, 16, 
      'TX_Props', 'TX_Shadow', 'TX_Struct', 'TX_Tileset_Grass', 'TX_Tileset_Stone_Ground', 'TX_Tileset_Wall', 
      'img_TX_Props', 'img_TX_Shadow', 'img_TX_Struct', 'img_TX_Tileset_Grass', 'img_TX_Tileset_Stone_Ground', 'img_TX_Tileset_Wall',
      'ground', 'colliders', 'sombras'
    );
  }

  createMap(
    _type,
    _clave, 
    _tileHeight, 
    _tileWidth, 
    _tileset0, _tileset1, _tileset2, _tileset3, _tileset4, _tileset5, 
    _tileset_img0, _tileset_img1, _tileset_img2, _tileset_img3, _tileset_img4, _tileset_img5, 
    _layer0, _layer1, _layer2
    ) {
    // creación del mapa:
    this.map = this.make.tilemap({
      key: _clave, // nombre dado al mapa.json en el boot.js
      tileWidth: _tileWidth,
      tileHeight: _tileHeight
    });

    // asignación de imagenes (tileset) a el 'name' de cada tileset en el pre-configurado.json:
    if (_tileset0 != null) var tileset = this.map.addTilesetImage(_tileset0, _tileset_img0);
    if (_tileset1 != null) var tileset1 = this.map.addTilesetImage(_tileset1, _tileset_img1);
    if (_tileset2 != null) var tileset2 = this.map.addTilesetImage(_tileset2, _tileset_img2);
    if (_tileset3 != null) var tileset3 = this.map.addTilesetImage(_tileset3, _tileset_img3);
    if (_tileset4 != null) var tileset4 = this.map.addTilesetImage(_tileset4, _tileset_img4);
    if (_tileset5 != null) var tileset5 = this.map.addTilesetImage(_tileset5, _tileset_img5);

    // creación de layers: 3 principales (fondo, fore y colliders)
    if (_type === 'demo') {
      this.groundLayer = this.map.createLayer(_layer0, [tileset2, tileset3, tileset4, tileset5]).setDepth(1); // 'BackGroundLayer'
      this.immovableLayer = this.map.createLayer(_layer1, [tileset, tileset2, tileset5]).setDepth(3); // 'GroundLayer'
      this.backLayer = this.map.createLayer(_layer2, [tileset1, tileset3, tileset4]).setDepth(2); // 'ForeGroundLayer'
    }
    else if (_type === 'level') {
      this.groundLayer = this.map.createLayer(_layer0, _tileset0).setDepth(1); // 'BackGroundLayer'
      this.immovableLayer = this.map.createLayer(_layer1, _tileset0).setDepth(3); // 'GroundLayer'
      this.backLayer = this.map.createLayer(_layer2, _tileset0).setDepth(2); // 'ForeGroundLayer'
    }

    // definición de colisiones: -> con propiedad en TILED
    this.groundLayer.setCollisionByProperty({ muro: true });
    this.immovableLayer.setCollisionByProperty({ muro: true });
    this.backLayer.setCollisionByProperty({ muro: true });

    // tamaño del mundo de juego:
    this.physics.world.setBounds(0, 0, this.map.tileWidth * this.map.width, this.map.tileHeight * this.map.height);

    //creación del timer principal
    this.countdown.start(this.handleCountdown.bind(this))
  }

  createObjects(){    
    // el tag del ObjectLayer('...') es el mismo que TILED
    for (const objeto of this.map.getObjectLayer('objetos').objects) {
      if(objeto.properties) {
        // console.log("tiene properties");
        // console.log(objeto.properties);
        for (const { name, value } of objeto.properties) {
          if (name === 'type')
            switch(value) {
              case 'spawner':
                new Spawner(this, objeto.x, objeto.y).setDepth(2);
                break;
              case 'woodplank':
                new WoodPlank(this, objeto.x, objeto.y).setDepth(3);
                break;
              case 'hiddingSpot':
                new HiddingSpot(this, objeto.x, objeto.y).setDepth(3);
                break;
              case 'citic':
                new Citizen(this, objeto.x, objeto.y).setDepth(3);
                break;
              case 'heal':
                new Heal(this, objeto.x, objeto.y).setDepth(3);
                break;
              default:
                break;
            }           
        }
      }
    }
  }
  

  // Crea las animaciones d elos pájaros
  createanims() {
    this.anims.create({
      key: 'bird',
      frames: this.anims.generateFrameNumbers('bird', {
        start: 0,
        end: 3
      }),
      framerate: 15,
      repeat: -1
    });
    this.anims.create({
      key: 'birddeath',
      frames: this.anims.generateFrameNumbers('bird', {
        start: 4,
        end: 7
      }),
      framerate: 1,
      repeat: 0
    });
  }

  createsounds()
  {

    this.birdSound = this.bird.scene.sound.add('audio_crow');
    this.woodSound = this.scene.sound.add("audio_wood");
    
  }


  handleCountdown() {
  }

  update() {
    this.countdown.update();
    if (this.player.hp <= 0) this.level = 0;
  }
}
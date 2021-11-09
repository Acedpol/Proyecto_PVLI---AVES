import Player from './player.js';
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
    this.add.sprite('protagonist');
    // this.map = this.add.image(300, 250, 'mapa');
    this.stars = 10;
    this.bases = this.add.group();
    this.player = new Player(this, 200, 300).setDepth(3);
    
    this.createMap();

    // Vista o punto de vista: cámara
    this.cameras.main.startFollow(this.player);

    this.physics.add.collider(this.player, this.groundLayer); // terreno
    this.physics.add.collider(this.player, this.immovableLayer); // objetos/colliders
    this.physics.add.collider(this.player, this.backLayer); // sombras

  }

  createMap() 
  {
    // creación del mapa:
    this.map = this.make.tilemap({ 
      key: 'demo_map', 
      tileWidth: 16, 
      tileHeight: 16 
    });

    // asignación de imagenes (tilemaps/tilesets) a archivo pre-configurado.json:
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
    
    this.physics.world.setBounds(0, 0, this.map.tileWidth * this.map.width, this.map.tileHeight * this.map.height);

  }
}
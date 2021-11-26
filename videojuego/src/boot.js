/**
 * Escena para la precarga de los assets que se usarán en el juego.
 * Esta escena se puede mejorar añadiendo una imagen del juego y una 
 * barra de progreso de carga de los assets
 * @see {@link https://gamedevacademy.org/creating-a-preloading-screen-in-phaser-3/} como ejemplo
 * sobre cómo hacer una barra de progreso.
 */
export default class Boot extends Phaser.Scene {
  /**
   * Constructor de la escena
   */
  constructor() {
    super({ key: 'boot' });
  }

  /**
   * Carga de los assets del juego
   */
  preload() {
    // Con setPath podemos establecer el prefijo que se añadirá a todos los load que aparecen a continuación
    this.load.setPath('assets/sprites/');
    this.load.image('wood', 'wood.png', { frameWidth: 30, frameHeight: 30 });
    // Carga de spritesheets
    this.load.spritesheet('protagonist', 'notnessprota.png', { frameWidth: 28, frameHeight: 40 });
    this.load.spritesheet('protagonistidle', 'notnessprotaidleattack.png', { frameWidth: 42, frameHeight: 54 });
    this.load.spritesheet('bird', 'pajaros.png', { frameWidth: 30, frameHeight: 30 });
    this.load.spritesheet('citizen', 'citizen.png', { frameWidth: 30, frameHeight: 30 });
    this.load.spritesheet('heal', 'heal.png', { frameWidth: 30, frameHeight: 30 });
    this.load.spritesheet('goal', 'goal(2).ico', { frameWidth: 265, frameHeight: 137 });
  
    // this.loadDemoMap();  
    this.load.setPath('./assets/maps/demo/');
    this.load.tilemapTiledJSON('demo_map', 'nivel_demo.json');
    this.load.image('img_TX_Props', 'TX Props.png');
    this.load.image('img_TX_Shadow', 'TX Shadow.png');
    this.load.image('img_TX_Struct', 'TX Struct.png');
    this.load.image('img_TX_Tileset_Grass', 'TX Tileset Grass.png');
    this.load.image('img_TX_Tileset_Stone_Ground', 'TX Tileset Stone Ground.png');
    this.load.image('img_TX_Tileset_Wall', 'TX Tileset Wall.png');

    this.load.setPath('assets/images/');
    this.load.image('mapa', 'map_demo.png');
  }
  
  /**
   * Creación de la escena. En este caso, solo cambiamos a la escena que representa el
   * nivel del juego
   */
  create() {
    this.scene.start('level');
  }

  loadDemoMap(){
    this.load.setPath('./assets/maps/demo/');
    this.load.tilemapTiledJSON('demo_map', 'nivel_demo.json');
    this.load.image('img_TX_Props', 'TX Props.png');
    this.load.image('img_TX_Shadow', 'TX Shadow.png');
    this.load.image('img_TX_Struct', 'TX Struct.png');
    this.load.image('img_TX_Tileset_Grass', 'TX Tileset Grass.png');
    this.load.image('img_TX_Tileset_Stone_Ground', 'TX Tileset Stone Ground.png');
    this.load.image('img_TX_Tileset_Wall', 'TX Tileset Wall.png');
  }
}
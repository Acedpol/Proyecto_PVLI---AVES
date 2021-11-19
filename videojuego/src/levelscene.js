export default class levelscene extends Phaser.Scene {
    constructor(scenekey) {
        super({ key: scenekey, physics:{
            arcade: { debug:false, },
            matter:{debug:false,gravity:0},
        } });
    }
    
    //Escena padre del resto de escenas de los niveles

    create() {
        // Vista o punto de vista: cámara
        this.cameras.main.zoom = 2;
        this.cameras.main.fadeIn(1250);

        new Clock(this);

        // Vista o punto de vista: cámara
        // this.cameras.main.startFollow(this.player);
    }

    //Método general para la creacion de mapas de tiled: 3 capas y 2 tilesets.
    createMap(layer1, layer2, layer3, tileName1, tileName2, keyMap, tileMap, tileZone) {
        // creación del mapa:
        this.map = this.make.tilemap({ 
            key: keyMap, 
            tileWidth: 16, 
            tileHeight: 16 
        });
        // asignación de imagenes (tilemaps/tilesets) a archivo pre-configurado.json:
        const tileset = this.map.addTilesetImage(tileName1, tileMap);
        const tileset2 = this.map.addTilesetImage(tileName2, tileZone);

        // creación de layers: 3 principales (fondo, fore y colliders)
        this.groundLayer = this.map.createStaticLayer(layer1, [tileset]).setDepth(-2);
        this.immovableLayer = this.map.createStaticLayer(layer2, [tileset2]).setDepth(2);
        this.backLayer = this.map.createStaticLayer(layer3, [tileset2]).setDepth(-1);  
         
        // definición de colisiones:
        this.groundLayer.setCollisionByProperty({collider : true}); // -> con propiedad en el editor
        this.immovableLayer.setCollisionByProperty({collider : true}); // -> con propiedad en el editor
        this.backLayer.setCollisionByProperty({collider : true});
    }

    // render / debug de las colisiones en el mapa
    debugCollisionsMapa() {
        this.immovableLayer.renderDebug(this.add.graphics().setAlpha(0.60));
        this.groundLayer.renderDebug(this.add.graphics().setAlpha(0.60));
        this.backLayer.renderDebug(this.add.graphics().setAlpha(0.60));
    }

    update(){
        let timer = this.time.addEvent({
            delay: 15000, 
            callback: onEvent,
            callbackScope: this 
        })
    }

    onEvent(){
        text.setText('Time remaining: ' + timer.duration.toFixed(0), 32, 32);
    }
}
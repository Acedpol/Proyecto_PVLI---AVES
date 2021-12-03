import Boot from './boot.js';
import Level from './level.js';

/**
 * Inicio del juego en Phaser. Creamos el archivo de configuración del juego y creamos
 * la clase Game de Phaser, encargada de crear e iniciar el juego.
 */
const config_aves = {
    title: "Aves",
    // type: Phaser.AUTO,
    width:  720,
    height: 500,
    parent: "game_area",
    scale: {
        // mode: Phaser.Scale.FIT,  
        // autoCenter: Phaser.Scale.CENTER_HORIZONTALLY
    },
    pixelArt: true,
    scene: [Boot, Level],
    physics: { 
        default: 'arcade', 
        arcade: { 
            // gravity: { y: 400 }, 
            debug: true 
        } 
    }
};

// new Phaser.Game(config);

export class AvesGame extends Phaser.Game {
    constructor(config_aves) {
      super(config_aves);
    }
}

 window.onload = () => {
    var game = new AvesGame(config_aves);
};

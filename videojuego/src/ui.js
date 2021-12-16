import HealthBar from "./healthbar.js";

/**
 * Escena principal del juego.
 * @extends Phaser.Scene
 */
 export default class UI extends Phaser.Scene {
  /**
   * Constructor de la escena
   */
  constructor(player,timer) {
    super({
      key: 'UI'
    });
    this.player = player;
    this.timer = timer;
  }

  create() {
    this.graphics = this.add.graphics();
    this.timerText = this.add.text(this.sys.game.config.width/2 - 10, 30, this.timer.getDuration(), {fontSize: 40, align: 'center'});
    this.woodIcon = this.add.image(this.sys.game.config.width-80, 45, 'wood').setScale(4);
    this.woodText = this.add.text(this.sys.game.config.width-50, 30, this.player.getWood(), {fontSize: 40, align: 'right'})
    this.healthBar = new HealthBar(this, 30, 30, this.player.getHealth());  
  }

  update() {
    this.timerText.text = this.timer.getRemainingSeconds();
    this.healthBar.update(this.player.getHealth());
    this.woodText.text = this.player.getWood();
  }
}
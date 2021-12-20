
export default class Goal extends Phaser.GameObjects.Sprite {
  /**
   * Constructor del objetivo
   * @param {Phaser.Scene} scene Escena a la que pertenece el objetivo
   * @param {number} x Coordenada X
   * @param {number} y Coordenada Y
   */
  constructor(scene, x, y) {
    super(scene, x, y, 'goal');
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this, true);
  }

  /**
   * Redefinición del preUpdate de Phaser
   * @override
   */
  preUpdate() {
    super.preUpdate();
    if (this.scene.physics.overlap(this.scene.player, this) && this.scene.player.rescued) {
      this.scene.scene.remove("UI");
      this.scene.scene.stop("Level");
      this.scene.scene.start("LevelCompleted");
      this.destroy();
    }
  }
}
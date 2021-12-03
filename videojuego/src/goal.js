export default class Goal extends Phaser.GameObjects.Sprite{
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
      this.scene.physics.add.collider(this.scene.player, Object);
  }
  
  /**
  * Redefinición del preUpdate de Phaser
  * @override
  */
  preUpdate(){
      super.preUpdate();
      if (this.scene.physics.overlap(this.scene.player, this) && this.scene.player.rescued) {
          // Delegamos en la escena para decidir qué hacer al 
          // haber cogido un objeto
          console.log("GANASTE")
        }
  }
}
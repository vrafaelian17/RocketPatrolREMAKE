class TimeOrb extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
    }

    update() {
        this.x -= 6;

        if(this.x < -this.width) {
            this.x = game.config.width;
        }
    }
    reset() {
        this.x = game.config.width + 50;
        this.alpha = 1;
    }
}
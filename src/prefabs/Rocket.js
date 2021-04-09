class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this); //super important
        this.movementSpeed = 2;
    }

    update() {
        if(keyLeft.isDown) {
            this.x -= this.movementSpeed;
        }
        if(keyRight.isDown) {
            this.x += this.movementSpeed;
        }
    }
}
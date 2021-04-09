class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this); //super important
        this.movementSpeed = 2;
        this.isFiring = false;
    }

    update() {
        if(this.isFiring) {
            this.y -= this.movementSpeed;
            if(this.y < this.borderUISize*2) {
                this.y = game.config.height - borderUISize - borderPadding;
                this.isFiring = false;
            }
        } else {
            if(keyLeft.isDown) {
                this.x -= this.movementSpeed; //consistent movement
            }
            if(keyRight.isDown) {
                this.x += this.movementSpeed;
            }

            if(Phaser.Input.Keyboard.JustDown(keyF)) {
                this.isFiring = true;
            } //so that you are not always firing

            this.x = Phaser.Math.Clamp(
                this.x, 
                borderUISize + borderPadding, //lowerbound
                game.config.width - borderUISize - borderPadding); //upperbound
        }
    }
}
class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this); //super important
        this.movementSpeed = game.settings.spaceshipSpeed;
        this.isFiring = false;
        this.sfxRocket = scene.sound.add('sfx_rocket');
    }

    update() {
        if(this.isFiring) {
            this.y -= this.movementSpeed;
            if(this.y < borderUISize*3) {
                this.reset();
            }
        } else {
            if(keyLeft.isDown) {
                this.x -= this.movementSpeed; //consistent movement
            }
            if(keyRight.isDown) {
                this.x += this.movementSpeed;
            }

            if(Phaser.Input.Keyboard.JustDown(keyF) && !this.gameOver) {
                this.sfxRocket.play();
                this.isFiring = true;
            } //so that you are not always firing

            this.x = Phaser.Math.Clamp(
                this.x, 
                borderUISize + borderPadding, //lowerbound
                game.config.width - borderUISize - borderPadding); //upperbound
        }
    }

    reset() {
        this.y = game.config.height - borderUISize - borderPadding;
        this.isFiring = false;
    }
}

//class Rocket extends Phaser.GameObjects.Sprite {
//     constructor(scene, x, y, texture, frame) {
//         super(scene, x, y, texture, frame);
//         scene.add.existing(this);
//         this.movementSpeed = 2;
//     }

//     update() {
//         if(this.isFiring){
//             this.y -= this.movementSpeed;
//                 if(this.y < borderUISize*3){
//                     this.y = game.config.height-borderUISize-borderPadding;
//                     this.isFiring = false;
//                 }
//         }else{
//             if(keyLEFT.isDown) {
//                 this.x -= this.movementSpeed;
//             }
//             if(keyRIGHT.isDown) {
//                 this.x += this.movementSpeed;
//             }
//             if(Phaser.Input.Keyboard.JustDown(keyF)){
//                 this.isFiring = true;
//             }
//         this.x = Phaser.Math.Clamp(this.x, borderUISize + borderPadding, game.config.width-borderUISize-borderPadding);
//         }
//     }
// }

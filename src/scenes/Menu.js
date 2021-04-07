

class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    create() {
        console.log("running?");
        this.add.text(20,20, "Rocket Patrol Menu");
        this.scene.start("playScene");
    }
}
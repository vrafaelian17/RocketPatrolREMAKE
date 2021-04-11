

class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        //audio
        this.load.audio('sfx_select1', './assets/pizzatheme.wav');
        this.load.audio('sfx_select2', './assets/goldensins.wav');
        this.load.audio('sfx_select3', './assets/beachwalk.wav');
        this.load.audio('sfx_explosion1', './assets/bruh.wav');
        this.load.audio('sfx_explosion2', './assets/roblox.wav');
        this.load.audio('sfx_explosion3', './assets/fortnite.wav');
        this.load.audio('sfx_explosion4', './assets/punchswift.wav');
        this.load.audio('sfx_explosion5', './assets/windows.wav');
        this.load.audio('sfx_rocket', './assets/none.wav');
        this.load.audio('sfx_gameover', './assets/sadspiderman.wav');
    }

    create() {
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: 'lime',
            align: 'right',
            padding: {
              top: 5,
              bottom: 5,
            },
            fixedWidth: 0
          }

          //show menu text
          menuConfig.backgroundColor = '#00FF00';
        menuConfig.color = '#000';
          this.add.text(game.config.width/2, game.config.height/2 - borderUISize -
            borderPadding, 'ROCKET PATROL', menuConfig).setOrigin(0.5);
            this.add.text(game.config.width/2, game.config.height/2, 'Use <- -> arrows to move & (F) to fire',
            menuConfig).setOrigin(0.5);
            this.add.text(game.config.width/2, game.config.height/2 + borderUISize*2 +
            borderPadding*2, 'For the love of god please lower volume', menuConfig).setOrigin(0.5);
            this.add.text(game.config.width/2, game.config.height/2 + borderUISize +
                borderPadding, 'Press <- for Novice or -> for Expert', menuConfig).setOrigin(0.5);
            menuConfig.backgroundColor = '#00FF00';
            menuConfig.color = '#000';
            console.log("running?");

            keyLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
            keyRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyLeft)) {
            //easy mode
            game.settings = {
                spaceshipSpeed: 3,
                gameTimer: 60000
            }
            let song = Math.random() * 10
            if (song > 0 && song < 4) {
                this.sound.play('sfx_select1');
            } else if (song > 3 && song < 8) {
                this.sound.play('sfx_select2');
            } else {
                this.sound.play('sfx_select3');
            }
            //this.sound.play('');
            this.scene.start('playScene');
        }
        if (Phaser.Input.Keyboard.JustDown(keyRight)) {
            //hard mode
            game.settings = {
                spaceshipSpeed: 4,
                gameTimer: 45000
            }

            let song = Math.random() * 10
            if (song > 0 && song < 4) {
                this.sound.play('sfx_select1');
            } else if (song > 3 && song < 8) {
                this.sound.play('sfx_select2');
            } else {
                this.sound.play('sfx_select3');
            }
            //this.sound.play('');
            this.scene.start('playScene');
        }
    }
}
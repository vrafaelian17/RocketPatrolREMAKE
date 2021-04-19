
class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    //Rocket Patrol Point Breakdown
    //Redesign the game's artwork, UI, and sound to change its theme/aesthetic (to something other than sci-fi) (60)
    //Create a new spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points (20)
    //Implement a new timing/scoring mechanism that adds time to the clock for successful hits (20)
    //Bonus Points:
    //Implement parallax scrolling (10)
    //Display the time remaining (in seconds) on the screen (10)

    //If this is not worth the 60 points for whatever reason, here is an alternate breakdown:
    //Create 4 new explosion SFX and randomize which one plays on impact (10)
    //Display the time remaining (in seconds) on the screen (10)
    //Create a new title screen (e.g., new artwork, typography, layout) (10)
    //Implement parallax scrolling (10)
    //Create a new spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points (20)
    //Create new artwork for all of the in-game assets (rocket, spaceships, explosion) (20) 
    //Implement a new timing/scoring mechanism that adds time to the clock for successful hits (20)

    preload() {
        //audio
        this.load.audio('sfx_select1', './assets/StoneOceanMusic.wav');
        this.load.audio('sfx_select2', './assets/goldensins.wav');
        this.load.audio('sfx_select3', './assets/beachwalk.wav');
        this.load.audio('sfx_explosion1', './assets/ZaWarudo.wav');
        this.load.audio('sfx_explosion2', './assets/Hamon.wav');
        this.load.audio('sfx_explosion3', './assets/JotaroOraOra.wav');
        this.load.audio('sfx_explosion4', './assets/punchswift.wav');
        this.load.audio('sfx_explosion5', './assets/JolyneOraOra.wav');
        this.load.audio('sfx_rocket', './assets/none.wav');
        this.load.audio('sfx_gameover', './assets/ROUNDABOUT.wav');

        //image
        this.load.image('stoneoceangroup', 'assets/STONEOCEANTEAM.png');  
        this.load.image('scoreweb', 'assets/ScoreWeb.png'); 
    }

    create() {
        

        let menuConfig = {
            fontFamily: 'Aleo',
            fontSize: '26px',
            backgroundColor: '#00BFFF',
            color: 'lime',
            align: 'right',
            padding: {
              top: 1,
              bottom: 1,
            },
            fixedWidth: 0
          }

          
          
          this.titlescreen = this.add.tileSprite(
            0,0,640,480, 'stoneoceangroup'
            ).setOrigin(0,0);

            this.titleweb = this.add.tileSprite(
                0,0,640,64, 'scoreweb'
            ).setOrigin(0,0);

            this.titleweb = this.add.tileSprite(
                0,0,640,64, 'scoreweb'
            ).setOrigin(0,-0.8);

            this.titleweb = this.add.tileSprite(
                0,0,640,64, 'scoreweb'
            ).setOrigin(0,-1.5);

            this.titleweb = this.add.tileSprite(
                0,0,640,64, 'scoreweb'
            ).setOrigin(0,-3.9);
          //show menu text
          //menuConfig.backgroundColor = '#30D5C8';
            menuConfig.color = 'magenta';
          this.add.text(game.config.width/2, game.config.height/6.3 - borderUISize -
            borderPadding, 'STONE OCEAN HEAVEN FINAL BATTLE', menuConfig).setOrigin(0.5);
            this.add.text(game.config.width/2, game.config.height/6, 'Use <- -> arrows to swim & (F) to FREE',
            menuConfig).setOrigin(0.5);
            this.add.text(game.config.width/2, game.config.height/2 + borderUISize +
            borderPadding, "All of you, beware! He's everywhere!", menuConfig).setOrigin(0.5);
            this.add.text(game.config.width/2, game.config.height/5.8  + borderUISize +
                borderPadding, 'Press <- for Phase 1 or -> for Phase 2', menuConfig).setOrigin(0.5);
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
class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload() {
        this.load.image('starfield', 'assets/starfield.png');
        this.load.image('sofloor', 'assets/StoneOceanBottom.png');
        this.load.image('stonefree', 'assets/STONEFREEBODY.png');
        this.load.image('kiss', 'assets/KISS.png');
        this.load.image('starplatinum', 'assets/STARPLATINUM.png');
        this.load.image('diverdown', 'assets/DIVERDOWN.png');
        this.load.image('madeinheaven', 'assets/MADEINHEAVEN.png'); 
        this.load.image('stoneoceangroup', 'assets/STONEOCEANTEAM.png');  
        this.load.image('diobf', 'assets/PUCCI.png');  
        this.load.image('sky', 'assets/ChangingSky.png');
        this.load.image('timehearts', 'assets/TIMEHEARTS.png');
        this.load.image('heart', 'assets/HEART.png');
        this.load.image('scoreweb', '.../assets/ScoreWeb.png');
        this.load.image('famountains', 'assets/FloridaHome.png');
        this.load.image('rocket', 'assets/rocket.png');
        this.load.image('timeorb', 'assets/timeorb.png');
        this.load.image('spaceship', 'assets/spaceship.png');
        this.load.spritesheet('standhit', 'assets/newexplosion.png',
        {frameWidth: 64, frameHeigh: 32, startFrame: 0, endFrame: 6});
        this.load.spritesheet('explosion', 'assets/explosion.png', 
        {frameWidth: 64, frameHeight: 32, startFrame: 0, endFrame: 9});
    }

    create() {

        this.keepTick = 60000;

        this.starfield= this.add.tileSprite(
            0,0,640,480, 'starfield'
        ).setOrigin(0,0);

        this.sky = this.add.tileSprite(
            0,0, 1280, 480, 'sky'
        ).setOrigin(0,0);

        this.farawaymountains = this.add.tileSprite(
            0,0, 640, 480, 'famountains'
        ).setOrigin(0,0);

        this.sofloor = this.add.tileSprite(
            0,0,640,480, 'sofloor'
        ).setOrigin(0,0);

        this.stoneFree = new Rocket(
            this, 
            game.config.width/2,
            game.config.height - borderUISize - borderPadding,
            'stonefree'
        );

        this.ship1 = new Ship(
            this,
            Math.random()*(400-100) + 100,
            Math.random()*(300-200) + 200,
            'kiss'
        );
        //random formula math.random()*(b-a) + a

        this.ship2 = new Ship(
            this,
            Math.random()*(400-100) + 100,
            Math.random()*(300-200) + 200,
            'starplatinum'
        );

        this.ship3 = new Ship(
            this,
            Math.random()*(400-100) + 100,
            Math.random()*(300-200) + 200,
            'diverdown'
        );


        this.timeorb1 = new TimeOrb(
            this,
            Math.random()*(400-100) + 100,
            Math.random()*(200-100) + 100,
            'diobf'
        )

        this.mih = new MadeInHeaven(
            this,
            Math.random()*(400-100) + 100,
            Math.random()*(200 -100) + 100,
            'madeinheaven'
        )

        this.anims.create({
            key: 'protect',
            frames: this.anims.generateFrameNumbers('standhit', 
            { start: 0, end: 6, first: 0}),
            frameRate: 30
        })
        //animation configuration
        this.anims.create({
            key: 'explode',
            frames: this.anims.generateFrameNumbers('explosion', 
            { start: 0, end: 9, first: 0}),
            frameRate: 30
        })


        //this.add.existing(this.stoneFree);
        //same as line 4 in Rocket.js
        //green UI background
        // this.add.rectangle(
        //     0, 
        //     borderUISize + borderPadding, 
        //     game.config.width,
        //     borderUISize * 2,
        //     0x00FF00,
        //     ).setOrigin(0,0);


            this.scoreweb = this.add.tileSprite(
                0,0,640,64, 'scoreweb'
            ).setOrigin(0,-0.6);
        
            console.log(borderUISize + borderPadding);
            console.log(game.config.width);
            console.log(borderUISize*2);
        
        //white borders
        // this.add.rectangle(0, 0, game.config.width, borderUISize, 0x00BFFF).setOrigin(0 ,0);
	    // this.add.rectangle(0, game.config.height - borderUISize, game.config.width, borderUISize, 0x4682B4).setOrigin(0 ,0);
	    // this.add.rectangle(0, 0, borderUISize, game.config.height, 0x4682B4).setOrigin(0 ,0);
	    // this.add.rectangle(game.config.width - borderUISize, 0, borderUISize, game.config.height, 0x00BFFF).setOrigin(0 ,0);
        
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        keyLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

         //initialize score
         this.p1Score = 0;

         //initialize timepast
         this.timePast = 0;

         //initialize timeadd
         this.timeAdd = 0;

         this.heart = this.add.tileSprite(
             0,0, 100, 100, 'timehearts'
         ).setOrigin(-0.7, -0.35);
        
         this.heart = this.add.tileSprite(
            0,0, 100, 100, 'heart'
        ).setOrigin(-2.69, -0.35);

         this.heart = this.add.tileSprite(
            0,0, 100, 100, 'timehearts'
        ).setOrigin(-4.75, -0.35);

         //display score
         let scoreConfig = {
             fontFamily: 'Aleo',
             fontSize: '28px',
             //backgroundColor: '#00CDE1',
             color: 'white',
             align: 'right',
             padding: {
               top: 5,
               bottom: 5,
             },
             fixedWidth: 100
           }
           let timerConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            //backgroundColor: '#00CDE1',
            color: 'black',
            align: 'left',
            padding: {
              top: 5,
              bottom: 5,
            },
            fixedWidth: 70
          }
           this.scoreLeft = this.add.text(borderUISize + borderPadding, 
             borderUISize + borderPadding*2, this.p1Score, scoreConfig);
             scoreConfig.fixedWidth = 0;
            

            this.gameOver = false;
            this.timeLeft = this.add.text(borderUISize*15 + borderPadding,
                borderUISize + borderPadding*2, 87-this.timePast, timerConfig);

            // timerConfig.fixedWidth = 0;
            // this.add.text(game.config.width/2, game.config.height/2, this.time, timerConfig).setOrigin(0.5);


            scoreConfig.fixedWidth = 0;
            //game.settings.gameTimer
            this.clock = this.time.delayedCall(this.keepTick, () => {
                this.sound.play('sfx_gameover');
                if(this.p1Score > 300) {
                    console.log(this.p1Score);
                    this.timeLeft.text = 0;
                    this.scoreweb = this.add.tileSprite(
                        0,0,640,64, 'scoreweb'
                    ).setOrigin(0,-2.5);
                    this.add.text(game.config.width/2, game.config.height/2, 'WE DID IT!', scoreConfig).setOrigin(0.5);
                } else {
                    this.scoreweb = this.add.tileSprite(
                        0,0,640,64, 'scoreweb'
                    ).setOrigin(0,-2.5);
                    this.add.text(game.config.width/2, game.config.height/2, 'NO! JOLYNE GET UP! DONT GIVE UP YET!', scoreConfig).setOrigin(0.5);
                }
                this.scoreweb = this.add.tileSprite(
                    0,0,640,64, 'scoreweb'
                ).setOrigin(0,-5);
            this.add.text(game.config.width/2, game.config.height/2 + 64, 'Press (R) to REPLAY or <- for TITLE SCREEN', scoreConfig).setOrigin(0.5);
            this.gameOver = true;
            
        }, null, this);

        console.log(this.clock);
        
    }

    update() {
        this.timePast += 0.00695; //counts time 
        this.timeLeft.text = 60 - this.timePast;
        if (60 - this.timePast < 0) { //once below zero, don't go into negative
            this.timeLeft.text = 0;
        }
        //I want this to play so bad but it loops and kills anyone who plays
        //console.log(this.time);
        if (this.gameOver && Phaser.Input.Keyboard.JustDown(keyR)) {
            this.scene.restart();
            this.sound.play('sfx_select1');
        }

        if (this.gameOver && Phaser.Input.Keyboard.JustDown(keyLeft)) {
            this.scene.start("menuScene");
        }
        
        this.starfield.tilePositionX -= 1;
        //this.starfield.tilePositionY -= 4;
        this.farawaymountains.tilePositionX -= 1.5;
        this.sky.tilePositionX -= 3.5;
        //this.sky.tilePositionX -= 4;
        this.sofloor.tilePositionX -= 2;
        if (!this.gameOver) {
            this.stoneFree.update();
            this.ship1.update();
            this.ship2.update();
            this.ship3.update();
            this.timeorb1.update();
            this.mih.update();
        }

        //when rocket touches ship
        if(this.checkCollision(this.stoneFree, this.ship1)) {
            this.stoneFree.reset();
            this.shipExplode(this.ship1); 
        }
        if(this.checkCollision(this.stoneFree, this.ship2)) {
            this.stoneFree.reset();
            this.shipExplode(this.ship2);
        }
        if(this.checkCollision(this.stoneFree, this.ship3)) {
            this.stoneFree.reset();
            this.shipExplode(this.ship3);
        }
        if(this.checkCollisionOrb(this.stoneFree, this.timeorb1)){
            this.stoneFree.reset();
            this.timeOrbGet(this.timeorb1);
        }
        if(this.checkCollisionOrb(this.stoneFree, this.mih)) {
            this.stoneFree.reset();
            this.madeInHeavenHit(this.mih);
        }
        // this.checkCollision(this.stoneFree, this.ship1);
        // this.checkCollision(this.stoneFree, this.ship2);
        // this.checkCollision(this.stoneFree, this.ship3);
    }

    checkCollision(stonefree, ship) {
        if( stonefree.x + stonefree.width > ship.x && 
            stonefree.x < ship.x + ship.width &&
            stonefree.y + stonefree.height    > ship.y && 
            stonefree.y < ship.y + ship.height) {
                return true;
            } else {
                return false;
            }
    }

    checkCollisionOrb(stonefree, timeorb) {
        if( stonefree.x + stonefree.width > timeorb.x && 
            stonefree.x < timeorb.x + timeorb.width &&
            stonefree.y + stonefree.height    > timeorb.y && 
            stonefree.y < timeorb.y + timeorb.height) {
                return true;
            } else {
                return false;
            }
    }

    checkCollisionHeaven(stonefree, madeinheaven) {
        if( stonefree.x + stonefree.width > madeinheaven.x && 
            stonefree.x < madeinheaven.x + madeinheaven.width &&
            stonefree.y + stonefree.height    > madeinheaven.y && 
            stonefree.y < madeinheaven.y + madeinheaven.height) {
                return true;
            } else {
                return false;
            }
    }

    timeOrbGet(timeorb) {
        timeorb.alpha = 0;
        this.timePast -= 5;
        this.clock.delay += 5000;
        //adds time but game still ends at same time, I've tried fixing it but create cant be changed
        //this.clock += this.timeAdd
        //this.time += this.timeAdd
        //this.time += this.timeAdd
        //console.log(this.time)
        let boom1 = this.add.sprite(timeorb.x, timeorb.y, 'standhit').setOrigin(0,0);
        boom1.anims.play('protect');
        boom1.on('animationcomplete', () => {
            timeorb.reset();
            timeorb.alpha = 1;
            boom1.destroy();
        });
        this.sound.play('sfx_explosion1');
    }

    madeInHeavenHit(madeinheaven) {
        madeinheaven.alpha = 0;
        let boom2 = this.add.sprite(madeinheaven.x, madeinheaven.y, 'standhit').setOrigin(0,0);
        boom2.anims.play('protect');
        boom2.on('animationcomplete', () => {
            madeinheaven.reset();
            madeinheaven.alpha = 1;
            boom2.destroy();
        });

        //smaller ship worth more
        this.p1Score += 25;
        this.scoreLeft.text = this.p1Score;
        this.sound.play('sfx_explosion3');
    }

    shipExplode(ship) {
        //temporarily hide ship
        ship.alpha = 0;
        console.log(this.clock.delay);
        // this.timePast -= 1; //+ one second with every successful hit
        //create explosion sprite at ship's position
        let boom = this.add.sprite(ship.x, ship.y, 'standhit').setOrigin(0,0);
        boom.anims.play('protect');             //play explode animation
        boom.on('animationcomplete', () => {    //callback after anim completes
            ship.reset();                       //reset ship position
            ship.alpha = 1;                     //make ship visible again
            boom.destroy();                     //remove explosion sprite
        });

        //score and repaint
        this.p1Score += 10; //there is no ship.points???? so I'm using a number
        this.scoreLeft.text = this.p1Score;

        let oofsound = Math.random() * 10
        console.log(oofsound)
        if (oofsound > 0 && oofsound < 3) {
            this.sound.play('sfx_explosion2');
        } else if (oofsound > 2 && oofsound < 5) {
            this.sound.play('sfx_explosion2');
        } else if ( oofsound > 4 && oofsound < 7) {
            this.sound.play('sfx_explosion3');
        } else if ( oofsound > 6 && oofsound < 9.5) {
            this.sound.play('sfx_explosion4');
        } else {
            this.sound.play('sfx_explosion5');
        }
    }

    

}

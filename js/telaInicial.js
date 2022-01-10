class telaInicial extends Phaser.Scene{

    constructor()
    {
        super("telaInicial")
        this.texto;
        this.com;
    }
    
    preload ()
    {
     this.load.image('fundo', 'assets/quimica.png');
     this.load.image('play', 'assets/play.png');      
     this.load.image('ins', 'assets/i.png');                 
     this.load.image('carta', 'assets/c.png');      
    }
    
    create ()
    {
           

     this.add.image(550,400,'fundo');
           
     var start = this.add.image(500,340,'play');
     start.setInteractive();
     start.on('pointerup', this.comecar,this);
     
     var start = this.add.image(1190,60,'carta');
     start.setInteractive();
     start.on('pointerup', this.comecar3,this);
   
     var start = this.add.image(1115,59,'ins');
     start.setInteractive();
     start.on('pointerup', this.comecar2,this);
   
    }
    comecar()
        {
            this.scene.start('PlayGame');
           
        }
        comecar2()
        {
            this.scene.start('Instrucoes');
           
        }
        comecar3()
        {
            this.scene.start('BaralhoTela');
           
        }
    
    }
    
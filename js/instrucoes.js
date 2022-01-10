class Instrucoes extends Phaser.Scene{

    constructor()
    {
        super("Instrucoes")
        this.texto;
       
    }
    
        preload ()
        {
            
            this.load.image('bb', 'assets/porcaria.png');
            this.load.image('azul', 'assets/azul1.png');
          
        }
    
        create ()
        {
           
            
           this.add.image(625,400,'azul');
           var start = this.add.image(50,50,'bb');
           start.setInteractive();
           start.on('pointerup', this.comecar3,this);

           
        }
    comecar3()
        {
            this.scene.start('telaInicial');
        }
    }

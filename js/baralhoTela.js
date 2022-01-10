class BaralhoTela extends Phaser.Scene{

    constructor()
    {
        super("BaralhoTela")
        this.texto;
        this.carta1;

      
this.carta2;
        this.i=0;
    }
    
        preload ()
        {    
            
            this.load.image('esquerda', 'assets/esquerda.png');
            this.load.image('bb', 'assets/porcaria.png');
            this.load.image('direita', 'assets/direita.png');
            this.load.image('fundo2', 'assets/conhecer.png');
            this.load.image('carta', 'assets/carta.png');
            this.load.spritesheet('baralho','assets/1.png', 
            { frameWidth: 202, frameHeight: 320 }
            );
        }
    
        create ()
        {
            this.add.image(625,400,'fundo2');
             
            var start = this.add.image(790,500,'direita');
            start.setInteractive();
            start.on('pointerup', this.Proximacarta,this);
            
            var start = this.add.image(400,500,'esquerda');
            start.setInteractive();
            start.on('pointerup', this.Voltar,this);
            
            var botao = this.add.image(50,50,'bb');
            botao.setInteractive();
            botao.on('pointerup', this.comecar4,this);
            this.carta1 = this.add.image(590,530, 'baralho', this.i);
            
        }
        Proximacarta()
        {
            this.i++;
            this.carta1.setTexture('baralho',this.i);
           
            if(this.i==12)
            this.i=0;
        }
        Voltar()
        {
            this.i--;
            this.carta1.setTexture('baralho',this.i);
           
            if(this.i==12)
            this.i=0;
        }
        comecar4()
        {
            this.scene.start('telaInicial');
        }
    }
    


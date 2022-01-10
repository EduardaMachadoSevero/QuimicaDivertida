class PlayGame extends Phaser.Scene{

    constructor()
    {
        super("PlayGame")

        this.texto;
        this.carta1p1;
        this.carta2p1;
        this.carta1p2;
        this.carta2p2;
        this.jogo = new Jogo()
        this.textVencedor;
        this.btnAtributo;
        this.setaDireita;
        this.pote;
        this.fj1; 
        this.fj2; 
        this.valori = 1000; 
        this.apostamin = 20; //aposta mínima
        this.apostaj1;
        this.apostaj2;
        this.TValorDaAposta 
        this.c_apostas = 0;
        this.valorpote;
        this.mais;
        this.menos;
        this.timedEvent;
        this.legenda; 
        this.fichas;
        this.desistir; 
        this.apostartd; 
        this.apostar;
        
   
        
    }
    
        preload ()
        {   this.load.image('selecionado', 'assets/confirmar.png');
            this.load.image('seta2', 'assets/setaesquerda.png');
            this.load.image('bbb', 'assets/porcaria.png');
            this.load.image('maiss', 'assets/mais.png');
            this.load.image('menoss', 'assets/menos1.png');
            this.load.image('apostartudo', 'assets/apostartudo.png');
            this.load.image('apostarr', 'assets/apostar.png');
            this.load.image('desistir', 'assets/desistir.png');
            this.load.image('v', 'assets/vs.png');
            this.load.image('seta', 'assets/seta.png');
            this.load.image('fund', 'assets/mesa.png');
            this.load.image('c', 'assets/00.png');//carta virada
            this.load.image('player1', 'assets/atomo1.png');
            this.load.image('player2', 'assets/atomo2.png');
            this.load.spritesheet('baralho', 
                'assets/1.png',
                { frameWidth: 202, frameHeight: 320 }
            );
            
        }
    
        create ()
        {
            
            this.add.image(630,400,'fund');

         
            this.setaDireita = this.add.image(1130,80,'seta');
            this.setaDireita.setInteractive();
            this.setaDireita.on('pointerup',() => this.trocaAtributo());
    
            this.setaDireita.visible = false; 
    
            this.setaesquerda = this.add.image(740,80,'seta2');
            this.setaesquerda.setInteractive();
            this.setaesquerda.on('pointerup',() => this.trocaAtributo2());
            this.setaesquerda.visible = false; 
            
            this.btnAtributo = this.add.text(790,60, "Selecione o atributo",{color:'black',backgroundColor:'#f6bf32',fontFamily: 'Arial',
            fontSize: '30px',padding: {
                left: 10,
                right: 10,
                top: 10,
                bottom: 10,
            }}); 
           
            this.btnAtributo.visible = false;
    
            this.selecionado = this.add.image(930,150,'selecionado');
            this.selecionado.setInteractive();
            this.selecionado.on('pointerup',() => this.atributoSelecionado());
            this.selecionado.visible = false; 
          
    
            this.start = this.add.text(900, 80, "Reiniciar Rodada",{color:'black',backgroundColor:'#f6bf32',fontFamily: 'Arial',
            fontSize: '30px',padding: {
                left: 10,
                right: 10,
                top: 10,
                bottom: 10,
            }});
            
        this.start.setInteractive();
        this.start.on('pointerup', () => this.iniciarrodada());
        this.start.visible = false; 
    /////botão que volta para a tela de inicio
        var start = this.add.image(50,50,'bbb')
        start.setInteractive();
        start.on('pointerup', this.comecar4,this);
    
    //botoes de apostas!!!
       
        this.apostartd = this.add.image(700, 750, 'apostartudo');
        this.apostartd.setInteractive();
        this.apostartd.on('pointerup', () => this.apostarTudo());
    
        this.apostar = this.add.image(530, 750, 'apostarr');
        this.apostar.setInteractive();
        this.apostar.on('pointerup', () => this.realizarAposta());
    
        this.mais = this.add.image(690,690, 'maiss');
        this.mais.setInteractive();
        this.mais.on('pointerup', () =>this.aumentarAposta());
    
        this.menos = this.add.image(560,690, 'menoss');
        this.menos.setInteractive();
        this.menos.on('pointerup', ()=>this.diminuirAposta());
    
        this.jogo.jogador1 = new Jogador ();
        this.jogo.jogador1.nome = "JOGADOR 1";

        this.jogo.jogador2 = new Jogador ();
        this.jogo.jogador2.nome = "JOGADOR 2";
        this.jogo.baralho = new Baralho();

        this.jogo.jogador1.fichas = this.valori;
        this.jogo.jogador2.fichas = this.valori;
        this.pote = 0; 
///////////////////////////////////NAO PRECISARIA DISSO
      
 /////////////////////////////////////////////////// /      
        this.carta1p1 = this.add.image(180,350, 'c');
        this.carta1p2 = this.add.image(840, 350, 'c');
        this.carta2p1 = this.add.image(410, 350, 'c');
       
        this.carta2p2 = this.add.image(1070, 350, 'c');

        //jogadores/átomos
        this.add.image(200, 700, 'player1');
        this.add.image(1060, 700, 'player2');
        this.add.image(620,350,'v');
/////////textos das fichas, da legenda e da aposta
this.apostaj1 = this.apostamin;
this.TValorDaAposta = this.add.text(610,680,this.apostaj1,{font: "25px Arial", color:"black"});
this.valorpote = this.add.text(610,560,this.pote,{font: "25px Arial", color:"black"});
this.fj1 = this.add.text(300,740,this.jogo.jogador1.fichas,{font: "25px Arial", color:"black"});
this.fj2 = this.add.text(900,740,this.jogo.jogador2.fichas,{font: "25px Arial", color:"black"});
this.legenda = this.add.text(200, 100, "SUA VEZ", {color:"black", fontFamily: "Arial", fontSize: "30px"});

    }
    aumentarAposta(){

    this.apostaj1 += 5;
    this.TValorDaAposta.setText(this.apostaj1);
        }
        
    diminuirAposta(){

     this.apostaj1 -= 5;
     this.TValorDaAposta.setText(this.apostaj1);
        }
        
    apostarTudo(){


    this.apostaj1 = this.jogo.jogador1.fichas;
    this.TValorDaAposta.setText(this.apostaj1);
    this.realizarAposta();

    }
    
    realizarAposta(){

    this.pote+= this.apostaj1;
    this.valorpote.setText(this.pote);
    this.jogo.jogador1.fichas-= this.apostaj1;
    this.fj1.setText(this.jogo.jogador1.fichas);
    this.apostamin = this.apostaj1;
    this.apostaj1 = 0;
    this.TValorDaAposta.setText(this.apostaj1);
    
    console.log(this.apostaj1+ "        "+this.jogo.jogador1.fichas);
    
    this.c_apostas++;

if(this.c_apostas == 1){
this.iniciar();
this.legenda.setText("VEZ DO JOGADOR 2");
this.timedEvent = this.time.delayedCall(5000, this.rApostaj2, [], this);
}else;

if(this.c_apostas == 2){
this.legenda.setText("VEZ DO JOGADOR 2");
this.timedEvent = this.time.delayedCall(5000, this.rApostaj2, [], this);
}else;

};
    rApostaj2(){

    this.apostaj2 = this.apostamin; 
    this.jogo.jogador2.fichas-= this.apostaj2;
    this.fj2.setText(this.jogo.jogador2.fichas);
    this.pote+= this.apostaj2;
    this.valorpote.setText(this.pote);
    
    if(this.c_apostas == 1){
    this.legenda.setText("ESCOLHA UM ATRIBUTO");
    this.btnAtributo.visible=true;
    this.setaDireita.visible=true;
    this.setaesquerda.visible=true;
    this.selecionado.visible = true; 
    this.btnAtributo.setText("Selecione o atributo");
    
    };
   
    if(this.c_apostas == 2){
    this.timedEvent = this.time.delayedCall(1000, this.DefinirVencedor, [], this);

   

};
    
    if(this.c_apostas == 3){
        this.mostrarCartas();        
    }
    };
            
    
    iniciar()
{
    this.jogo.iniciarRodada(); 

    ////só mostra a carta do jogador 1
    this.carta1p1.setTexture('baralho', this.jogo.jogador1.carta1.imagem);
    
    }
    
    Proximacarta(){

    this.carta2p1.setTexture('baralho', this.jogo.jogador1.carta2.imagem);
        }
    
    DefinirVencedor(){

        this.vencedor = this.jogo.calcularVencedor();
      
        this.carta1p2.setTexture('baralho', this.jogo.jogador2.carta1.imagem);
        this.carta2p2.setTexture('baralho', this.jogo.jogador2.carta2.imagem);        
        //GURIAS: aqui sim adicionei o ganhou
        this.legenda.setText(this.jogo.calcularVencedor() + " GANHOU!");
       
    this.start.visible = true; 

    if(this.vencedor == this.jogo.jogador1.nome){
        this.jogo.jogador1.fichas += this.pote;
    }else 
    {
        if(this.vencedor == this.jogo.jogador2.nome){ 
            this.jogo.jogador2.fichas += this.pote;
        }
    }
    this.fj1.setText(this.jogo.jogador1.fichas);
    this.fj2.setText(this.jogo.jogador2.fichas);
    this.pote = 0;
    this.valorpote.setText(this.pote);
    
    
    
           
        }
    
    comecar4(){

    this.scene.start('telaInicial')
        }
     
    trocaAtributo(){
            
    switch (this.btnAtributo.text) {
    case "Selecione o atributo":
                    
    this.btnAtributo.setText("Número atômico")
    
    break;
    
    case "Número atômico":
                    
    this.btnAtributo.setText("Massa atômica")
        
    break;
    
    case "Massa atômica":
                    
    this.btnAtributo.setText("Eletronegatividade")
            
    break;
        
    case "Eletronegatividade":
                    
    this.btnAtributo.setText("Ponto de fusão")
                     
    break;

    case "Ponto de fusão":
  
    this.btnAtributo.setText("Ponto de ebulição")
                                      
    break;
    case "Ponto de ebulição":
                    
    this.btnAtributo.setText("Número atômico")
    break;
    }    
        
    this.jogo.definirAtributo = this.btnAtributo.text;
    console.log();
    }
    
    trocaAtributo2(){
            
    switch (this.btnAtributo.text) {

    case "Selecione o atributo":
                    
    this.btnAtributo.setText("Número atômico")
    
    break;
    
    case "Número atômico":
                    
    this.btnAtributo.setText("Massa atômica")
        
    break;
    
    case "Massa atômica":
                    
    this.btnAtributo.setText("Eletronegatividade")
            
    break;
        
    case "Eletronegatividade":
                    
    this.btnAtributo.setText("Ponto de fusão")
                     
    break;

    case "Ponto de fusão":
                    
    this.btnAtributo.setText("Ponto de ebulição")
                                      
    break;

    case "Ponto de ebulição":
                    
    this.btnAtributo.setText("Número atômico")
    break;
    }    
        
    this.jogo.definirAtributo = this.btnAtributo.text;
    
    }
    
    atributoSelecionado(){

        console.log(this.jogo.definirAtributo);
        this.btnAtributo.visible=false;
        this.setaDireita.visible=false;
        this.setaesquerda.visible=false;
        this.selecionado.visible=false;
        this.legenda.setText("SUA VEZ");
        this.Proximacarta();
    }

    
    iniciarrodada(){ /////reinicia a rodada!!

    this.legenda.setText("SUA VEZ");
    this.c_apostas = 0;
    this.carta1p1.setTexture('c');
    this.carta2p1.setTexture('c'); 
    this.carta1p2.setTexture('c');
    this.carta2p2.setTexture('c');        
      }
    }
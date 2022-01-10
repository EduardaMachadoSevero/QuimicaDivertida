class Jogo{
    
    constructor()
    {
        this.jogador1;
        this.jogador2;
        this.baralho;
      
    }

    
    iniciarJogo(jogador1, jogador2, baralho)
    {
        this.jogador1 = jogador1;
        this.jogador2 = jogador2;
        this.baralho = baralho;
    }

    iniciarRodada()
    {
        this.baralho.iniciarBaralho();
        this.jogador1.carta1 = this.baralho.sortear();
        this.jogador1.carta2 = this.baralho.sortear();   
        this.jogador2.carta1 = this.baralho.sortear();
        this.jogador2.carta2 = this.baralho.sortear();
      
        
    }

    definirAtributo(novo)
    {
        this.atributo = novo;
    }

    calcularVencedor()
    {
       var ptsj1 ;
      var  ptsj2;

    switch (this.definirAtributo){

          case "Número atômico":
          
    ptsj1 = this.jogador1.carta1.natomico + this.jogador1.carta2.natomico
    ptsj2 = this.jogador2.carta1.natomico + this.jogador2.carta2.natomico
    console.log(this.jogador1.carta1.natomico);
    console.log(this.jogador1.carta2.natomico);
    console.log(this.jogador2.carta1.natomico);
    console.log(this.jogador2.carta2.natomico); 
      break; 

    case "Massa atômica":
           
    ptsj1 = this.jogador1.carta1.matomico + this.jogador1.carta2.matomico
    ptsj2 = this.jogador2.carta1.matomico + this.jogador2.carta2.matomico
    console.log(this.jogador1.carta1.matomico);
    console.log(this.jogador1.carta2.matomico);
    console.log(this.jogador2.carta1.matomico);
    console.log(this.jogador2.carta2.matomico); 
      break; 

    case "Eletronegatividade":
           
    ptsj1 = this.jogador1.carta1.eletro + this.jogador1.carta2.eletro
    ptsj2 = this.jogador2.carta1.eletro + this.jogador2.carta2.eletro
    console.log(this.jogador1.carta1.eletro);
    console.log(this.jogador1.carta2.eletro);
    console.log(this.jogador2.carta1.eletro);
    console.log(this.jogador2.carta2.eletro); 
        break; 

   

    case "Ponto de fusão":
           
    ptsj1 = this.jogador1.carta1.fu + this.jogador1.carta2.fu
    ptsj2 = this.jogador2.carta1.fu + this.jogador2.carta2.fu
    console.log(this.jogador1.carta1.fu);
    console.log(this.jogador1.carta2.fu);
    console.log(this.jogador2.carta1.fu);
    console.log(this.jogador2.carta2.fu);    
                    break; 
                     
    case "Ponto de ebulição":
           
    ptsj1 = this.jogador1.carta1.ebu + this.jogador1.carta2.ebu
    ptsj2 = this.jogador2.carta1.ebu + this.jogador2.carta2.ebu
   
    console.log(this.jogador1.carta1.ebu);
    console.log(this.jogador1.carta2.ebu);
    console.log(this.jogador2.carta1.ebu);
    console.log(this.jogador2.carta2.ebu); 
    break;                             
                    
    

       }

    console.log(ptsj1)
    console.log(ptsj2)
    if(ptsj1>ptsj2){
        return  this.jogador1.nome;
    }
    if(ptsj1<ptsj2){
       return this.jogador2.nome;
    }
    
    if(ptsj1 == ptsj2){
       return " Empate";
    }
         


       }
    }
    
         


   
   
   
   
          
       
       
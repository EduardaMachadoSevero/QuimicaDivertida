var game;
window.onload = function() {
 
   
    let gameConfig = {
 
      
        scale: {
            mode: Phaser.Scale.FIT,
            autoCenter: Phaser.Scale.CENTER_BOTH,
            width: 1250,
            height: 800
        },
 
       
       backgroundColor: 0x000000,
 
      
       scene: [telaInicial,PlayGame,Instrucoes,BaralhoTela]
    };
 
   
    game = new Phaser.Game(gameConfig);
 
   
    window.focus()
}

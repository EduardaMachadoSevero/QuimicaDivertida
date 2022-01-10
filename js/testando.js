
var jogo = new Jogo();

var baralho = new Baralho();

var jogador1 = new Jogador();
jogador1.nome = "Ana";
var jogador2 = new Jogador();
jogador2.nome = "Pedro";

jogo.iniciarJogo(jogador1, jogador2, baralho);

jogo.iniciarRodada();
jogo.definirAtributo("peso");
jogo.enviarSegundaCarta();

alert(jogo.calcularVencedor());
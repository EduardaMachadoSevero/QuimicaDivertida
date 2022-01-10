class Baralho{

    constructor()
    {
        this.carta;   
    }

    sortear(){
        var i;
        i = Math.trunc((Math.random()*this.cartas.length));
        var carta = this.cartas[i];
        this.cartas.splice(i, 1);
        return carta;
    }

    iniciarBaralho()
    {
        this.cartas = new Array();

        var carta = new Carta();
        carta.natomico = 1;
        carta.matomico = 1;
        carta.eletro = 2.2;
        carta.ebu = -252.9;
        carta.fu = -259.2;
        carta.nome = "Hidrogênio";
        carta.imagem = 0;
        this.cartas.push(carta);

        var carta = new Carta();
        carta.natomico = 4;
        carta.matomico = 9;
        carta.eletro = 1.57;
        carta.ebu = 2970;
        carta.fu = 1287;
        carta.nome = "Berílio";
        carta.imagem = 1;
        this.cartas.push(carta);

        var carta = new Carta();
        carta.natomico = 6;
        carta.matomico = 12;
        carta.eletro = 2.55;
        carta.ebu = 4287;
        carta.fu = 3550;
        carta.nome = "Carbono";
        carta.imagem = 2;
        this.cartas.push(carta);

        var carta = new Carta();
        carta.natomico = 17;
        carta.matomico = 35.453;
        carta.eletro = 3.16;
        carta.ebu = -34.4;
        carta.fu = -101.5;
        carta.nome = "Cloro";
        carta.imagem = 3;
        this.cartas.push(carta);

        var carta = new Carta();
        carta.natomico = 2;
        carta.matomico = 4;
        carta.eletro = 0;
        carta.ebu = -268.9;
        carta.fu = -272.2;
        carta.nome = "Hélio";
        carta.imagem = 4;
        this.cartas.push(carta);

        var carta = new Carta();
        carta.natomico = 26;
        carta.matomico = 55.85;
        carta.eletro = 1.83;
        carta.ebu = 2862;
        carta.fu = 1538;
        carta.nome = "Ferro";
        carta.imagem = 5;
        this.cartas.push(carta);

        var carta = new Carta();
        carta.natomico = 9;
        carta.matomico = 19;
        carta.eletro = 3.98;
        carta.ebu = -188.1;
        carta.fu = -219.6;
        carta.nome = "Flúor";
        carta.imagem = 6;
        this.cartas.push(carta);

        var carta = new Carta();
        carta.natomico = 15;
        carta.matomico = 31;
        carta.eletro = 2.19;
        carta.ebu = 280.5;
        carta.fu = 44.1;
        carta.nome = "Fósforo";
        carta.imagem = 7;
        this.cartas.push(carta);

        var carta = new Carta();
        carta.natomico = 8;
        carta.matomico = 16;
        carta.eletro = 3.44;
        carta.ebu = -183;
        carta.fu = -218.8;
        carta.nome = "Oxigenio";
        carta.imagem = 8;
        this.cartas.push(carta);


        var carta = new Carta();
        carta.natomico = 3;
        carta.matomico = 7;
        carta.eletro = 0.98;
        carta.ebu = 1330;
        carta.fu = 180.5;
        carta.nome = "Lítio";
        carta.imagem = 9;
        this.cartas.push(carta);

        var carta = new Carta();
        carta.natomico = 18;
        carta.matomico = 40;
        carta.eletro = 0;
        carta.ebu = -185.8;
        carta.fu = -189.4;
        carta.nome = "Argonio";
        carta.imagem = 10;
        this.cartas.push(carta);

        var carta = new Carta();
        carta.natomico = 11;
        carta.matomico = 23;
        carta.eletro = 0.93;
        carta.ebu = 882.8;
        carta.fu = 97.79;
        carta.nome = "Sódio";
        carta.imagem = 11;
        this.cartas.push(carta);

        
    }
}



function Personaggio(nome) {
    this.nome = nome;
    this.vita = 100;
    this.attacco = getRandomInt(30, 70);
    this.difesa = getRandomInt(1, 20);
    this.cure = 3;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const crilin = { 
    nome: "Crilin", 
    vita: getRandomInt(50, 100), 
    attacco: getRandomInt(15, 25), 
    difesa: getRandomInt(5, 15), 
    fuga: 90 
};

const gokuSS = { 
    nome: "Goku SS", 
    vita: getRandomInt(60, 120), 
    attacco: getRandomInt(20, 30), 
    difesa: getRandomInt(10, 20), 
    fuga: 50 
};

const vegetaSS = { 
    nome: "Vegeta SS", 
    vita: getRandomInt(70, 140), 
    attacco: getRandomInt(25, 40), 
    difesa: getRandomInt(15, 25), 
    fuga: 5 
};

const mostri = [crilin, gokuSS, vegetaSS];

const mostro = mostri[Math.floor(Math.random() * mostri.length)];


function turnoGiocatore(giocatore, mostro) {
    console.log("\n" + giocatore.nome + " vs " + mostro.nome);
    console.log("Vita giocatore: " + giocatore.vita + ", Vita mostro: " + mostro.vita);
    const azione = prompt("Scegli un'azione (attacco, cura, fuga): ").toLowerCase();
    
    if (azione === "attacco") {
        let danno = Math.floor(Math.random() * giocatore.attacco);
        danno = Math.max(danno - mostro.difesa, 1);
        mostro.vita -= danno;
        console.log("Hai inflitto " + danno + " danni al " + mostro.nome + ".");
    } else if (azione === "cura") {
        if (giocatore.cure > 0) {
            let cura = Math.floor(Math.random()*30);
            giocatore.vita += cura;
            giocatore.cure -= 1;
            console.log("Ti sei curato di " + cura + " punti.")
        } else {
            console.log("Non hai più cure!");
        }
    } else if (azione === "fuga") {
        let probabilitàFuga = Math.floor(Math.random()*100);
        if (probabilitàFuga <= mostro.fuga) {
            console.log("Sei fuggito!");
            return true;
        } else {
            console.log("Sei stato preso!");
        }
    }

    return false;
}

function turnoMostro(giocatore, mostro) {
    let danno = Math.floor(Math.random() * mostro.attacco);
    danno = Math.max(danno - giocatore.difesa, 5);
    giocatore.vita -= danno;
    console.log(mostro.nome + " ti ha inflitto " + danno + " danni.");
}

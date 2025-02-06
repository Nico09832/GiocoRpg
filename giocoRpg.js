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



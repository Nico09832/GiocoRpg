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





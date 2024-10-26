//só uma implementação para facilitar o recebimento de dados do usuário
const prompt = require('prompt-sync')();


console.log("- Desafio Classificador de nível de Herói - ");

let nome = prompt("Digite seu nome, herói: ");
let xp = prompt("Quanto de xp você tem? ");
let nivel;
while (true){
    switch (true) {
        case (xp < 1000):
            nivel = "Ferro";
            break;
        case (xp >= 1000 && xp < 2000):
            nivel = "Bronze";
            break;
        case (xp >= 2000 && xp < 5000):
            nivel = "Prata";
            break;
        case (xp >= 5000 && xp < 7000):
            nivel = "Ouro";
            break;
        case (xp >= 7000 && xp < 8000):
            nivel = "Platina";
            break;
        case (xp >= 8000 && xp < 9000):
            nivel = "Ascendente";
            break;
        case (xp >= 9000 && xp < 10000):
            nivel = "Imortal";
            break;
        case (xp >= 10000):
            nivel = "Radiante";
            break;
        default:
            console.log("Digite um valor válido.");
    }
    console.log(`O herói de nome ${nome} está no nível ${nivel}!`);
    break
}


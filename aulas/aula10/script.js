/*
Parte 1: Crie uma classe Personagem. O personagem deverá ter:
nome, vida, ataque, defesa, vivo (ou morto), posicao (numero inteiro)
lembre de criar o método construtor 

Parte 2: Crie a função/método morrer
    - propriedade "vivo" se torna false, e console.log("morreu")
Crie a função tomarDano
    - tomar dano recebe um parametro, que é o valor do dano
    - diminui os pontos de vida do personagem, com base no dano tomado
    - verifica, se o dano for maior que os pontos de vida, personagem morre
*/

class Personagem {
    constructor(nome, ataque, defesa, vida, posicao, vivo = true) {
        this.nome = nome;
        this.ataque = ataque;
        this.defesa = defesa;
        this.posicao = posicao;
        this.vida = vida;
        this.vivo = vivo;
    }

    morrer() {
        this.vivo = false;
        console.log(`O ${this.nome} morreu!`);
    }

    tomarDano(quantidade) {
        if (this.vivo) {
            this.vida = this.vida - quantidade;
            console.log(`${this.nome} sofreu ${quantidade} de dano, e agora tem ${this.vida} de vida`)
            if (this.vida <= 0) {
                this.vida = 0;
                this.morrer();

            }
        } else {
            console.log('${this.nome} não pode mais sofrer dano!');
        }
    }
}

let personagem1 = new Personagem("Arthur", 10, 12, 100, 1, true);

console.log(personagem1);
console.log(personagem1.tomarDano(1));
console.log(personagem1.tomarDano(17));
console.log(personagem1.tomarDano(90));


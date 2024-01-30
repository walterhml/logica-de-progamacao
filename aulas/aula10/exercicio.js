class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }

    seApresentar() {
        console.log(`Olá, meu nome é ${this.nome}`)
    }

    conhecer() {
        
    }
}

const pessoaA = new Pessoa("Fulano");
const pessoaB = new Pessoa("Beltrano");

pessoaA.seApresentar(pessoaB);
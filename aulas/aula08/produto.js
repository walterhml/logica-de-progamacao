class Produto {
    constructor(nome, peso, preco, vencimento) {
        this.nome = nome;
        this.peso = peso;
        this.preco = preco;
        this.vencimento = vencimento;
    }

    verificarVencimento() {
        return !this.vencimento >= 2024;

    } 



}
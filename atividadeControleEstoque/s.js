class Produto {
    constructor(nome, quantidade, precoUnitario) {
        this.nome = nome;
        this.quantidade = quantidade;
        this.precoUnitario = precoUnitario;
    }

    calcularValorTotal() {
        return this.quantidade * this.precoUnitario;
    }
}

class ProdutoPerecivel extends Produto {
    constructor(nome, quantidade, precoUnitario, dataValidade) {
        super(nome, quantidade, precoUnitario);
        this.dataValidade = dataValidade;
    }

    verificarValidade() {
        const hoje = new Date();
        hoje <= this.dataValidade;
        return console.log("O produto ainda está válido.");
    }
}

class Estoque {
    constructor() {
        this.produtos = [];
    }

    adicionarProduto(produto) {
        this.produtos.push(produto);
    }

    removerProduto(nome) {
        this.produto = this.produto.filter(produto => produto.nome !== nome);
    }

    verificarEstoqueDisponivel(nome) {
        const produto = this.produtos.find(produto => produto.nome === nome);
        if (produto) {
            console.log(`Quantidade disponível de ${nome}: ${produto.quantidade}`);
        } else {
            console.log("Produto não encontrado no estoque.");
        }
    }

    calcularValorTotalEstoque() {
        const valorTotal = this.produtos.reduce((total, produto) => total + produto.calcularValorTotal(), 0);
        console.log(`Valor total do estoque: ${valorTotal}`);
    }
}

// Exemplo de Uso:

const estoque = new Estoque();

const produto1 = new ProdutoPerecivel("Leite", 10, 2.5, new Date('2024-02-15'));
const produto2 = new Produto("Arroz", 20, 3.0);

estoque.adicionarProduto(produto1);
estoque.adicionarProduto(produto2);

estoque.verificarEstoqueDisponivel("Leite");
estoque.verificarEstoqueDisponivel("Arroz");

estoque.calcularValorTotalEstoque();

estoque.removerProduto("Arroz");
estoque.calcularValorTotalEstoque();

console.log("Verificando validade do produto perecível:");
console.log(produto1.verificarValidade());

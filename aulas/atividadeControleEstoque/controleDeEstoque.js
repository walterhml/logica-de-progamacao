// Classe Produto:
// Descrição: Representa um produto genérico em um estoque, com atributos como nome, quantidade disponível e preço unitário.
// Métodos:
// Constructor: Inicializa os atributos do produto com os valores passados como parâmetro.
// calcularValorTotal(): Calcula e retorna o valor total do produto multiplicando a quantidade disponível pelo preço unitário.
class Produto {
    constructor(nome, quantidadeDisponivel, precoUnitario) {
        this.nome = nome;
        this.quantidadeDisponivel = quantidadeDisponivel;
        this.precoUnitario = precoUnitario;
    }

    calcularValorTotal() {
        return this.quantidadeDisponivel * this.precoUnitario;
    }
}

// Classe ProdutoPerecivel (Herda de Produto):
// Descrição: Representa um produto perecível em um estoque, herdando características da classe Produto e adicionando a funcionalidade de verificar a validade.
// Métodos:
// Constructor: Chama o construtor da classe pai (Produto) e adiciona o atributo data de validade.
// verificarValidade(): Verifica se o produto perecível está dentro da data de validade, retornando true se estiver válido e false caso contrário.
// Classe Estoque:

class ProdutoPerecivel extends Produto {
    constructor(nome, preco, dataValidade) {
        super(nome, preco); // Chama o construtor da classe pai

        this.dataValidade = dataValidade;  // Inicializa as propriedades específicas da classe filha
    }

    verificarValidade() {
        // Aqui, você pode usar this.dataValidade para verificar a validade
        // (Assumindo que você tem um método verificarValidade na classe DataValidade)
        if (this.dataValidade.verificarValidade()) {
            return true;
        } else {
            return false;
        }
    }
}


// Descrição: Representa o estoque de produtos, contendo funcionalidades para adicionar, remover, verificar disponibilidade e calcular o valor total do estoque.
// Métodos:
// Constructor: Inicializa o estoque com uma lista vazia de produtos.

class Estoque {
    constructor() {
        this.produtos = [];
    }

    adicionarProduto(produto) {
        this.produtos.push(produto);
    }

    removerProduto(nome) {
        for (let i = 0; i < this.produtos.length; i++) {
            if (this.produtos[i].nome === nome) {
                this.produtos.splice(i, 1);
                break;
            }
        }
    }

    verificarEstoqueDisponivel(nome) {
        let quantidadeDisponivel = 0;

        for (let i = 0; i < this.produtos.length; i++) {
            if (this.produtos[i].nome === nome) {
                quantidadeDisponivel = this.produtos[i].quantidadeDisponivel;
                break;
            }
        }

        console.log(`Quantidade disponível de ${nome}: ${quantidadeDisponivel}`);
    }

    calcularValorTotalEstoque() {
        let valorTotal = 0;

        for (let i = 0; i < this.produtos.length; i++) {
            valorTotal += this.produtos[i].calcularValorTotal();
        }

        console.log(`Valor total do estoque: ${valorTotal}`);
        return valorTotal;
    }
}

// Exemplo de Uso:
let meuEstoque = new Estoque();

let produto1 = new Produto("produto comum", 10, 5.99);
let ProdutoPerecivel1 = new ProdutoPerecivel("produto perecivel", 5, 8.49, new DataValidade(2024, 12, 31));

meuEstoque.adicionarProduto(produto1);
meuEstoque.adicionarProduto(ProdutoPerecivel1);

meuEstoque.verificarEstoqueDisponivel("produto comum");
meuEstoque.calcularValorTotalEstoque();






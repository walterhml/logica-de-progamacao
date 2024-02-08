// Classe Produto:
// Descrição: Representa um produto genérico em um estoque, com atributos como nome, quantidade disponível e preço unitário.
class Produto {
    constructor(nome, quantidadeDisponivel, precoUnitario) {
        this.nome = nome;
        this.quantidadeDisponivel = quantidadeDisponivel;
        this.precoUnitario = precoUnitario;
    }

    // Métodos:
    // Constructor: Inicializa os atributos do produto com os valores passados como parâmetro.
    // calcularValorTotal(): Calcula e retorna o valor total do produto multiplicando a quantidade disponível pelo preço unitário.

    calcularValorTotal() {
        return this.quantidadeDisponivel * this.precoUnitario;
    }
}

// Classe ProdutoPerecivel (Herda de Produto):
// Descrição: Representa um produto perecível em um estoque, herdando características da classe Produto e adicionando a funcionalidade de verificar a validade.
class ProdutoPerecivel extends Produto {
    constructor(nome, quantidadeDisponivel, precoUnitario, dataValidade) {
        super(nome, quantidadeDisponivel, precoUnitario);
        this.dataValidade = dataValidade;
    }

    // Métodos:
    // Constructor: Chama o construtor da classe pai (Produto) e adiciona o atributo data de validade.
    // verificarValidade(): Verifica se o produto perecível está dentro da data de validade, retornando true se estiver válido e false caso contrário.
    verificarValidade() {
        const dataAtual = new Date();
        dataAtual <= this.dataValidade;
        return console.log("O produto ainda está na data de validade!");
    }
}


// Classe Estoque:
// Descrição: Representa o estoque de produtos, contendo funcionalidades para adicionar, remover, verificar disponibilidade e calcular o valor total do estoque.
class Estoque {
    // Constructor: Inicializa o estoque com uma lista vazia de produtos.
    constructor() {
        this.produtos = [];
    }

    // Métodos:

    // adicionarProduto(produto): Adiciona um produto à lista de produtos no estoque.

    adicionarProduto(produto) {
        this.produtos.push(produto);
    }

    // removerProduto(nome): Remove um produto da lista pelo nome.

    removerProduto(nome) {
        this.produto = this.produto.filter(produto => produto.nome !== nome);
    }

    // verificarEstoqueDisponivel(nome): Verifica e exibe a quantidade disponível de um produto pelo nome.

    verificarEstoqueDisponivel(nome) {
        const produto = this.produtos.find(produto => produto.nome === nome);
        if (produto) {
            console.log(`Quantidade disponivel de ${nome}: ${produto.quantidadeDisponivel}`);
        } else {
            console.log("Produto não encontrado no estoque.");
        }
    }

    // calcularValorTotalEstoque(): Calcula e exibe o valor total do estoque somando o valor total de cada produto.

    calcularValorTotalEstoque() {
        const valorTotal = this.produtos.reduce((total, produto) => total + produto.calcularValorTotal(), 0);
        console.log(`Valor total do Estoque: ${valorTotal}`);
    }
}

// Exemplo de Uso:

// Criação do Estoque:
// Instancia um objeto meuEstoque da classe Estoque.
const meuEstoque = new Estoque();


// Adição de Produtos:
// Adiciona produtos do tipo Produto e ProdutoPerecivel ao estoque.
const produto1 = new Produto("camisa", 60.00, 10);
const produtoPerecivel2 = new ProdutoPerecivel("leite", 5, 4.5, new Date('2024-02-08'));

meuEstoque.adicionarProduto(produto1);
meuEstoque.adicionarProduto(produtoPerecivel2);
// Verificação e Cálculos:
// Realiza operações como verificar a disponibilidade de produtos, calcular o valor total do estoque e remover um produto específico.

//verificar a disponibilidade de produtos
meuEstoque.verificarEstoqueDisponivel("leite");
meuEstoque.verificarEstoqueDisponivel("camisa");

//calcular o valor total do estoque
meuEstoque.calcularValorTotalEstoque();

//remover um produto específico.
meuEstoque.removerProduto("leite");

// Exibição de Resultados:
// Exibe resultados das operações realizadas no estoque.
console.log("Verificando validade do produto perecivel");
console.log(produto1.verificarValidade);
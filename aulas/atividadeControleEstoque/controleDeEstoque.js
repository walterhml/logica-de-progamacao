// Classe Produto:
// Descrição: Representa um produto genérico em um estoque, com atributos como nome, quantidade disponível e preço unitário.
// Métodos:
// Constructor: Inicializa os atributos do produto com os valores passados como parâmetro.
// calcularValorTotal(): Calcula e retorna o valor total do produto multiplicando a quantidade disponível pelo preço unitário.
class Produto {
    constructor(nome, quantidade = true, precoUnitario) {
        this.nome = nome;
        this.quantidade = quantidade;
        this.precoUnitario = precoUnitario;
    }

    calcularValorTotal() {
        return this.quantidade * this.precoUnitario;
    }

}


// Classe ProdutoPerecivel (Herda de Produto):
// Descrição: Representa um produto perecível em um estoque, herdando características da classe Produto e adicionando a funcionalidade de verificar a validade.
// Métodos:
// Constructor: Chama o construtor da classe pai (Produto) e adiciona o atributo data de validade.
// verificarValidade(): Verifica se o produto perecível está dentro da data de validade, retornando true se estiver válido e false caso contrário.
// Classe Estoque:
class ProdutoPerecivel extends Produto {
    constructor(Produto, dataValidade) {
        this.dataValidade = dataValidade;
    }

    verificarValidade() {
        if (this.dataValidade.verificarValidade(this)) {
            return true;
        } else {
            return false;
        }
    }

    //this.dataValidade.ProdutoPerecivel.verificarValidade;
}


// Descrição: Representa o estoque de produtos, contendo funcionalidades para adicionar, remover, verificar disponibilidade e calcular o valor total do estoque.
// Métodos:
// Constructor: Inicializa o estoque com uma lista vazia de produtos.
let listaDeProdutosVazia = [];

class Estoque {
    constructor() {
    }

    // adicionarProduto(produto): Adiciona um produto à lista de produtos no estoque.
    adicionarProduto(produto) {
        listaDeProdutosVazia.push(produto);
    }

    // removerProduto(nome): Remove um produto da lista pelo nome.
    removerProduto(nome) {
        for (let i = 0; i < listaDeProdutosVazia; i++) {
            this.listaDeProdutosVazia[i].nome;
            if (this.listaDeProdutosVazia[i].nome == nome) {
                this.listaDeProdutosVazia[i].nome -= listaDeProdutosVazia;
            }
        }
    }

    // verificarEstoqueDisponivel(nome): Verifica e exibe a quantidade disponível de um produto pelo nome.

    verificarEstoqueDisponivel(nome) {
        for (let i = 0; i < quantidade.lenght; i++) {
            if (this.listaDeProdutosVazia == quantidade) {
                this.listaDeProdutosVazia = quantidade[i].nome;
            }
        }
    }

    // calcularValorTotalEstoque(): Calcula e exibe o valor total do estoque somando o valor total de cada produto.

calcularValorTotalEstoque(){
    let valorTotal = 0;
for(let i = 0; i < quantidade.lenght; i++) {
quantidade.nome += quantidade[i].nome;
}
}

}



// Exemplo de Uso:

// Criação do Estoque:
// Instancia um objeto meuEstoque da classe Estoque.

listaDeProdutosVazia = new Produto("camisa", 5, 129);

// Adição de Produtos:
// Adiciona produtos do tipo Produto e ProdutoPerecivel ao estoque.

listaDeProdutosVazia.adicionarProduto(new Produto("bermuda", 3, 129));
listaDeProdutosVazia.adicionarProduto(new ProdutoPerecivel("regata", "2023/05/12"));

// Verificação e Cálculos:
// Realiza operações como verificar a disponibilidade de produtos, calcular o valor total do estoque e remover um produto específico.

listaDeProdutosVazia.verificarEstoqueDisponivel(nome);
listaDeProdutosVazia.calcularValorTotal();
listaDeProdutosVazia.removerProduto(nome);

// Exibição de Resultados:
// Exibe resultados das operações realizadas no estoque.
console.log(listaDeProdutosVazia.verificarEstoqueDisponivel);













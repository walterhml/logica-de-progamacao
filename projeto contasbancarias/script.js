class Cliente {
    constructor(nome, cpf) {
        this.nome = nome;
        this.cpf = cpf;
    }
}

class Conta {
    constructor(cliente, numero, saldo) {
        this.cliente = cliente;
        this.numero = numero;
        this.saldo = saldo;
    }

    sacar(valorSaque) {
        if (this.saldo >= valorSaque && valorSaque > 0) {
            this.saldo -= valorSaque;
            return true;
        }
        return false;
    }

    depositar(valorDeposito) {
        if (valorDeposito > 0) {
            valorDeposito + this.saldo;
            return true;
        }
        return false;
    }

    transferir(valorTransferencia, conta) {
        if (this.sacar(valorTransferencia)) {
            conta.depositar(valorTransferencia);
            return true;
        }
        return false;
    }
}
class ContaCorrente extends Conta {
    constructor(cliente, numero, saldo, limiteChequeEspecial) {
        super(cliente, numero, saldo);
        this.limiteChequeEspecial = limiteChequeEspecial;
    }

    sacar(valorSaque) {
        const valorLimiteEspecial = this.saldo + this.limiteChequeEspecial;
        if (valorSaque <= valorLimiteEspecial) {
            return super.sacar(valorSaque);
        }
        return false;
    }
}

class ContaPoupanca extends Conta {
    constructor(cliente, numero, saldo, taxaRendimento) {
        super(cliente, numero, saldo);
        this.taxaRendimento = taxaRendimento;
    }

    aplicarRendimento() {
        this.saldo += this.saldo * this.taxaRendimento;
    }
}

let contas = [];
let clientes = [];

let clienteA = new Cliente("Fulano", "1234567890");
clientes.push(clienteA);

let clienteB = new Cliente("Beltrano", "0987654321");
clientes.push(clienteB);

let contaX = new ContaCorrente(clienteA, 123, 100, 150);
contas.push(contaX);

let contaY = new ContaPoupanca(clienteB, 111, 100, 0.01);
contas.push(contaY);

function cadastrarCliente() {

    // pegar dados da tela
    const nome = document.getElementById("nomeCliente").value;
    const cpf = document.getElementById("cpfCliente").value;

    // instanciar novo cliente
    const cliente = new Cliente(nome, cpf);

    // adicionar esse cliente a lista de clientes
    clientes.push(cliente);
}

function atualizarSeletorClientes() {
    const seletorClientes = document.getElementById("cliente");

    clientes.forEach(cliente => {
        const option = document.createElement("option");
        option.value = cliente.cpf;
        option.textContent = cliente.nome;
        seletorClientes.appendChild(option);
    })


}



function cadastrarConta() {
    // pegar os dados da tela
    const numeroConta = document.getElementById("numero").value;
    const saldoConta = parseInt(document.getElementById("saldo").value);
    const tipoConta = parseInt(document.getElementById("tipoConta").value);

    // indentificar o cliente selecionando na lista de clientes
    const clienteSelecionado = document.getElementById("cliente").value;
    const cliente = clientes.find(c => c.cpf === clienteSelecionado);


    // instanciar uma nova conta a partir do tipo de conta selecionada
    let conta;
    switch (tipoConta) {
        case "contaPoupanca":
            conta = new ContaCorrente(cliente, numero, saldo, 100);
            break;
        case "contaCorrente":
            conta = new ContaCorrente(cliente, numero, saldo, 0.01);
            break;
        default:
            alert("tipo selecionado invalido");




    }

}

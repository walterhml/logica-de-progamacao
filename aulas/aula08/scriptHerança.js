class Pessoas {
    constructor(nome, idade, peso) {
        this.nome = nome;
        this.peso = peso;
        this.idade = idade;
    }

    andar() {
        console.log(nome + ' andou');
    }

    falar() {
        console.log(nome + ' falou');
    }
}

class Paciente extends Pessoas {
    constructor(sintoma, numeroAtendimento) {
        super(nome, idade, peso);
        this.sintoma = sintoma;
        this.numeroAtendimento = numeroAtendimento;
        this.altura = altura;
    }
}

class Medico extends Pessoas {
    constructor(especialidade) {
        super(nome, idade, peso);
        this.especialidade = especialidade;
    }
}










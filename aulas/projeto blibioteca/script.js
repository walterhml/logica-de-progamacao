class MaterialBibliografico {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
        this.disponivel = true;
    }
    realizarEmprestimo() {
        if (this.disponivel) {
            this.disponivel = false;
            return true; //Emprestimo realizado com sucesso
        } else {
            return false; //Material já emprestado
        }
    }

    realizarDevolucao() {
        if (this.disponivel === false) {
            this.disponivel = true;
            return true;
        } else {
            return false;
        }
    }
}

class Livro extends MaterialBibliografico {
    constructor(titulo, autor, genero) {
        super(titulo, autor);
        this.genero = genero;
    }
}

class Revista extends MaterialBibliografico {
    constructor(titulo, autor, genero, categoria) {
        super(titulo, autor);
        this.categoria = categoria;
    }
}
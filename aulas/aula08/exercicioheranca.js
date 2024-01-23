class Animal {
    constructor(nasce, cresce, reproduz, morre) {
        // nasce cresce reproduz e morre
        this.nasce = nasce;
        this.cresce = cresce;
        this.reproduz = reproduz;
        this.morre = morre;
    }
}

class Mamifero extends Animal {
    constructor(amamentar, carne) {
        super(nasce, cresce, reproduz, morre)
        //amarmentar
        this.carne = carne;
        this.amamentar = amamentar;
        //1 especifica
    }
} 0

class reptil extends Animal {
    constructor(poeOvos, asas) {
        //poe ovos
        super(nasce, cresce, reproduz, morre)
        this.poeOvos = poeOvos;
        this.asas = asas;
        //especifica
    }
}
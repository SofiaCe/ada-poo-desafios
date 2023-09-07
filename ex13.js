class Animal {
    constructor(nome, som, onomatopeia) {
        this.nome = nome;
        this.som = som;
        this.onomatopeia = onomatopeia;
    }
    sobre() {
        return `O animal ${this.nome} faz o som de ${this.som} e sua onomatopeia é ${this.onomatopeia}`
    }
}

class Vaca extends Animal {
    constructor(nome, som, onomatopeia) {
        super(nome = 'vaca', som = 'mugir', onomatopeia = 'muuuu')
    }
    sobre() {
        return super.sobre()
    }
}

class Cavalo extends Animal {
    constructor(nome, som, onomatopeia) {
        super(nome = 'cavalo', som = 'relinchar', onomatopeia = 'iiirrrrí')
    }
    sobre() {
        return super.sobre()
    }
}

class Ovelha extends Animal {
    constructor(nome, som, onomatopeia) {
        super(nome = 'ovelha', som = 'berrar', onomatopeia = 'méééé')
    }
    sobre() {
        return super.sobre()
    }
}

// let ovelha1 = new Ovelha()
// console.log(ovelha1.sobre())
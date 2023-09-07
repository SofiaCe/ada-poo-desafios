class Cargo {
    constructor(nome, salario) {
        this.nome = nome
        this.salario = salario
    }
}

class Trabalhador {
    constructor(nome, cargo) {
        if(!(cargo instanceof Cargo)) {
            throw new Error('O cargo precisa ser instância da classe Cargo.')
        }
        this.nome = nome
        this.cargo = cargo
    }
}

class Empresa {
    constructor() {
        this.trabalhadores = []
    }
    contratar(trabalhador) {
        if(!(trabalhador instanceof Trabalhador)) {
            throw new Error('O trabalhador precisa ser instância da classe Trabalhador.')
        }
        this.trabalhadores.push(trabalhador)
    }
    listarFuncionarios() {
        return this.trabalhadores
    }
}

// const cargo1 = new Cargo("Programador Javascript jr", 8000)
// const trabalhador1 = new Trabalhador("Mark", cargo1)
// const trabalhador2 = new Trabalhador("Jeff", cargo1)
// const empresa = new Empresa()
class Pessoa {
    constructor(nome, idade) {
        if(typeof nome !== 'string' || typeof idade !== 'number') {
            throw new Error('Informações inválidas.')
        }
        this.nome = nome;
        this.idade = idade;
    }
}

class Cidadao extends Pessoa {
    constructor(nome, idade, cpf, rg) {
        super(nome, idade);
        this.cpf = cpf;
        this.rg = rg;
    }
}

const p = new Pessoa('Maria', 29)
const c = new Cidadao('Sara', 18, '12345678900', '1234567')

console.log(p)
console.log(c)
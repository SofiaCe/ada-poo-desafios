class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    nomeCompleto() {
        return this.nome + ' ' + this.sobrenome
        // Outra opção: return `${this.nome} ${this.sobrenome}`
    }
}

// const pessoinha = new Pessoa('Michelli', 'Petri')
// console.log(pessoinha.nomeCompleto())
class Animal {
    constructor(nome) {
        if(typeof nome !== 'string') {
            throw new Error('Nome inválido.')
        }
        this.nome = nome
    }
    corre(velocidade) {
        return this.velocidade = velocidade
    }
    pare() {
        return this.velocidade = 0
    }
    status() {
        if(this.velocidade > 0) {
            return `${this.nome} corre com velocidade ${this.velocidade}.`
        } else {
            return `${this.nome} está parado.`
        }
    }
}

// const coiote = new Animal('coiote')
// coiote.corre(8)
// coiote.pare()
// console.log(coiote)
// console.log(coiote.status())
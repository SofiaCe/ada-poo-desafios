class Roupa {
    constructor(tamanho, cor = undefined) {

        if(tamanho !== 'pp' && tamanho !== 'p' && tamanho !== 'm' && tamanho !== 'g' && tamanho !== 'gg' && tamanho !== 'exg') {
            throw new Error('Tamanho inválido.')
        }

        this.tamanho = tamanho
        this.cor = cor
    }
    sobre() {
        if(this.cor == undefined) {
            return `Roupa tamanho ${this.tamanho}.`
        } else {
            return `Roupa tamanho ${this.tamanho} de cor ${this.cor}.`
        }
    }
}

const camiseta = new Roupa('pp')
console.log(camiseta.sobre())

const vestido = new Roupa('m', 'azul')
console.log(vestido.sobre())
class Animal {
    constructor(nome, velocidade) {
        if(typeof velocidade == 'Number') {
            throw new Error('Velocidade precisa ser um número.')
        }
        this.nome = nome
        this.velocidade = velocidade
    }
}

class Corrida {
    constructor(...animais) {
        this.animais = animais
        const find = this.animais.find(animal => !(animal instanceof Animal))
        if(find !== undefined) {
            throw new Error('Todos os animais precisam ser instâncias da classe Animal.')
        } else {
            this.participantes = this.animais
        }
    }

    resultado() {
        this.participantes.sort((a, b) => a.velocidade - b.velocidade)
        this.participantes.reverse()
        this.finalistas = []
        for (let i = 0; i < 3; i++) {
            this.finalistas.push(this.participantes[i].nome)
        }
        return this.finalistas
    }
}

const coelho = new Animal("Coelho", 5);
const cavalo = new Animal("Cavalo", 15);
const cheetah = new Animal("Cheetah", 25);
const onca = new Animal("Onça", 12);
const cachorro = new Animal("cachorro", 9);

const corrida = new Corrida(coelho, cheetah, cavalo, onca, cachorro);
console.log(corrida.participantes)
console.log(corrida.resultado())
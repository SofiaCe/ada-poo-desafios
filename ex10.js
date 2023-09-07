class Animal {
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

class Coelho extends Animal {
    constructor() {
      super();
      this.nome = "Coelho";
    }
} 

const coelho = new Coelho()
coelho.corre(5)
console.log(coelho.status())
coelho.pare()
console.log(coelho.status())
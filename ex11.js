class Extrato {
  constructor() {
    this.rel = []
  }
  transacao(tipo, valor) {
    if(tipo === 'C') {
      this.rel.push({C: valor})
    } else {
      this.rel.push({D: valor}) 
    }
  }
  relatorio() {
    return this.rel
  }
}

class CaixaEletronico extends Extrato {
    saldo = 0;

    depositar(valor) {
      this.saldo += Number(valor);
      this.transacao("C", valor);
      return `R$${valor} foi depositado na conta. Seu saldo é ${this.saldo}.`
    }

    retirar(valor) {
      this.saldo -= Number(valor);
      this.transacao("D", valor);
      return `R$${valor} foi retirado da conta. Seu saldo é ${this.saldo}.`
    }

    extrato() {
      return this.relatorio();
    }
}

// const cx = new CaixaEletronico()
// console.log(cx.depositar(100))
// console.log(cx.depositar(200))
// console.log(cx.retirar(50))
// console.log(cx.saldo)
// console.log(cx.extrato())
class Relatorio {

  static mediaSalarial(lista) {
    let soma = 0
    lista.forEach(e => soma += e.salario)
    return soma / lista.length
  }

  static menorSalario(lista) {
    lista.sort((a, b) => a.salario - b.salario)
    return lista[0]
  }
  
  static maiorSalario(lista) {
    lista.sort((a, b) => a.salario - b.salario)
    return lista[lista.length - 1]
  }
}

class Empresa {
  listaDeEmpregados = [
    {
      nome: "João Silva",
      salario: 1500,
    },
    {
      nome: "Maria José",
      salario: 2500,
    },
    {
      nome: "Simplício Simplório",
      salario: 2400,
    },
    {
      nome: "Mario João",
      salario: 2100,
    },
  ];
  
  mediaSalarial() {
    return Relatorio.mediaSalarial(this.listaDeEmpregados);
  }
  
  menorSalario() {
    return Relatorio.menorSalario(this.listaDeEmpregados);
  }
  maiorSalario() {
    return Relatorio.maiorSalario(this.listaDeEmpregados);
  }
}

const plx = new Empresa()
console.log(plx.mediaSalarial())
console.log(plx.menorSalario())
console.log(plx.maiorSalario())
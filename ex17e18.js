class Escola {
    constructor() {
        this.lista = []
        this.soma = 0
        this.abaixoDaMedia = []
    }

    adicionar(nome, nota) {
        this.lista.push({
            nome: nome,
            nota: nota
        })
    }

    media() {
        this.lista.forEach(aluno => this.soma += aluno.nota)
        return this.soma / this.lista.length
    }

    ranking() {
        this.lista.sort((a, b) => a.nota - b.nota)
        return this.lista.reverse()
    }

    notasBaixas() {
        this.abaixoDaMedia = this.lista.filter(aluno => aluno.nota <= 5)
        return this.abaixoDaMedia
    }
}

const ary = new Escola()
ary.adicionar("João", 10);
ary.adicionar("Maria", 5);
ary.adicionar("Maurício", 7);
ary.adicionar("Alice", 7);

console.log(ary.lista)
console.log(ary.media())
console.log(ary.ranking())
console.log(ary.notasBaixas())
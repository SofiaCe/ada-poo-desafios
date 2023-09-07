class Analisador {

    adicionar(nome, email) {
        this.nome = nome
        this.email = email
    }
    converterParaObjeto() {
        return {
            nome: this.nome,
            email: this.email
        }
    }
}

const analisador = new Analisador()
console.log(analisador.adicionar("João", "joao@email.com"))
console.log(analisador.converterParaObjeto())
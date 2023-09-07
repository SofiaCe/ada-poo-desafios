class Analisador {
    constructor() {
        this.lista = []
    }
    
    mesclar(names, emails) {
        for(let i = 0; i < names.length; i++) {
            this.lista. push({
                email: emails[i],
                name: names[i]
            })
        }
    }

    listarMesclados() {
        return this.lista
    }
}

const names = ["João", "Mário"]
const emails = ["joao@gmail.com", "mario@msn.com"]
const analisador = new Analisador()
console.log(analisador.mesclar(names, emails))
console.log(analisador.listarMesclados())
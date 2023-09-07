

class ListaDeMembros {
    static lista = []
    static adicionar(nome) {
        return ListaDeMembros.lista.push(nome)
    }
    static contar() {
        return ListaDeMembros.lista.length
    }
}

ListaDeMembros.adicionar('Ricardo')
ListaDeMembros.adicionar('Junior')
ListaDeMembros.adicionar('André')
console.log(ListaDeMembros.lista)

console.log(ListaDeMembros.contar())
class Categoria {
    constructor(nome) {
        this.nome = nome
    }
}

class Artigo {
    constructor(titulo) {
        this.titulo = titulo
        this.categoria
    }
    setCategoria(categoria) {
        if(!(categoria instanceof Categoria)) {
            throw new Error('Essa categoria não existe.')
        }
        return this.categoria = categoria
    }
}

// const categoria1 = new Categoria("Javascript")
// const artigo1 = new Artigo("Orientação a Objetos")

// artigo1.setCategoria(categoria1);
// console.log(categoria1.nome)
// console.log(artigo1.categoria.nome)
// console.log(artigo1.titulo)
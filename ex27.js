class Post {
    constructor(titulo, dataPublicacao) {
        if(!(dataPublicacao instanceof Date)) {
            throw new Error('A data de publicação precisa ser uma data.')
        }
        this.titulo = titulo
        this.dataPublicacao = dataPublicacao
    }
}

class Blog {
    constructor() {
        this.posts = []
    }
    publicar(post) {
        if(!(post instanceof Post)) {
            throw new Error('O post precisa ser uma instância da classe Post.')
        }
        this.posts.push(post)
    }
    antigos() {
        this.listaAntigos = []
        this.posts.sort((a, b) => a.dataPublicacao - b.dataPublicacao)
        this.posts.forEach(p => this.listaAntigos.push(p.titulo))
        return this.listaAntigos
    }
    novos() {
        this.listaNovos = []
        this.posts.sort((a, b) => a.dataPublicacao - b.dataPublicacao).reverse()
        this.posts.forEach(p => this.listaNovos.push(p.titulo))
        return this.listaNovos
    }
}

const post1 = new Post("Como aprender mais rápido!", new Date(1988, 11, 24));
const post2 = new Post("Como desaprender mais rápido!", new Date(2006, 1, 4));
const blog = new Blog();

blog.publicar(post1)
blog.publicar(post2)
console.log(blog.antigos())
console.log(blog.novos())
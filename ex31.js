class Estoque {
    constructor() {
        this.produtos = []
    }
    adicionar(nome, quantidade) {
        if(typeof nome !== 'string' || typeof quantidade !== 'number') {
            throw new Error('Nome e/ou quantidade inválidos.')
        }
        const p = this.produtos.find(p => p.nome === nome)
        if(p !== undefined) {
            p.quantidade += quantidade
            return `${quantidade} item(s) adicionado(s).`
        } else {
            this.produtos.push({
                nome: nome,
                quantidade: quantidade
            })
            return 'Produto novo adicionado.'
        }
    }
    remover(nome, quantidade) {
        const p = this.produtos.find(p => p.nome === nome)
        if(p === undefined) {
            return 'Produto não encontrado.'
        } else if(quantidade > p.quantidade) {
            return 'Não há quantidade suficiente para remoção.'
        } else {
            p.quantidade -= quantidade
            return `${quantidade} item(s) removido(s).`
        }
    }
    listar() {
        return this.produtos
    }
}
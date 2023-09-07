class Usuario {
    #senhas
    constructor(senha) {
        this.#senhas = [senha, senha, senha]
    }
    alterarSenha(senha) {
        if(senha === this.#senhas[0] || senha === this.#senhas[1] || senha === this.#senhas[2]) {
            return 'Senha não pode ser igual as três últimas utilizadas.'
        } else {
            this.#senhas.push(senha)
            this.#senhas.shift()
            return 'Senha alterada com sucesso.'
        }
    }
}

// const usuario = new Usuario("senha1")
// console.log(usuario.alterarSenha("senha2"))
// console.log(usuario.alterarSenha("senha2"))
// console.log(usuario.alterarSenha("senha3"))
// console.log(usuario.alterarSenha("senha1"))
// console.log(usuario.alterarSenha("senha4"))
// console.log(usuario.alterarSenha("senha1"))
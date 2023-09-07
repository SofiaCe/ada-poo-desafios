class Usuario {
    #password
    constructor(name, username, password) {
        this.name = name;
        this.username = username;
        this.#password = password
    }
    login(username, password) {
        if(username === this.username && password === this.#password) {
            return 'Login realizado com sucesso'
        } else {
            return 'Falha na autenticação'
        }
    }
}

// const user1 = new Usuario('p1', 'p001', 'senha')
// console.log(user1)
// console.log(user1.login('p001', 'senha'))
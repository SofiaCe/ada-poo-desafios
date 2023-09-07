class Usuario {
    
    #password
    static errors = 0

    constructor(email, password) {
        this.email = email
        this.#password = password
    }

    login(email, password) {
        if(email === this.email && password === this.#password) {
            return 'Login realizado com sucesso'
        } else {
            ++Usuario.errors
            if(Usuario.errors >= 3) {
                return 'Conta bloqueada, contate o suporte'
            } else {
                return 'Falha na autenticação'
            }
        }
    }
}
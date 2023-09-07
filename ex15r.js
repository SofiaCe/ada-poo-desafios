class Newsletter {
    #email
    constructor() {
        this.#email
    }
    signup(email) {
        if(email === this.#email) {
            return 'E-mail já se encontra cadastrado'
        } else {
            this.#email = email
            return 'E-mail cadastrado com sucesso'
        }
    }
}

const cadastro1 = new Newsletter()
console.log(cadastro1.signup('maria@email.com'))
console.log(cadastro1.signup('maria@email.com'))
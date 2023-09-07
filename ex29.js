class Newsletter {
    #email
    static emails = []
    constructor() {
        this.#email
    }
    inscrever(email) {
        if(Newsletter.emails.includes(email)) {
            return 'E-mail já se encontra cadastrado'
        } else {
            this.#email = email
            Newsletter.emails.push(email)
            return 'E-mail cadastrado com sucesso'
        }
    }
    cancelar(email) {
        const i = Newsletter.emails.indexOf(email)
        Newsletter.emails.splice(i, 1)
        return 'E-mail removido'
    }
}

// const js = new Newsletter();
// console.log(js.inscrever("javascripto@js.com"))
// console.log(Newsletter.emails)
// console.log(js.inscrever("javascripto@js.com"))
// console.log(js.cancelar("javascripto@js.com"))
// console.log(Newsletter.emails)
// console.log(js.inscrever("javascripto@js.com"))
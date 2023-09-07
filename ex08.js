class Pessoa {
    static saudacao() {
        return 'Olá pessoa!'
    }
}

class Trabalhador extends Pessoa {
    static saudacao() {
        return super.saudacao().replace('pessoa', 'trabalhador')
    }
}

class Aluno extends Pessoa {
    static saudacao() {
        return super.saudacao().replace('pessoa', 'aluno')
    }
}

// console.log(Aluno.saudacao())
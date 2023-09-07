class Aluno {
    nome;
    constructor(nome) {
      this.nome = nome;
    }
}
  
class Professor {
    nome;
    constructor(nome) {
      this.nome = nome;
    }
}
  
class Escola {
    pessoas = [];
  
    add(pessoa) {
      this.pessoas.push(pessoa);
    }
  
    listarProfessores() {
      return UtilsFiltrar.porTipoDeClasse(this.pessoas, Professor);
    }
  
    listarAlunos() {
      return UtilsFiltrar.porTipoDeClasse(this.pessoas, Aluno);
    }
}

class UtilsFiltrar {
    static porTipoDeClasse(lista, classe) {
        let professores = []
        let alunos = []

        for(let i = 0; i < lista.length; i++) {
            if(lista[i] instanceof Professor) {
                professores.push(lista[i])
            } else if(lista[i] instanceof Aluno) {
                alunos.push(lista[i])
            } else {
                throw new Error('Algo deu errado.')
            }
        }

        if(classe === Professor) {
            return professores
        } else if(classe === Aluno) {
            return alunos
        } else {
            throw new Error('Algo deu errado.')
        }
    }
}

const escola = new Escola();
escola.add(new Professor("João Prof"));
escola.add(new Professor("Maria Profa"));
escola.add(new Aluno("João"));
escola.add(new Aluno("Maria"));

console.log(escola.listarProfessores());
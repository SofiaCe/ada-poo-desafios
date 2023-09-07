class Imposto {
    
    consultarPorcentagem(salario) {
        if(salario > -1 && salario <= 1903.98) {
            return 0
        } else if(salario > 1903.98 && salario <= 2826.65) {
            return 7.5
        } else if(salario > 2826.65 && salario <= 3751.05) {
            return 15
        } else if(salario > 3751.05 && salario <= 4664.68) {
            return 22.5
        } else if(salario > 4664.68) {
            return 27.5
        } else {
            return 'Salário inválido.'
        }
    }
}
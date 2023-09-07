class Triangulo {
    constructor(lado1, lado2, lado3) {
        if(typeof lado1 !== 'number' || typeof lado2 !== 'number' || typeof lado3 !== 'number') {
            throw new Error('Os lados do triângulo precisam ser números.')
        }
        this.lado1 = lado1;
        this.lado2 = lado2;
        this.lado3 = lado3;
    }
    tipo() {
        if(this.lado1 + this.lado2 > this.lado3 && this.lado1 + this.lado3 > this.lado2 && this.lado2 + this.lado3 > this.lado1) {
            if(this.lado1 !== this.lado2 && this.lado1 !== this.lado3 && this.lado2 !== this.lado3) {
                return 'O triângulo é escaleno.'
            } 
            else if(this.lado1 == this.lado2 && this.lado1 == this.lado3) {
                return 'O triângulo é equilátero.'
            }
            else {
                return 'O triângulo é isósceles.'
            }
        }
        else {
            return 'O triângulo é inválido.'
        }
    }
}

// const trianguloTeste = new Triangulo(2,2,3)
// console.log(trianguloTeste.tipo())
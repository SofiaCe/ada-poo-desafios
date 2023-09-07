class Pessoa {
    constructor(name, age) {
        if(typeof name !== 'string' || typeof age !== 'number') {
            throw new Error('Informações inváidas.')
        }
        this.name = name;
        this.age = age;
    }
    sobre() {
        return `${this.name} tem ${this.age} anos.`
    }
}

// const person = new Pessoa('Marcos', 17)
// console.log(person.sobre())
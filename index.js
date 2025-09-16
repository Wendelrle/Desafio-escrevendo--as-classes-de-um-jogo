class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    atacar(){
        if (this.tipo === "guerreiro") {
            console.log(`${this.nome} atacou com uma espada!`);
        } else if (this.tipo === "mago") {
            console.log(`${this.nome} lançou um feitiço!`);
        } else {
            console.log(`${this.nome} não pode atacar!`);
        }
    }
}

let Heroi1 = new Heroi("wendel", 15, "guerreiro");
console.log(`Nome: ${Heroi1.nome}, Idade: ${Heroi1.idade}, Tipo: ${Heroi1.tipo}`);

Heroi1.atacar();
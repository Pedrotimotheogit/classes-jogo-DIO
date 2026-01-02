const tipoHeroi = {
    espadachim: "espadachim",
    mago: "mago",
    arqueiro: "arqueiro",
    paladino: "paladino"
}

class Heroi {
    constructor(nome = "Herói", idade = 18, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.ataque = this.tipoAtaque();
        
    }
    tipoAtaque() {
        switch (this.tipo) {
            case tipoHeroi.espadachim:
                return "espada";
            case tipoHeroi.mago:
                return "magia";
            case tipoHeroi.arqueiro:
                return "arco e flecha";
            case tipoHeroi.paladino:
                return "espada e escudo";
            default:
                return "ataque desconhecido";
        }
    }
    atacar() {
        console.log(`O ${this.tipo} atacou usando ${this.ataque}`);
    }
}

let heroi1 = new Heroi("Aragorn", 87, tipoHeroi.mago).atacar();
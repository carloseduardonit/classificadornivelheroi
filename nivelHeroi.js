class Heroi {
    constructor() {
        this.nome = "";
        this.XP = 0;
        this.nivel = "n/a";
        this.saldoVitorias = 0;
        this.saldoDerrotas = 0;
        this.nivelVitoria = "";
        this.idade = 0;
        this.tipoGuerreiro = "";
        this.ataque = "";
    }

    classificar(herois, classificacoes, vitorias, tiposAtaques) {
        for (const heroi of herois) {
            this.nome = heroi.nome;
            this.XP = heroi.XP;
            this.saldoVitorias = heroi.vitoria;
            this.tipoGuerreiro = heroi.tipoGuerreiro;
            this.saldoDerrotas = heroi.derrota
            this.classificarHeroi(classificacoes)
            this.classificarVitorias(vitorias)
            this.classificarAtaque(tiposAtaques)
            console.log("")
        }
    }

    /**
     * Entrega do Desafio 1
     * @param {} classificacoes 
     */
    classificarHeroi(classificacoes) {
        for (const classificacao of classificacoes) {
            let inicio = classificacao.inicio;
            let fim = classificacao.fim;
            if (this.XP >= inicio && this.XP <= fim) {
                this.nivel = classificacao.nivel;
                break;
            }
        }
        console.log(`O Herói de nome ${this.nome} está no nível de ${this.nivel}`);
    }

    /**
     * Entrega do Desafio 2
     * @param {} vitorias 
     */
    classificarVitorias(vitorias) {
        this.saldoVitorias = this.calcularVitoria(this.saldoVitorias, this.saldoDerrotas)
        for (const vitoria of vitorias) {
            let inicio = vitoria.inicio
            let fim = vitoria.fim
            if (this.saldoVitorias >= inicio && this.saldoVitorias <= fim) {
                this.nivelVitoria = vitoria.nivel
                break
            }
        }
        console.log(`Herói tem de saldo de ${this.saldoVitorias} está no nível de ${this.nivelVitoria}`);
    }

    calcularVitoria(vitoria, derrota) {
       let resultado = vitoria - derrota
        if (resultado < 0) {
            return 0;
        }
        return resultado;
    }

    /**
     *Entrega do Desafio 3 
     * @param {*} tiposAtaques 
     */
    classificarAtaque(tiposAtaques) {
        for (const tipoAtaque of tiposAtaques) {
            this.tipo = tipoAtaque.tipo
            if (this.tipoGuerreiro == this.tipo) {
                this.ataque = tipoAtaque.ataque;
                break;
            }
        }
        console.log(`o ${this.tipo} atacou usando ${this.ataque}`)

    }
}

// Lista de classificações
let classificacao = [
    { inicio: 0, fim: 1000, nivel: 'Ferro' },
    { inicio: 1001, fim: 2000, nivel: 'Bronze' },
    { inicio: 2001, fim: 5000, nivel: 'Prata' },
    { inicio: 5001, fim: 7000, nivel: 'Ouro' },
    { inicio: 7001, fim: 8000, nivel: 'Platina' },
    { inicio: 8001, fim: 9000, nivel: 'Ascendente' },
    { inicio: 9001, fim: 10000, nivel: 'Imortal' },
    { inicio: 10001, fim: 1000000, nivel: 'Radiante' }
];

// Lista de Ataque
let tiposAtaques = [
    { tipo: 'Mago', ataque: 'Magia' },
    { tipo: 'Guerreiro', ataque: 'Espada' },
    { tipo: 'Moge', ataque: 'Arte Marciais' },
    { tipo: 'Ninja', ataque: 'Shurikne' }
];

// Lista de heróis
let falange = [
    { nome: 'Heroi 1', XP: 990, vitoria: 9, derrota: 10, idade: 20, tipoGuerreiro: 'Mago' },
    { nome: 'Heroi 2', XP: 1990, vitoria: 19, derrota: 1, idade: 20, tipoGuerreiro: 'Guerreiro' },
    { nome: 'Heroi 3', XP: 4990, vitoria: 29, derrota: 1, idade: 20, tipoGuerreiro: 'Moge' },
    { nome: 'Heroi 4', XP: 6990, vitoria: 39, derrota: 1, idade: 20, tipoGuerreiro: 'Ninja' },
    { nome: 'Heroi 5', XP: 7990, vitoria: 49, derrota: 1, idade: 20, tipoGuerreiro: 'Mago' },
    { nome: 'Heroi 6', XP: 8990, vitoria: 69, derrota: 1, idade: 20, tipoGuerreiro: 'Guerreiro' },
    { nome: 'Heroi 7', XP: 9990, vitoria: 99, derrota: 1, idade: 20, tipoGuerreiro: 'Moge' },
    { nome: 'Heroi 8', XP: 10990, vitoria: 109, derrota: 1, idade: 20, tipoGuerreiro: 'Ninja' }
];

// Lista  de tipo de ranque por vitoria
let vitorias = [
    { inicio: 0, fim: 10, nivel: 'Ferro' },
    { inicio: 11, fim: 20, nivel: 'Bronze' },
    { inicio: 21, fim: 50, nivel: 'Prata' },
    { inicio: 51, fim: 80, nivel: 'Ouro' },
    { inicio: 81, fim: 90, nivel: 'Diamante' },
    { inicio: 91, fim: 100, nivel: 'Lendário' },
    { inicio: 101, fim: 1000, nivel: 'Imortal' }
];

let heroi = new Heroi();
heroi.classificar(falange, classificacao, vitorias, tiposAtaques);

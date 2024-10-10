class Heroi {



    constructor() {
        this.nome = "";
        this.XP = 0;
        this.nivel = "n/a";
        this.saldoVitorias = 0;
        this.nivelVitoria ="";
    }

    classificar(herois, classificacoes, vitorias) {
        for (const heroi of herois) {
            this.nome = heroi.nome;
            this.XP = heroi.XP;
            this.saldoVitorias = heroi.vitoria;
            this.classificarHeroi(classificacoes)
            this.classificarVitorias(vitorias)
            console.log("\n")
        }
    }
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

    classificarVitorias(vitorias) {
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

// Lista de heróis
let falange = [
    { nome: 'Heroi 1', XP: 990, vitoria: 9 },
    { nome: 'Heroi 2', XP: 1990, vitoria: 19 },
    { nome: 'Heroi 3', XP: 4990, vitoria: 29 },
    { nome: 'Heroi 4', XP: 6990, vitoria: 39 },
    { nome: 'Heroi 5', XP: 7990, vitoria: 49 },
    { nome: 'Heroi 6', XP: 8990, vitoria: 69 },
    { nome: 'Heroi 7', XP: 9990, vitoria: 99 },
    { nome: 'Heroi 8', XP: 10990, vitoria: 109 }
];

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
heroi.classificar(falange, classificacao, vitorias);

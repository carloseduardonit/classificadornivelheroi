class Heroi {
    constructor() { }

    classificar(herois, classificacoes) {
        for (const heroi of herois) {
            let nome = heroi.nome;
            let XP = heroi.XP;
            let nivel = "n/a";

            for (const classificacao of classificacoes) {
                let inicio = classificacao.inicio;
                let fim = classificacao.fim;
                if (XP >= inicio && XP <= fim) {
                    nivel = classificacao.nivel;
                    break;
                }
            }
            console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
        }
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
    { nome: 'Heroi 1', XP: 990 },
    { nome: 'Heroi 2', XP: 1990 },
    { nome: 'Heroi 3', XP: 4990 },
    { nome: 'Heroi 4', XP: 6990 },
    { nome: 'Heroi 5', XP: 7990 },
    { nome: 'Heroi 6', XP: 8990 },
    { nome: 'Heroi 7', XP: 9990 },
    { nome: 'Heroi 8', XP: 10990 }
];

let heroi = new Heroi();
heroi.classificar(falange, classificacao);

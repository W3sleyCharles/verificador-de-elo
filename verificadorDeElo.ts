var nome = 'Art'
var vitorias = 67; // Queria ter usado input nessas partes mas teria que usar html e quero treinar TypeScript
var derrotas = 34;

function calculadorDeElo(vitorias, derrotas) {
    let pdl = vitorias - derrotas;
    return pdl
}

if (calculadorDeElo(vitorias, derrotas) < 10) {
    console.log (nome +' tem ' + vitorias + ' vitórias e está no elo Ferro')
} else if (calculadorDeElo(vitorias, derrotas) > 11 && calculadorDeElo(vitorias, derrotas) < 20) {
    console.log (nome +' tem ' + vitorias + ' vitórias e está no elo Bronze')
} else if (calculadorDeElo(vitorias, derrotas) > 21 && calculadorDeElo(vitorias, derrotas) < 50) {
    console.log (nome +' tem ' + vitorias + ' vitórias e está no elo Prata')
} else if (calculadorDeElo(vitorias, derrotas) > 51 && calculadorDeElo(vitorias, derrotas) < 80) {
    console.log (nome +' tem ' + vitorias + ' vitórias e está no elo Ouro')
} else if (calculadorDeElo(vitorias, derrotas) > 81 && calculadorDeElo(vitorias, derrotas) < 90) {
    console.log (nome +' tem ' + vitorias + ' vitórias e está no elo Diamante')
} else if (calculadorDeElo(vitorias, derrotas) > 91 && calculadorDeElo(vitorias, derrotas) < 100) {
    console.log (nome +' tem ' + vitorias + ' vitórias e está no elo Lendário')
} else if (calculadorDeElo(vitorias, derrotas) > 101) {
    console.log (nome +' tem ' + vitorias + ' vitórias e está no elo Imortal')
}
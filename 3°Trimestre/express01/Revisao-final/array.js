// É uma estrutura de dados para valores sequenciais
// Inicia com índice ZERO - até o INFINITO

const esportes = ['boxe', 'jiu-jitsu', 'vôlei', 'karatê']
         //          0        1           2        3
esportes [3] // karatê
esportes [999] // undefined
// loop para pegar todos os valores
for (const esporte of esportes) {
    console.log(esporte)
}
// Dados de faturamento diário em formato JSON
const faturamentoDiario = [
    { dia: 1, valor: 100 },
    { dia: 2, valor: 200 },
    { dia: 3, valor: 0 }, // Dia sem faturamento
    { dia: 4, valor: 300 },
    { dia: 5, valor: 400 },
    { dia: 6, valor: 0 }, // Dia sem faturamento
    { dia: 7, valor: 500 },
    { dia: 8, valor: 600 },
    { dia: 9, valor: 700 },
    { dia: 10, valor: 800 },
    { dia: 11, valor: 0 }, // Dia sem faturamento
    { dia: 12, valor: 900 },
    { dia: 13, valor: 1000 },
    { dia: 14, valor: 0 }, // Dia sem faturamento
    { dia: 15, valor: 1100 },
];

// Função para calcular o menor e o maior faturamento, e contar dias acima da média
function calcularFaturamento(faturamento) {
    let menorFaturamento = Infinity;
    let maiorFaturamento = -Infinity;
    let somaFaturamento = 0;
    let diasComFaturamento = 0;

    // Percorre o vetor de faturamento
    for (const dia of faturamento) {
        const valor = dia.valor;
        
        // Ignora dias sem faturamento
        if (valor > 0) {
            // Atualiza menor e maior faturamento
            if (valor < menorFaturamento) {
                menorFaturamento = valor;
            }
            if (valor > maiorFaturamento) {
                maiorFaturamento = valor;
            }
            // Soma para calcular a média
            somaFaturamento += valor;
            diasComFaturamento++;
        }
    }

    // Calcula a média, evitando divisão por zero
    const mediaFaturamento = somaFaturamento / diasComFaturamento;

    // Conta os dias com faturamento acima da média
    let diasAcimaDaMedia = 0;
    for (const dia of faturamento) {
        if (dia.valor > mediaFaturamento) {
            diasAcimaDaMedia++;
        }
    }

    return {
        menorFaturamento,
        maiorFaturamento,
        mediaFaturamento,
        diasAcimaDaMedia,
    };
}

// Executa a função e armazena os resultados
const resultados = calcularFaturamento(faturamentoDiario);

// Exibe os resultados
console.log(`Menor faturamento: ${resultados.menorFaturamento}`);
console.log(`Maior faturamento: ${resultados.maiorFaturamento}`);
console.log(`Média de faturamento: ${resultados.mediaFaturamento.toFixed(2)}`);
console.log(`Dias acima da média: ${resultados.diasAcimaDaMedia}`);

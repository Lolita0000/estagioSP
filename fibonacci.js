// Função para verificar se um número pertence à sequência de Fibonacci
function pertenceFibonacci(numero) {
    // Verificando se o número é 0 ou 1, que pertencem à sequência por definição
    if (numero === 0 || numero === 1) {
        console.log("DEBUG: O número é 0 ou 1, pertence à sequência.");
        return true;
    }

    let a = 0; // Primeiro número da sequência
    let b = 1; // Segundo número da sequência
    let proximo = a + b; // Próximo número da sequência
    
    // Exibindo o estado inicial
    console.log(`DEBUG: Iniciando a sequência: a = ${a}, b = ${b}, próximo = ${proximo}`);

    // Loop para calcular a sequência de Fibonacci até que ultrapasse o número informado
    while (proximo <= numero) {
        console.log(`DEBUG: Verificando número ${proximo}`);
        if (proximo === numero) {
            console.log(`DEBUG: O número ${numero} foi encontrado na sequência.`);
            return true;
        }

        // Atualizando os valores para o próximo número na sequência
        a = b;
        b = proximo;
        proximo = a + b;

        // Exibindo os novos valores a cada passo
        console.log(`DEBUG: Próximo número da sequência: a = ${a}, b = ${b}, próximo = ${proximo}`);
    }

    // Se o número não for encontrado na sequência
    console.log(`DEBUG: O número ${numero} não pertence à sequência.`);
    return false;
}

// Função principal para capturar o input do usuário ou usar um número pré-definido
function main() {
    // Aqui você pode definir um número fixo ou pedir ao usuário para inserir
    const numero = parseInt(prompt("Informe um número para verificar se pertence à sequência de Fibonacci: "), 10);

    // Verifica se o número pertence à sequência
    if (pertenceFibonacci(numero)) {
        console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
    }
}

// Chamando a função principal
main();

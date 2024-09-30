public class DebugSoma {
    public static void main(String[] args) {
        int INDICE = 13;  // O limite do loop
        int SOMA = 0;     // Variável que vai acumular o resultado
        int K = 0;        // Contador que será incrementado

        // Loop que será executado enquanto K for menor que INDICE
        while (K < INDICE) {
            K = K + 1;     // Incrementa o valor de K em 1
            SOMA = SOMA + K; // Soma o valor de K à variável soma

            // Mostrando o valor atual de K e soma em cada iteração
            System.out.println("K = " + K + ", SOMA = " + SOMA);
        }

        // Exibe o valor final de soma após terminar do loop
        System.out.println("Valor final de SOMA: " + SOMA);
    }
}
// O valor vai sendo somado gradualmente até alcançar o resultado final de 91.
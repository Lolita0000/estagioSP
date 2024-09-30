# Função para inverter uma string
def inverter_string(s):
    string_invertida = ""
    
    # Percorre a string de trás para frente
    for i in range(len(s) - 1, -1, -1):
        string_invertida += s[i]  # Adiciona o caractere ao resultado

    return string_invertida

# Solicita ao usuário que insira uma string ou define uma previamente
string_original = input("Digite uma string para inverter (ou pressione Enter para usar a string padrão): ") or "Exemplo de string"

# Inverte a string
string_invertida = inverter_string(string_original)

# Exibe o resultado
print("String original:", string_original)
print("String invertida:", string_invertida)

# Faturamento mensal detalhado por estado
faturamento_por_estado = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
}

# Função para calcular o percentual de cada estado
def calcular_percentuais(faturamento):
    # Calcula o faturamento total
    total_faturamento = sum(faturamento.values())
    
    # Dicionário para armazenar os percentuais
    percentuais = {}

    # Calcula o percentual para cada estado
    for estado, valor in faturamento.items():
        percentuais[estado] = f"{(valor / total_faturamento) * 100:.2f}%"

    return percentuais

# Executa a função e armazena os resultados
resultados_percentuais = calcular_percentuais(faturamento_por_estado)

# Exibe os resultados
print("Percentual de representação por estado:")
for estado, percentual in resultados_percentuais.items():
    print(f"{estado}: {percentual}")

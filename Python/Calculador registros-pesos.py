registros = 0
contador = 0
print("Registros en el Dia")
    
while True:
    # Código que se ejecutará al menos una vez
    respuesta = int(input("Ingresa el numero: "))
    if respuesta == 404:
        break
    registros= registros + respuesta
    valor = registros*110
    valor_colombiano = "${:,.0f}".format(valor)
    print ( f"llevas {valor_colombiano} pesos en registros")

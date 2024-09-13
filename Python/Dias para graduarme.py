import datetime

# Obtener la fecha actual y la fecha de graduación
fecha_actual = datetime.date.today()
fecha_graduacion = datetime.date(2025, 12, 2)

# Calcular la diferencia entre las fechas en días
diferencia = fecha_graduacion - fecha_actual

# Imprimir la cantidad de días restantes
print("Dias restantes para la graduacion:", diferencia.days)

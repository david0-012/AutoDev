def encriptar (contraseña, salto):
    encripatdo = ""
    for i in contraseña:
        #chr() convierte un número en un caracter ASCCI
        #ord() convierte un caracter en un número ASCII
        encripatdo += chr(ord(i) + salto) 
    return encripatdo

print(encriptar("Cura24*", 3)) #Fxud57-
        
def desencriptar (contraseña, salto):
    desencriptado = ""
    for i in contraseña:
        desencriptado += chr(ord(i) - salto) 
    return desencriptado        
        
print(desencriptar("Fxud57-", 3)) #Cura24*     
        
        
        
        
        
        
        

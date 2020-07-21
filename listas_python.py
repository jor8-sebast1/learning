chars = ['jimmy', 'saul', 'mike', 'gus', 'kim', 'nacho']
print(type(chars))
#una buena practica es, al trabajar con arrays/lists, incluir elementos de un solo tipo, ya que no todos los lenguajes de programacion son dinamicos como Python. 
chars.append('lalo') #para añadir un nuevo elemento al conjunto
charX = chars[0] #variable = list[position]
charY = chars[7-1]
charZ = chars[-1]
charX2 = chars[-7]
charX3 = chars[7-7]
#el tamaño de la lista es 6 y la posicion de 'nacho' es 5.
#'lalo' no pertenece a la lista
print(charX2)
card = len(chars) #len es la funcion en la que entra un conjunto y sale su cardinalidad (los que contiene + los apendices)
print(chars[card-7])
print('there are ', card, 'elements in the set')


favs = {
    'Broken Bells': 'The Reamains Of Rock and Roll',
    'Steven Wilson': 'Nowhere Now',
    'The Strokes': 'Macchu Picchu'
}  # <-- diccionario
print(type(favs))
    #relacion termino-definicion
print(favs['Broken Bells'])
#podria decirse que en las 'clases' existe la relacion posicion-valor



ytChannels = ('elRubiusOMG', 'Auronplay', 'El Rincon de Giorgio') # <-- tupla: es una lista a la que no se le puede agregar informacion, a diferencia de la 'lista clasica' que si puede.
print(type(ytChannels))

amigos = [["Maria", 25, ["curso 1", "Tarde"]], ["Pedro", 30]]
# Para acceder a la edad y turno del curso de Maria seria asi:
edadMaria = amigos[0][1]
turnoMaria = amigos[0][2][1]
print(edadMaria, turnoMaria) # imprime en pantalla: 25, Tarde

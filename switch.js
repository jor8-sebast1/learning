//El '==' iguala solo el valor (debil), en cambio, el '===' iguala valor+tipo de dato (fuerte). Mientras que el '=' es usado para variables
let dia = 'lunes'
switch(dia) {
       case 'lunes':
        console.log('odio mi vida')
       break
       case 'viernes':
        console.log('mi cuerpo lo sabe, es viernes')
       break
       case 'jueves':
        console.log('feliz jueves')
       break
       default:
        console.log('que dia es? :(')
}
//el switch de alla arriba cumple la misma funcion que esta condicional multiple de aqui abajo
if(dia === 'lunes') {
  console.log('odio mi vida')
} else if(dia === 'viernes') {
  console.log('mi cuerpo lo sabe')
} else if(dia === 'jueves') {
  console.log('feliz juevez!')
} else {
  console.log('que dia es hoy?')
}

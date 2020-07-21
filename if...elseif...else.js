//contexto: alguien solicita un trabajo y un requisito para quedar en la nomina es la edad
let edad = 25
let muyJoven = edad<18
let muyViejo = edad>=65
let edadIdeal = edad==25
let edadAceptable = !muyJoven && !muyViejo && !edadIdeal

if(edadAceptable) {
  console.log('Felicitaciones, su edad esta dentro del rango aceptable.')
} else if(edadIdeal) {
    console.log('Felicitaciones, su edad esta dentro del rango ideal')
  } else if(muyViejo) {
      console.log('Lo sentimos, usted es muy mayor como para estar trabajando.')
    } else {
        console.log('Lo sentimos, usted es demasiado joven para el trabajo.')
      }

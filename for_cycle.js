//este ejemplo es como la sucesion numerica de los terminos de la suma 'de i=1 hasta n=100' de 'i'
let num = 7
let i = 1 // <-- variable 'global'
for(; i<=10; i++) {
  console.log(num + '*' + i + '=' + num*i)
  switch(i) {
    case 2:
    console.log('arriba hay un catorce')
    break
    default:
  }
}
//'i++' significa que, si el termino i-esimo es Ai (a sub i), entonces Ai+1 = Ai+1 (a sub i+1), es decir, la operacion es sumarle 1 al anterior.
//estructura: for(variable; tope; operacion, incremento)
console.log('banana')
console.log(i)

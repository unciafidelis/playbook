



/* Ejemplo 6*: Se enuncia equivocadamente como -> Ejemplo 6: Uso de map para convertir todos los nombres de una lista a mayúsculas
   pues este código realiza Uso de slice para obtener las 3 primeras letras de cada elemento en un arreglo
   por tanto se agregan líneas de código para utilizar propiedad toUpperCase
*/
const countries6 = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
// Ejemplo 6: Uso de Map para convertir todos los nombres de una lista a mayúsculas
const countriesToUpperCase = countries6.map((country) => country.toUpperCase()) //Uso de propiedad toUpperCase para convertir a mayúsculas

console.log("Ejemplo 6: Uso de Map para convertir todos los nombres de una lista a mayúsculas")
console.log(countriesToUpperCase)

const countriesFirstThreeLetters = countries6.map((country) =>
  country.toLowerCase().slice(0, 3) // el método slice obtiene solo la longitud marcada del string
)
console.log("Ejemplo 6*: Uso de slice para obtener las 3 primeras letras de cada elemento en un arreglo")
console.log(countriesFirstThreeLetters)

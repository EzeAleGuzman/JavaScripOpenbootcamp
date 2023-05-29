// creo un objeto con mis datos personales
const obj =     {
    nombre: "ezequiel",
    apellido: "Guzman",
    edad: 34,
    altura : 1.78,
    eresDesarrolador: true
}
// obtenfgo la edad y la paso por consola
console.log(obj.edad);
// creo una lista agregando a mis amigos
const obj2 = [
    {nombre: "Leo", apellido: "Giani", edad: 33, altura : 1.72, eresDesarrolador: false},
    {nombre: "Miguel",apellido: "Garcia",edad: 35,altura : 1.75,eresDesarrolador: false},
    obj
]
// creo una nueva lista y la ordeno de menor a mayor segun su edad
const listaOrdenadaEdad = obj2.sort((a,b) => a.edad - b.edad)

console.log(listaOrdenadaEdad);

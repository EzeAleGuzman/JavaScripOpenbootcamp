// iterar los valores de una lista
const array = ["hola", 1, 2, 3, 90,false, undefined];

// forma antigua (poco eficiente)
for (let i=0; i < array.length;i++)     {
    console.log[i]
}


// forma es6 (mas eficiente) for.Each()
let suma = 0;
const arrayNums= [ 3, 6, 2, 77,2,4,93]
arrayNums.forEach(valor =>  {
    suma+=valor;
    console.log(valor)
})

console.log(suma)

// busqueda de un valor de una lista .find()
// quiero encontarr el 90

const variable = array.find(valor =>  {
    if (valor === 90)   {
        return true
    }
})

console.log(variable);


const listaObjetos = [
 {nombre: "ezequiel", edad: 35 },
 {nombre: "Martin", edad: 40},
 {nombre: "marcos", edad: 50},
 {nombre: "oscar", edad: 22,},
 {nombre: "juan", edad:23,}
]

// const objeto = listaObjetos.find(o =>   {
//     if (o.nombre ==="Martin") {
//         return true
//     }
// })

// forma correcta
const 	{ edad } = listaObjetos.find(o => o.nombre ==="Martin")
console.log(edad)



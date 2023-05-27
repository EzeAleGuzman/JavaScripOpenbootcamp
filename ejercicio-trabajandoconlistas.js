// Creo una variable que contenga una lista de compras
const listaDeCompras = ["Harina", "Fideos", "Galletitas", "Leche", "Dulce de leche"]

// Modifico y agrego "aceite de girasol" con metodo .push
listaDeCompras.push("Aceite de girasol")
console.log(listaDeCompras);

//elimino el ultimo elemento que he agregado
listaDeCompras.pop()
console.log(listaDeCompras);


// creo una lista con objetos y sus propiedades
const pelisFavoritas =  [
    {titulo: "Constantine" , director: "Francis Lawrence" , año: 2005},
    {titulo: "Avengers-EndGame" , director: "Joe Russo, Anthony Russo" , año: 2019},
    {titulo: "Rambo" , director: " Ted Kotcheff" , año: 1982},
    
]

// utilizo el metodo filter para decir que pelicula es posterior a 2010
const pelisPost2010 = pelisFavoritas.filter(valor => valor.año > 2010)
console.log(pelisPost2010);

// utilizo la funcion .map para obtener una lista del nombre de los directores
const directoresPelis = pelisFavoritas.map(valor => valor.director)
console.log(directoresPelis);

// Vuelvo a utilizar el .map para crear una lista con los titulos
const nombreDePelis = pelisFavoritas.map(valor => valor.titulo)
console.log(nombreDePelis);

// concateno la lista de directores y peliculas
const nuevaLista = directoresPelis.concat(nombreDePelis)
console.log(nuevaLista);

// repito lo mismo con el metodo de propagacion
const nuevaListaP = [...directoresPelis,...nombreDePelis]
console.log(nuevaListaP);

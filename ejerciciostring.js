// creo una cadena de texto de nombre
let nombre= "Ezequiel"
// cadena de texto variable apellido        
let apellido = "Guzman"
// concatenando nombre y apellido mas espacio
let estudiante = `${nombre} ${apellido}`;

// convierto todo a mauyuscula
let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);
// convierto todo a minuscula
let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);

// obtengo la cantidad de caracteres contando los espacios
console.log(estudiante.length)

// obtengo la primera letra del nombre
let primeraLetra = nombre.charAt(0);
console.log(primeraLetra);

// obtengo la ultima letra de un string
let ultimaLetra = apellido.charAt(apellido.length-1)
console.log(ultimaLetra);

// elimino los espacios de la variable estudiamnte
let sinEspacios = estudiante.replace(" ","");
console.log(sinEspacios);

// verifico si la variable estudiante contierne a nombre
let contieneNombre = estudiante.includes(nombre);
console.log(contieneNombre);

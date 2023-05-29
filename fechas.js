
// creo una variable con la fecha de hoy y la muestro por consola
const fechaDeHoy = new Date();
console.log(fechaDeHoy)

// creo una variable con mi fecha de nacimiento
const fechaDeNacimiento = new Date(1989, 00, 08)
console.log(fechaDeNacimiento);

// creo una variable comparando la fecha de hoy con mi fecha de nacimiento
const esMAyor = fechaDeHoy.getTime() > fechaDeNacimiento.getTime();
console.log(esMAyor);

// creo una variable con mi dia de nacimiento
const diaNacimiento = fechaDeNacimiento.getDate()
console.log(diaNacimiento);

// creo una variable con mi mes de nacimiento
const mesDeNacimiento = fechaDeNacimiento.getMonth()
console.log(mesDeNacimiento + 1);

// creo una variable con el año de mi nacimiento
const añoDeNacimiento = fechaDeNacimiento.getFullYear()
console.log(añoDeNacimiento);
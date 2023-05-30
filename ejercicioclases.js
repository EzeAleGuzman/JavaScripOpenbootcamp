// creo una clase estudiante con la variable nombre, y asignaturas a la que le dejo por defecto la lista
class Estudiante    {
    constructor(nombre,asignaturas = ["Javascrip","Html", "Css"])     {
        this.nombre=nombre
        this.asignaturas= asignaturas
    }
//     creo el metodo obtenDatos
    obtenDatos()    {
        return (`el estudiante se llama ${this.nombre} y tiene las asignaturas ${this.asignaturas}`)
    }
}
// creo una instancia de estudiante
const estudiante1 = new Estudiante("juan")
// uso el metodo obtenDatos y lo muestro por pantalla
console.log(estudiante1.obtenDatos());

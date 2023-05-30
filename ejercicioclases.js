
class Estudiante    {
    constructor(nombre,asignaturas = ["Javascrip","Html", "Css"])     {
        this.nombre=nombre
        this.asignaturas= asignaturas
    }

    obtenDatos()    {
        return (`el estudiante se llama ${this.nombre} y tiene las asignaturas ${this.asignaturas}`)
    }
}

const estudiante1 = new Estudiante("juan")
console.log(estudiante1.obtenDatos());

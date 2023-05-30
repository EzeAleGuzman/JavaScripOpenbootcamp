// importo el modulo completo de suma y multiplicacion y le asigno mat
import * as mat from './modulos/controller.js'
import chalk from 'chalk';

// utilizo la funcion mat.suma para hacer ambas operaciones y las asigno a una variable
const sum1 = mat.suma(1,2)
const sum2 = mat.suma(4,5)
// hago la multiplicacion de ambas variables
const multi = mat.multiplicacion(sum1,sum2)
// muestro el resultado en la consola en color verde
console.log(chalk.green(multi));

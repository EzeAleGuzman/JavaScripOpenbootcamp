// creo una funcion que siempre devuelva true

function esTrue()   {
    console.log(true);
};

esTrue()

// creo una funcion que despues de 5 seg envie un msj
function funcionAsincrona() {
    new Promise(resolve => setTimeout(resolve, 5000));
    console.log("Hola soy una nueva promesa");
};

funcionAsincrona();

// creo un generador de indices pares
function* generaIndice()    {
    let indice = 0;     {
        while(true) {
        indice++
        if (indice % 2 === 0){
            yield indice
        }
    }
    }}

const ind = generaIndice();

console.log(ind.next().value);
console.log(ind.next().value);

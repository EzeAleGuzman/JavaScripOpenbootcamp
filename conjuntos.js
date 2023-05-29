const array = ["Ezequiel", "Micaela", "Dominic", "Mateo", "Ramon", "Feli", "Sam"]
// creo un set con los nombres de mi familia
const miFamilia = new Set(array)

console.log(miFamilia);
// le agrego un valor repetido y este no se agrega
miFamilia.add("Ezequiel")
console.log(miFamilia);
// agrego Javascrip a el set
miFamilia.add("Javascrip")
console.log(miFamilia);

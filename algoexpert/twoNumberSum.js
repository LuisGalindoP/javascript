//Encontrar un par de numeros dentro del array que sumados resulten en el targetSum
//Regresa un array de dos numeros ejemplo [1,2]
//Si no hay un par posible regresa el array solo

const array = [3, 5, -4, 8, 11, 1, 2, 6];
const targetSum = 7;

//En esta solucion vamos a crear un hash table que es un objeto solo
//El hash table tiene que ser un objeto ejemplo {3:true}, para poder se usado con 
//un if variable in hash

<<<<<<< HEAD
function sumaDosNumeros(array, targetSum) {
    //crear un hash list donde vamos a buscar por el numero adecuado
    let lista = {};
    //crear un for loop para revisar todos los elementos del array
=======
function twoNumberSum(array, targetSum) {
    let nums = {};

>>>>>>> bcfa709b9daa3abdba3ec00919d1faf311841291
    for (i in array) {
        //crear una variable posibleMatch que va a retener el numero que se busca obtener 
        //que en este caso es targetSum - array[i]
        let posibleMatch = targetSum - array[i];
        //revisar si el posible match esta adentro de la hash list lista;
        if (posibleMatch in lista) {
            //si es encontrado return el array i actual y el posibleMatch
            return [array[i], posibleMatch];
        } else {
            //si no es encontrado agrega el valor de index i al hash list object
            lista[array[i]] = true;
        }
    }
    //si no hay un par encontrado regresa la lista sin valors
    return [];
}

console.log(sumaDosNumeros(array, targetSum));

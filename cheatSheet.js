// LOOPS

for (let i = 0; i < 5; i++) {
    // code to do;
}

// Loop to go through an array:

let myArray = ['Jorge', 'Mark', 'Jason'];

myArray.forEach(item => {
    console.log(item);
})

//--------------------------------------------------------------------------------------------------
// DESTRUCTURING: CREATING VARIABLES FROM DATA STRUCTURES LIKE ARRAYS AND OBJECTS:

const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    createdAt: 1543945177623
};
const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];

const { email, username } = person;
const {password: hashedPassword } = person;  //This is a way to change the variable name and get the info from object
const [ firstAnimal, secondAnimal ] = animals;

console.log(email, username);
console.log(firstAnimal, secondAnimal);


// DESTRUCTURING USING Rest / Spread

const animalNames = ['horse', 'dog', 'fish', 'cat', 'bird'];
const [firstName, secondName, ...otherAnimals] = animalNames;

console.log(firstName);
console.log(otherAnimals);

//--------------------------------------------------------------------------------------------------
//ARROW FUNCTIONS
const sayHello = (name) => {            //Example of simple arrow function
    console.log(`Hello ${name}`);
};

const sayHelloToo = name => console.log(`Hello ${name}`); //Single parameter functions don't need () implicit returns

const square = n => n * n; //This function do not require explicit 'return' it returns the result automatically

// longhand notation to return an object
// NOTE: first set of brackets are defining the function body
// and the second set of brackets are to create the object literal
const returnObjLonghand = () => {
    return {
        firstName: 'John',
        lastName: 'Wick'
    }
}

//--------------------------------------------------------------------------------------------------
// TERNARY OPERATOR (SHOR VERSION OF AN 'IF' STATEMENT)

let a = 5;
let b = 9;

console.log(a > b ? 'a es mayor a b' : 'b es mayor que a'); //condition ? if true : if false;
// Do not nest this fuckers use regular if statements for that shit

//--------------------------------------------------------------------------------------------------
// MAP A BETTER WAY TO ITERATE THROUGH ARRAYS, IT MAKES A COPY OF AN ARRAY AND CHANGES IS WITH A FUNCTION

const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
const groceryList = groceries.map( name => console.log(name) );

const values2 = [1, 2, 3, 4, 5];            //Also works with numbers
const cubes = values2.map( val => val**3 );

//--------------------------------------------------------------------------------------------------
// FILTER runs each element using a function and if is true it adds it to the new array.
let myList = ['mamadas', 'cojidas', 'montadas', 'rusas'];
let quiero = myList.filter(rico => rico.includes('m'));


const values = [1, 2, 3, 4, 5];
const evens = values.filter( val => val % 2 === 0 );

//COMBINE FILTER AND MAP

const values = [1, 2, 3, 4, 5];
const oddCubes = values.filter( val => val % 2 !==0 ).map( val => val**3 );











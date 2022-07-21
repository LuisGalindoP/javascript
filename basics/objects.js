const person = {
    name: ['Bob', 'Smith'],
    age: 32,
    //Method inside an object:
    bio() {
        console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf() {
        console.log(`Hi! I'm ${this.name[0]}.`);
    }
};

console.log(person);
console.log(person.name);
console.log(person.name[0]);
person.bio()
person.introduceSelf();

person.name[0] = 'Luis';

console.log(person.name[0]);
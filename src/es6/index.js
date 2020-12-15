function newFunction(name, age, country) {
  var name = name || "oscar";
  var age = age || 32;
  var country = country || "ECU";
  console.log(name, age, country);
}

//Declaración de funciones con es6
function newFunction2(name = "Marlon", age = 26, country = "ECU") {
  console.log(name, age, country);
}

newFunction2();
newFunction2("Jordan", 23, "ECU");

let hello = "Hello";
let world = "World";
let epicPhrase = hello + " " + world;
console.log(epicPhrase);

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

let lorem =
  "Arrecho nunca muere y si muere, muere arrecho \n" + "Ponte 11 varón";
//Concatenar strings con es6
let lorem2 = `otra frase épica que necesitamos
  Ahora es otra frase épica`;

console.log(lorem2);
console.log(lorem);

let person = {
  name: "marlon",
  age: 26,
  country: "ECU",
};

// console.log(person.name, person.age, person.country);

//Declaración de un objeto con es6
let { name, age, country } = person;
console.log(name, age);

let team1 = ["Marlon", "Andrea", "Jordan"];
let team2 = ["Ricardo", "Alejandro", "Pedro"];

//concatenar Arrays con es6
let education = ["David", ...team1, ...team2];

console.log(education);

{
  var globalVar = "Global var";
}

{
  let globalLet = "Global let";
  console.log(globalLet);
}

console.log(globalVar);

const a = "b";
a = "a";
console.log(object);

let name = "marlon";
let age = 26;
obj = { name: name, age: age };

//asignación de parámetros en objetos con es6
obj2 = { name, age };
console.log(obj2);

const names = [
  { name: "Marlon", age: 26 },
  { name: "Jordan", age: 23 },
];

//Forma de declarar una función anónima en es5
let listOfNames = names.map(function (item) {
  console.log(item.name);
});

//Arrow functions en es6

let listOfNames2 = names.map((item) => console.log(item.name));

//Otra forma de declarar una arrow function
const listOfName3 = (name, age, country) => {};

//Forma de declarar una AF cuando devuelve sólo un parámetro
const listOfName4 = (name) => {};
const square = (num) => num * num;

//Promesas con es6

const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve("Todo posi mijin");
    } else {
      reject("Habla bien pelao");
    }
  });
};

helloPromise()
  .then((response) => console.log(response))
  .then(() => console.log("Confirma mijin"))
  .catch((error) => console.log(error));

//Clases y herencia con es6

class calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }
  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}

const calc = new calculator();
console.log(calc.sum(2, 2));

//importar funciones desde otro archivo con import ... from
import { hello } from "./module";
hello();

//generator
function* helloWorld() {
  if (true) {
    yield "Hello, ";
  }
  if (true) {
    yield "World";
  }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

{
  let b = "a";
  b = "b";
}

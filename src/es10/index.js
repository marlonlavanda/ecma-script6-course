//flat() aplana un array
let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

console.log(array.flat(2));

//.flatMap()

let array = [1, 2, 3, 4, 5];
console.log(array.flatMap((value) => [value, value * 2]));

let hello = "       hello world";
//.trimStart() elimina los espacios en blanco
console.log(hello);
console.log(hello.trimStart());

let hello = "hello world    ";
console.log(hello);
console.log(hello.trimEnd());

try {
} catch {
  error;
}

//Object.fromEntries() permite convertir un objeto en una matriz clave/valor con Object.entries()
let entries = [
  ["name", "jimmy"],
  ["age", 32],
];

console.log(Object.fromEntries(entries));

//Objeto symbol
let mySimbol = "My simbol";
let symbol = Symbol(mySimbol);
console.log(symbol.description);

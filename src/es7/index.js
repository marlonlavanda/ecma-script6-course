//El metodo includes() trabajo sobre un Array o estring y permite saber si hay un elemento dentro de este valor

let numbers = [1, 2, 3, 7, 8];

if (numbers.includes(5)) {
  console.log("Sí se encuentra el valor 7");
} else {
  console.log("No se encuentra el valor que deseas");
}

//Como elevar a la potencia de un número

let base = 4;
let exponent = 5;

let result = base ** exponent;
console.log(result);

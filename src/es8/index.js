//Con Object.entries() devuelven los valores de una matriz
const data = {
  frontend: "Oscar",
  backend: "Isabel",
  designer: "Marlon",
};

//Trandformar este objeto en una matriz
const entries = Object.entries(data);
console.log(entries);
//Si queremos saber cuantos elementos posee nuestro arreglo ahora es posible con length
console.log(entries.lenght);

//Object.values() me devuelve los valores de un objeto a un arreglo
const data = {
  frontend: "Oscar",
  backend: "Isabel",
  designer: "Marlon",
};

const values = Object.values(data);
console.log(values);
console.log(values.length);

//Padding nos permite añadir cadenas vacías a string, pudiendo modificar la cadena string como tal. Podría servir del lado del front, para mostrar una structura de elementos

const string = "Habla";
console.log(string.padStart(10, "varon"));
console.log(string.padEnd(10, "varon"));

const obj = {
  name: "Marlon",
};

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    false
      ? setTimeout(() => resolve("Hello World", 3000))
      : reject(new Error("Test error"));
  });
};

const helloAsync = async () => {
  const hello = await helloWorld();
  console.log(hello);
};

helloAsync();

const anotherFunction = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
};

anotherFunction();

const obj = {
  name: "marlon",
  age: 26,
  country: "ECU",
};

let { name, ...all } = obj;
console.log(name, all);

const obj = {
  name: "marlon",
  age: 26,
};

const obj1 = {
  ...obj,
  country: "ECU",
};

console.log(obj1);

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Hello World"), 3000)
      : reject(new Error("Test Error"));
  });
};

//Promise finally
helloWorld()
  .then((response) => console.log(response))
  .catch((error) => console.log(error))
  .finally(() => console.log("finalizado"));

//regex
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec("2015-06-25");
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);

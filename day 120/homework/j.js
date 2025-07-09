const getFullName = (firstName, lastName) => firstName + " " + lastName;
console.log(getFullName("ვატო", "ჯიკაევი")); 



const square = n => n * n;

console.log(square(5));







const numbers = [1, 2, 3, 4, 5];

const [first, , , , last] = numbers;

console.log(first); 
console.log(last); 




const car = { make: 'Toyota', model: 'Camry', year: 2020 };

for (let key in car) {
  console.log(key + ": " + car[key]);
}




const colors = ['red', 'green', 'blue'];

for (let color of colors) {
  console.log(color);
}




const word = "JavaScript";

for (let char of word) {
  console.log(char);
}



function multiply(a, b = 2) {
  return a * b;
}

console.log(multiply(5));    
console.log(multiply(5, 3));


// 1
// const person = { name: "Alice", age: 30, city: "New York" };


// const { name, age } = person;

// console.log(name); 
// console.log(age); 

// 2
const person = { name: "Alice", age: 30, city: "New York" };

const { name: userName, city: userCity } = person;

console.log(userName); 
console.log(userCity); 

// 3

const student = {
  name: "Bob",
  age: 20,
  grades: {
    math: 90,
    science: 85,
    english: 92,
  },
};

const { grades: { math, english } } = student;

console.log(math);    
console.log(english); 

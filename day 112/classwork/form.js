// console.log(Array.from('hello world'));


// let converted = num => number(num)
// console.log(Array.from('123'))

// const heroes = ['Batman', 'Superman','spiderman', 'Ironman', 'Hulk'];
// heroes.sort(a, b => b - a)
// heroes.reverse()
// console.log(heroes);


// const  numbers1 = [2, 4, 6, 8];
// const allEven = numbers1.every(num => num % 2 === 0);
// console.log(allEven);

// const numbers2 = [1, 3, 5, 8];
// const hasEven = numbers2.some(num => num % 2 === 0);
// console.log(hasEven);

// const numbers3 = [1, 2, 3];
// const squared = numbers3.map(num => num * num);
// console.log(squared);


const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);


const names = ['Ana', 'Giorgi', 'Luka', 'Tamar', 'Nino'];
const longNames = names.filter(name => name.length > 5);
console.log(longNames); 


const people = [
  {name : 'Ana', age: 17},
  {name : 'Giorgi', age: 30},
  {name : 'Luka', age: 20},
];

const whocango = people.filter(person => person.age < 18);
log(whocango);
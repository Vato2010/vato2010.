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
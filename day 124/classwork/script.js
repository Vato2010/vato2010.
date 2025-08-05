// ? map 
// let person = {
//     name: "vato",
//     lastname: 'jikaevi',
//     age: 14
// }

// console.log(person);



// ! map constructor

// ! გრძელი ვერსია

// let myMap = new Map();
// myMap.set('name', 'vato');
// myMap.set('lastname', 'jikaevi');
// myMap.set(true , 'current value is true');
// myMap.set('x', 10 )

// console.log(myMap.size);
// // console.log(myMap.clear());

// console.log(myMap);

// console.log(myMap.clear());



// // ! მოკლე ვერსია
// // console.log(myMap);

// console.log(myMap.get(true));
// console.log(myMap.get(name));
// console.log(myMap.get(number));



// for(let key of myMap.keys()){
//     console.log(key);
// }


// for(let[key, value] of myMap.entries()){
//     console.log(key, value);
// }

// myMap.forEach(value, key) => {
//     console.log(key, value);
// }


// let countries = new map({
//     ['Georgia','Tbilisi'],

// })

// for(let [key, value ] of countries.entries()){
//     console.log(`The capital of ${key} is ${value}`);
    
// }

// console.log(countries);



let employees = new Map([
  ["Richard", "Developer"],
  ["Maria", "SEO Specialist"],
  ["Tom", "Product Manager"],
  ["David", "Accountant"],
  ["Sophia", "HR Manager"]
]);

let newName = prompt('enter name of employee');
let newPosition = prompt('enter position of employee');

employees.set(newName, newPosition);

for (let [name, position] of employees) {
  console.log(`${name} : ${position}`);
}

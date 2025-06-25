// let arr = [1,2,3,4,5]
// let [a, b, c, d, e] = arr;
// console.log(a, b, c, d, e); 
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);



//  let person = {
//     name: 'vato',
//     lastname: 'jikaevi'
// }
// let {name, lastname} = person;
// console.log(name); 
// console.log(lastname); 

// let arr2 =[1]
// let [a,b = 10] = arr2
// console.log(a,b);




let nestadarr = [1,2,3,[4,5]];
let [a, b, c, [d, e]] = nestadarr;
console.log(a,b,c,d,e); 

// let person = {
//     name: 'vato',
//     addres:{
//         city: 'tbilisi',
//         street: 'chavchavadze'
//     }
// }
// let {name, addres: {city, street}} = person;
// console.log(name); // vato
// console.log(city); // tbilisi
// console.log(street); // chavchavadze

let obj = {
    name: 'vato',
    age: 20,
    
    
}

let {name: username, age: userage} = obj
console.log(username); 
console.log(userage); 

// let obj2 = {
//     name: 'ami',
//     age: 18
// }

// let {name,age} = obj2;
// console.log(name); // ami
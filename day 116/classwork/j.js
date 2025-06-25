// let username = 'vato';
// let lastname = 'jikaevi'

// let person = {
//     username,
//     lastname,
// }

// console.log(person);
// console.log(person.username);
// console.log(person.lastname);


// const newperson = {
//     name: 'vato',
//     lastname: 'jikaevi',
//     fullname() {
//         return this.name + ' ' + this.lastname;
//     }
// }

// console.log(newperson.fullname());



// // let mod = 'model'
// // let car = {
// //     brand:'bmw',
// //     [mod]: 'x5',
// // }

// // console.log(car);


// let book = 'goal'
// let author = 'vato'
// let info = {
//     book, author,
//     fullinfo(){
//         return this.book + ' written by ' + this.author;
//     }
// }

// console.log(info);
// console.log(info.fullinfo());



//  ძველი ტიპის ობიექტი 
let username = 'vato';
let lastname = 'jikaevi';

let person = {

    username,
    lastname
};

console.log(person);               
console.log(person.username);     
console.log(person.lastname);     

// /გაუმჯობესებული ტიპის ობიექტი 
const newperson = {
    name: 'vato',         
    lastname: 'jikaevi', 

    // გაუმჯობესებული  (function გარეშე)
    fullname() {
        return this.name + ' ' + this.lastname;
    }
};

console.log(newperson.fullname()); // vato jikaevi

/* 

 fullname() — მეთოდი რომელიც აბრუნებს სახელს + გვარს ერთად




this.name და this.lastname გამოიყენება სწორად ობიექტის შიგნიდან წვდომისთვის

 კოდი არის უფრო მოკლე და მარტივად წაკითხვადი

*/

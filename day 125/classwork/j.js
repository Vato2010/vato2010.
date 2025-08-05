// let myset = new Set();
// myset.add(4)
// myset.add(41)

// myset.add(2)

// console.log(myset);


// // console.log(myset.has(4));

// myset.delete(4);
// console.log(myset.has(4));

// myset.clear();
// console.log(myset);
// console.log(myset.size);

// if(myset.size > 0){
//     console.log('Set is not empty');
// }else{
//     console.log('Set is empty');
// }





let fruits = ["ვაშლი", "ბანანი", "სტაფილო", "ვაშლი", "მსხალი", "ბანანი"];
let uniqueFruits = [...new Set(fruits)];
console.log(uniqueFruits);
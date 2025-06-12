let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let found = numbers.find((numbers) => numbers === 5);
console.log(found);

let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let found2 = numbers2.find((numbers) => numbers >>> 5);
console.log(found2);
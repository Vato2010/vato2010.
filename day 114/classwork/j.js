//  FOR EACH METHOD
// let num = [1, 2, 3, 4, 5];
// num.forEach(number => {
//     console.log(number);
    
// })


// let num = [1, 2, 3, 4, 5];
// num.forEach((number, index) => {
//     num[index] = number + 2
//     console.log(num[index]);
//     console.log(num);
    
    
// }   )

// let cars = ['nissan', 'toyota', 'honda', 'mazda' , 'ford'];
// cars.forEach((car, index) => {
//     console.log(`Car: ${car} index: ${index}`);
    
    
// })
// REDUCE METHOD
// let numbers = [1, 2, 3, 4, 5];
// let sum = numbers.reduce((total, number) => total + number, 5)
// console.log(sum); 

// reduce right method
// let numbers = [1, 2, 3, 4, ];
// let sum = numbers.reduceRight((total, number) => total - number, 0)
// console.log(sum);
let numbers = [2,4,6,8,10];
numbers.forEach(num => {
    console.log(`${num} - ${num * num}`);
    
})

const prices = [10, 20, 30];
const total = prices.reduce((sum, price) => sum + price, 0);
console.log(total); 

const nums = [10, 5, 2, 7, 19, 203];
const sxvaoba = nums.reduceRight((acc, num) => acc - num);
console.log(sxvaoba);
 

// 1
function filterAndSum(threshold, ...numbers) {
  const filtered = numbers.filter(num => num > threshold);
  const sum = filtered.reduce((acc, curr) => acc + curr, 0);
  return sum;
}
console.log(filterAndSum(10, 5, 15, 20, 8, 12));

// 2
const product = {
  id: 101,
  name: "Laptop",
  price: 1200,
  brand: "TechCorp",
  color: "Silver",
  weight: "2kg"
};

const { id, name, ...details } = product;

console.log("ID:", id);
console.log("Name:", name);
console.log("Details:", details);

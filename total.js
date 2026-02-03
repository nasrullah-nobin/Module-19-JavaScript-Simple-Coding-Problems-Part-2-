const products = [
  { name: "Shampu", price: 300 },
  { name: "shirt", price: 400 },
  { name: "pant", price: 1000 },
  { name: "Chiruni", price: 50 },
  { name: "shoe", price: 1300 },
  { name: "3pc", price: 1500 },
];

function totalProducts(products) {
  let sum = 0;
  for (const product of products) {
    sum = sum + product.price;
  }
  return sum;
}
const totalPrice = totalProducts(products);
console.log(totalPrice);

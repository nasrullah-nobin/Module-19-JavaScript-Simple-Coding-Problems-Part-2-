const products = [
  { name: "Shampu", price: 300, quantity: 3 },
  { name: "shirt", price: 400, quantity: 5 },
  { name: "pant", price: 1000, quantity: 6 },
  { name: "Chiruni", price: 50, quantity: 2 },
  { name: "shoe", price: 1300, quantity: 7 },
  { name: "3pc", price: 1500, quantity: 1 },
];

function cartTotal(totals) {
  let sum = 0;

  for (const total of totals) {
    const totalss = total.price * total.quantity;
    sum = sum + totalss;
  }
  return sum;
}
const payAmount = cartTotal(products);
console.log(payAmount);

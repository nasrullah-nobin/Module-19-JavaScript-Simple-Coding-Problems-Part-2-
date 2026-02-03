function layeredDiscountedPrice(quantity) {
  const first100Price = 100;
  const second100Price = 90;
  const above200Price = 70;
  if (quantity < 0) {
    return "invalid quantity";
  } else if (quantity <= 100) {
    return quantity * first100Price;
  } else if (quantity <= 200) {
    const first100total = 100 * first100Price;
    const remainingQuantity = quantity - 100;
    const remainingTotal = remainingQuantity * second100Price;
    const total = first100total + remainingTotal;
    return total;
  } else {
    const first100total = 100 * first100Price;
    const second100total = 100 * second100Price;
    const remainingQuantity = quantity - 200;
    const remainingTotal = remainingQuantity * above200Price;
    const total = first100total + second100total + remainingTotal;
    return total;
  }
}

const productQuantity1 = layeredDiscountedPrice(100);
const productQuantity2 = layeredDiscountedPrice(150);
const productQuantity3 = layeredDiscountedPrice(200);
const productQuantity4 = layeredDiscountedPrice(300);
console.log(
  "quantity 100 total price: ",
  productQuantity1,
  "quantity 150 total price: ",
  productQuantity2,
  "quantity 200 total price: ",
  productQuantity3,
  "quantity 300 total price: ",
  productQuantity4,
);

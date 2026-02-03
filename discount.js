function discountedPrice(quantity) {
  if (quantity <= 100) {
    return quantity * 100;
  } else if (quantity <= 200) {
    return quantity * 90;
  } else {
    return quantity * 70;
  }
}


const productQuantity = discountedPrice(200);
console.log(productQuantity)

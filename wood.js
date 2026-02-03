function clothePrice(shirt, pants, shoe) {
  const shirtPrice = 100;
  const pantsPrice = 200;
  const shoePrice = 300;

  const totalShirt = shirtPrice * shirt;
  const totalPan = pantsPrice * pants;
  const totalShoe = shoePrice * shoe;
  const total = totalShirt + totalPan + totalShoe;
  return total;
}
const price = clothePrice(5, 2, 1);
console.log(price);

// method 2
function clothePrice1(shirt, pants, shoe) {
  if (shirt < 0 || pants < 0 || shoe < 0) {
    return "Invalid Quantity";
  }
  const shirtPrice = 100;
  const pantsPrice = 200;
  const shoePrice = 300;
  return shirtPrice * shirt + pantsPrice * pants + shoePrice * shoe;
}

const price1 = clothePrice1(6, 2, 1);
console.log(price1);

// method 03
function clothePrice2(shirt, pants, shoe) {
  const prices = {
    shirt: 100,
    pants: 200,
    shoe: 300,
  };
  return prices.shirt * shirt + prices.pants * pants + prices.shoe * shoe;
}

const price2 = clothePrice2(6, 2, 1);
console.log(price2);
const phones = [
  { model: "PhoneA", brand: "Iphone", price: 95000 },
  { model: "PhoneB", brand: "Samsung", price: 40000 },
  { model: "PhoneC", brand: "Oppo", price: 26000 },
  { model: "PhoneD", brand: "Nokia", price: 35000 },
  { model: "PhoneE", brand: "Iphone", price: 105000 },
  { model: "PhoneF", brand: "HTC", price: 48000 },
];
function findAveragePhonePrice(prices) {
  let sum = 0;
  for (let i = 0; i < prices.length; i++) {
      sum += prices[i].price;
  }
  return Number((sum / prices.length).toFixed(2));
}
console.log(findAveragePhonePrice(phones));




function findAveragePhonePrice1 (prices){
    let sum = 0;
    for(const price of prices){
        sum += price.price;
    }
    return Math.round((sum / prices.length));
}
console.log(findAveragePhonePrice1(phones));
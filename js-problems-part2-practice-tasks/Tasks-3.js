function calculateElectronicsBudget(
  laptopQuantity,
  mobileQuantity,
  tabletQuantity,
) {
  const laptopPrice = 35000;
  const tabletPrice = 15000;
  const mobilePrice = 20000;
  const totalLaptopPrice = laptopQuantity * laptopPrice;
  const totalMobilePrice = mobileQuantity * mobilePrice;
  const totalTabletPrice = tabletQuantity * tabletPrice;
  return totalLaptopPrice + totalMobilePrice + totalTabletPrice;
}
const electronicQuantity = calculateElectronicsBudget(2, 2, 2);
console.log(electronicQuantity);

// method 2
function calculateElectronicsBudget1(
  laptopQuantity,
  mobileQuantity,
  tabletQuantity,
) {
  if (laptopQuantity < 0 || tabletQuantity < 0 || mobileQuantity < 0) {
    return NaN;
  }
  const laptopPrice = 35000;
  const tabletPrice = 15000;
  const mobilePrice = 20000;
  return (
    laptopQuantity * laptopPrice +
    tabletQuantity * tabletPrice +
    mobileQuantity * mobilePrice
  );
}
const electronicQuantity1 = calculateElectronicsBudget1(0, -2, 2);
console.log(electronicQuantity1);

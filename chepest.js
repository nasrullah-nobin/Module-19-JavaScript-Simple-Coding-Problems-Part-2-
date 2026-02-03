const mobiles = [
  { name: "samsung", price: 30000, color: "black", camera: "30 mp" },
  { name: "xiaomi", price: 5000, color: "black", camera: "30 mp" },
  { name: "oppo", price: 9000, color: "black", camera: "30 mp" },
  { name: "tecnon", price: 45000, color: "black", camera: "30 mp" },
  { name: "walton", price: 20000, color: "black", camera: "30 mp" },
];

function cheapestPhone(mobiles) {
  let min = mobiles[0];
  for (const mobile of mobiles) {
    if (mobile.price < min.price) {
      min = mobile;
    }
  }
  return min;
}
const phone = cheapestPhone(mobiles);
console.log(phone);

function costlyPhones(mobiles) {
  let max = mobiles[0];
  for (const mobile of mobiles) {
    if (mobile.price > max.price) {
      max = mobile;
    }
  }
  return max;
}
const maxPhone = costlyPhones(mobiles);
console.log(maxPhone);

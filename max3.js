const jim = 900;
const kim = 500;
const lim = 54;

if (jim >= kim && jim >= lim) {
  console.log("jim is the real hero");
} else if (kim >= jim && kim >= lim) {
  console.log("Kim is the real hero");
} else {
  console.log("lim is the king");
}

function comparison(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num1 && num2 > num3) {
    return num2;
  } else {
    return num3;
  }
}

const grater = comparison(jim, kim, lim);
console.log(grater);


const max = Math.max(12,56,99,45,90);
console.log(max);

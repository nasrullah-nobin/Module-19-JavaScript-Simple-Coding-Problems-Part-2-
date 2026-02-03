const disha = 50;
const lima = 98;
if (disha > lima) {
  console.log("You passed", disha, "disha");
} else {
  console.log("yow win", lima, "lima");
}

function whoWin(num1, num2) {
  if (num1 >= num2) {
    return num1;
  } else {
    return num2;
  }
}

const max = whoWin(disha, lima);
console.log(max)

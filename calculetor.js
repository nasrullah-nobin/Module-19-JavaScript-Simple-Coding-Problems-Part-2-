function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}

function calculator(a, b, operation) {
  if (operation === "add") {
    const result = add(a, b);
    return result;
  }
  if (operation === "subtract") {
    const result = subtract(a, b);
    return result;
  }
  if (operation === "multiply") {
    const result = multiply(a, b);
    return result;
  }
  if (operation === "divide") {
    const result = divide(a, b);
    return result;
  } else {
    return 'Only "add", "subtract", "multiply", "divide", operation is Allowed';
  }
}

const cal1 = calculator(5, 5, "f");
const cal2 = calculator(5, 5, "subtract");
const cal3 = calculator(5, 5, "multiply");
const cal4 = calculator(5, 5, "divide");
console.log(
  "The Add Number Is: ",
  cal1,
  "The sum Is: ",
  cal2,
  "The multiply is : ",
  cal3,
  "The divide is : ",
  cal4,
);

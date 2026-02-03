const height = [500, 65, 66, 76, 87, 56, 87, 90, 1000];
let max = height[0];
for (const high of height) {
  if (high > max) {
    max = high;
  }
}
console.log(max);

function isMax(numbers) {
  let max = numbers[0];
  for (const number of numbers) {
    if (number > max) {
      max = number;
    }
  }
  return max;
}

console.log(isMax(height));

function isMin(numbers) {
  let min = numbers[0];
  for (const number of numbers) {
    if (number < min) {
      min = number;
    }
  }
  return min;
}
console.log(isMin(height));

function isMin1(numbers) {
  let min = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }
  return min;
}
console.log(isMin1(height));

// Task -1:
const heights2 = [167, 190, 120, 165, 137];
let lowest = heights2[0];
for (const height of heights2) {
  if (height < lowest) {
    lowest = height;
  }
}
console.log(lowest);

function findLowest(numbers) {
  let lowest = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < lowest) {
      lowest = numbers[i];
    }
  }
  return lowest;
}
const low = findLowest(heights2);
console.log(low);

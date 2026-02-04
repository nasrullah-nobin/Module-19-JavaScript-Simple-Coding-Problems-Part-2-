const names = ["rahim", "robin", "rafi", "ron", "rashed"];
function lowestName(names) {
  let lowestName = names[0];
  for (let i = 0; i < names.length; i++) {
    if (names[i].length < lowestName.length) {
      lowestName = names[i];
    }
  }
  return lowestName;
}
const shortName = lowestName(names);
console.log(shortName);

function lowestName1(names) {
  let lowestName = names[0];
  for (const name of names) {
    if (name.length < lowestName.length) {
      lowestName = name;
    }
  }
  return lowestName;
}
const shortName1 = lowestName1(names);
console.log(shortName1);



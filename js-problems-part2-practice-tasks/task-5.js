const employees = [
  { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
  { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
  { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
  { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];
function employeesSalary(employeeList) {
  let companyPay = 0;
  for (let i = 0; i < employeeList.length; i++) {
    const totalIncrement =
      employeeList[i].experience * employeeList[i].increment +
      employeeList[i].starting;
    companyPay += totalIncrement;
    console.log(
      "Name:",
      employeeList[i].name,
      "=",
      "Current Salary",
      totalIncrement,
    );
  }
  console.log("Company total Pay:", companyPay);
  return companyPay;
}
console.log(employeesSalary(employees));

// Method 02

function employeesSalary1(employeeList) {
  let companyPay = 0;
  for (const employee of employeeList) {
    const currentSalary =
      employee.increment * employee.experience + employee.starting;
    companyPay += currentSalary;
    console.log("Name:", employee.name, "=", "current salary: ", currentSalary);
  }
  console.log("Company total Pay:", companyPay);
  return companyPay;
}
console.log(employeesSalary1(employees));

var hourly = Number(prompt("Enter hourly pay: "));
var weeklyHours = Number(prompt("Enter hours worked per week: "));

const TAXRATE = 0.20;

var grossPay = hourly*weeklyHours;
var samsCut = grossPay * TAXRATE;
var netPay = grossPay - samsCut;


console.log("Gross Pay: $" + grossPay),
console.log("Uncle Sam's Share: $" + samsCut),
console.log("Net Pay: $" + netPay),

alert("Gross Pay: $" + grossPay + "\nUncle Sam's Share: $" + samsCut + "\nNetPay: $" + netPay);

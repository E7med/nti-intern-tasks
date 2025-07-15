var empName = prompt("Enter employee name:");
var empAge = Number(prompt("Enter employee age:"));
var yearsExp = Number(prompt("Enter years of experience:"));
var selfRating = Number(prompt("Enter your self-rating (1-10):"));
var baseSalary = Number(prompt("Enter your base salary:"));

var jobCategory = "";
if (yearsExp < 2) {
    jobCategory = "Junior";
} else if (yearsExp >= 2 && yearsExp < 5) {
    jobCategory = "Mid-Level";
} else if (yearsExp >= 5 && yearsExp <= 10) {
    jobCategory = "Senior";
} else if (yearsExp > 10) {
    jobCategory = "Expert";
}

var performance = "";
switch (true) {
    case (selfRating >= 9):
        performance = "Excellent";
        break;
    case (selfRating >= 7 && selfRating <= 8):
        performance = "Good";
        break;
    case (selfRating >= 5 && selfRating <= 6):
        performance = "Average";
        break;
    default:
        performance = "Needs Improvement";
}

var bonusPercent = 0;
if (yearsExp >= 0 && yearsExp < 2) {
    bonusPercent = 0.10;
} else if (yearsExp >= 2 && yearsExp <= 5) {
    bonusPercent = 0.15;
} else if (yearsExp > 5) {
    bonusPercent = 0.20;
}
var bonus = baseSalary * bonusPercent;
var finalSalary = baseSalary + bonus;

var hour = new Date().getHours();
var shift = (hour >= 9 && hour < 18) ? "Day Shift" : "Night Shift";

var report = `Employee: ${empName}\nAge: ${empAge}\nExperience: ${yearsExp} years\nJob Category: ${jobCategory}\nPerformance: ${performance}\nBase Salary: $${baseSalary.toFixed(2)}\nBonus: $${bonus.toFixed(2)}\nFinal Salary: $${finalSalary.toFixed(2)}\nCurrent Shift: ${shift}`;

console.log(report);
alert(report);
document.getElementById("result").innerText = report;
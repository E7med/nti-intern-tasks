var userName = prompt("What is your name?");
var birthYear = prompt("What is your birth year?");
var isStudent = confirm("Are you a student?");

var currentYear = new Date().getFullYear();
var age = currentYear - Number(birthYear);
var category = "";

switch (true) {
    case (age < 13):
        category = "kid";
        break;
    case (age >= 13 && age <= 17):
        category = "teen";
        break;
    case (age >= 18 && age <= 59):
        category = "adult";
        break;
    case (age >= 60):
        category = "senior";
        break;
    default:
        category = "unknown";
}

var message = `Hello ${userName}, you are ${age} years old.\nCategory: ${category}.`;
if (isStudent) {
    message += "\nDon't forget to study hard!";
}

console.log(message);
alert(message);
document.getElementById("result").innerText = message;
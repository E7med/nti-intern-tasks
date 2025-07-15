var temp = prompt("Enter the temperature in Celsius:");

if (temp === null) {
    alert("Input cancelled.");
} else {
    temp = parseFloat(temp);
    if (isNaN(temp)) {
        alert("Please enter a valid number for temperature.");
    } else {
        var condition = "";
        if (temp < 0) {
            condition = "Freezing cold";
        } else if (temp >= 0 && temp <= 15) {
            condition = "Cold";
        } else if (temp >= 16 && temp <= 25) {
            condition = "Mild";
        } else if (temp >= 26 && temp <= 35) {
            condition = "Warm";
        } else if (temp > 35) {
            condition = "Hot";
        }

        var safety = "";
        if (temp < -5 || temp > 40) {
            safety = "Dangerous temperature";
        } else {
            safety = "Safe temperature";
        }

        var advice = "";
        if (temp >= 16 && temp <= 25) {
            advice = "Perfect for outdoor activities!";
        } else if (temp > 30) {
            advice = "Stay hydrated!";
        }

        var result = "Temperature: " + temp + "°C\n" +
            "Condition: " + condition + "\n" +
            "Status: " + safety;
        if (advice !== "") {
            result += "\nAdvice: " + advice;
        }

        console.log(result);
        alert(result);
        document.getElementById("result").innerText = result;
    }
}

import { add, subtract, pi } from './math.js';
import { greet } from './greet.js';
import { capitalize } from './utils.js';

function displayResults() {
    const resultsContainer = document.getElementById('results');
    
    resultsContainer.innerHTML = '';
    
    const resultsHTML = `
        <div class="result-section">
            <h2> Mathematical Operations</h2>
            <div class="result-item">
                <span class="label">Addition (5 + 3):</span>
                <span class="value">${add(5, 3)}</span>
            </div>
            <div class="result-item">
                <span class="label">Subtraction (10 - 4):</span>
                <span class="value">${subtract(10, 4)}</span>
            </div>
            <div class="result-item">
                <span class="label">Pi Constant:</span>
                <span class="value">${pi}</span>
            </div>
        </div>
        
        <div class="result-section">
            <h2> Greeting Function</h2>
            <div class="result-item">
                <span class="label">Greeting for "john":</span>
                <span class="value">${greet("john")}</span>
            </div>
        </div>
        
        <div class="result-section">
            <h2> Bonus: Utility Functions</h2>
            <div class="result-item">
                <span class="label">Capitalized "john":</span>
                <span class="value">${capitalize("john")}</span>
            </div>
            <div class="result-item">
                <span class="label">Greeting with capitalized name:</span>
                <span class="value">${greet(capitalize("john"))}</span>
            </div>
        </div>
        
        <div class="result-section">
            <h2>🔧 Interactive Demo</h2>
            <div class="interactive-demo">
                <input type="number" id="num1" placeholder="First number" value="15">
                <input type="number" id="num2" placeholder="Second number" value="7">
                <button onclick="calculateNumbers()">Calculate</button>
                <div id="interactive-results"></div>
            </div>
        </div>
    `;
    
    resultsContainer.innerHTML = resultsHTML;
}

function calculateNumbers() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const interactiveResults = document.getElementById('interactive-results');
    
    if (isNaN(num1) || isNaN(num2)) {
        interactiveResults.innerHTML = '<p class="error">Please enter valid numbers!</p>';
        return;
    }
    
    const sum = add(num1, num2);
    const difference = subtract(num1, num2);
    
    interactiveResults.innerHTML = `
        <div class="result-item">
            <span class="label">Sum:</span>
            <span class="value">${sum}</span>
        </div>
        <div class="result-item">
            <span class="label">Difference:</span>
            <span class="value">${difference}</span>
        </div>
    `;
}

window.calculateNumbers = calculateNumbers;

document.addEventListener('DOMContentLoaded', function() {
    displayResults();
    
    console.log('JavaScript Modules Demo');
    console.log('Math operations:', { add: add(5, 3), subtract: subtract(10, 4), pi });
    console.log('Greeting:', greet('Developer'));
    console.log('Capitalized:', capitalize('javascript'));
}); 
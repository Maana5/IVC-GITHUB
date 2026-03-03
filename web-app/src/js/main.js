// main.js - JavaScript code for interactivity and functionality

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('myButton');
    const output = document.getElementById('output');

    button.addEventListener('click', () => {
        const userInput = document.getElementById('userInput').value;
        output.textContent = `You entered: ${userInput}`;
    });
});
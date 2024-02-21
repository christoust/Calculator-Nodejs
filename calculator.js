// calculator.js
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter first number: ', (num1) => {
    rl.question('Enter second number: ', (num2) => {
        rl.question('Enter operation (+, -, *, /): ', (operator) => {
            let result;
            switch (operator) {
                case '+':
                    result = parseFloat(num1) + parseFloat(num2);
                    break;
                case '-':
                    result = parseFloat(num1) - parseFloat(num2);
                    break;
                case '*':
                    result = parseFloat(num1) * parseFloat(num2);
                    break;
                case '/':
                    result = parseFloat(num1) / parseFloat(num2);
                    break;
                default:
                    console.log('Invalid operator');
                    rl.close();
                    return;
            }
            console.log('Result:', result);
            rl.close();
        });
    });
});

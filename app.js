const readline = require('readline');
const utils = require('./utils');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function promptUser() {
    rl.question('Enter your first name: ', (firstName) => {
        rl.question('Enter your last name: ', (lastName) => {
            utils.printWelcomeMessage(firstName, lastName);

            rl.question('Enter a temperature in Celsius: ', (celsius) => {
                console.log(`Converted to Fahrenheit: ${utils.convertCelsiusToFahrenheit(parseFloat(celsius))}`);

                rl.question('Enter a number to calculate its factorial: ', (number) => {
                    console.log(`Factorial: ${utils.calculateFactorial(parseInt(number, 10))}`);

                    rl.question('Enter the number of terms for the Fibonacci sequence: ', (terms) => {
                        console.log(`Fibonacci sequence: ${utils.generateFibonacci(parseInt(terms, 10))}`);
                        rl.close();
                    });
                });
            });
        });
    });
}

promptUser();

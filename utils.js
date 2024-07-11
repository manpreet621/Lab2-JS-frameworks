function printWelcomeMessage(firstName, lastName) {
    console.log(`Welcome ${firstName} ${lastName} to G@I College`);
}

function convertCelsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function calculateFactorial(num) {
    if (num < 0) return -1;
    else if (num === 0) return 1;
    else {
        let factorial = 1;
        for (let i = num; i > 1; i--) {
            factorial *= i;
        }
        return factorial;
    }
}

function generateFibonacci(terms) {
    if (terms <= 0) return [];
    let fibSequence = [0, 1];
    for (let i = 2; i < terms; i++) {
        fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
    }
    return fibSequence;
}

module.exports = {
    printWelcomeMessage,
    convertCelsiusToFahrenheit,
    calculateFactorial,
    generateFibonacci
};

const prompt = require('prompt-sync')({sigint: true});
let input = Number(prompt('Enter a value for "n": '));
let num1 = 0;
let num2 = 1;
let i = 1;
while(i <= input) {
    console.log(num1);
    let sum = num1 + num2;
    num1 = num2;
    num2 = sum;
    i++;
}
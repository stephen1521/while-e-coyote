const prompt = require('prompt-sync')({sigint: true});
let input = Number(prompt('Enter some numbers (type 0 when complete): '));
let sum = 0;
while(input > 0) {
    sum += input;
    input = Number(prompt('> '));
}
console.log('Those numbers sum to ' + sum);
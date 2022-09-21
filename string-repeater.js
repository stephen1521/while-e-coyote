const prompt = require('prompt-sync')({sigint: true});
let input = prompt('Enter a string: ');
let str = input
while(input.length <= 10) {
    console.log(input);
    input += str;
}

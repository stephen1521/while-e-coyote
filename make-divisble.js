const prompt = require('prompt-sync')({sigint: true});
let input = Number(prompt('Enter x: '));
let input2 = Number(prompt('Enter y: '));
while((input % input2) !== 0){
    console.log(input);
    input++;
}
console.log(input + " is divisible by " + input2);

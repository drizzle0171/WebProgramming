const fs = require('fs');

const input = fs.readFileSync('input.txt');
let content = input.toString();
fs.writeFileSync('output_final.txt', content);
console.log('완료')
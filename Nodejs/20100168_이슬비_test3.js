const fs = require('fs');
let file = fs.readFileSync('./input.txt');
let answer = file.toString();

fs.writeFileSync('prt.txt', answer);
console.log('완료되었습니다.')
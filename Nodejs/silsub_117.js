const fs = require('fs');

fs.writeFileSync('output2.txt', '안녕! 빨리 집 가서 짐 챙겨야 하는데 ,,,,,');
console.log('파일 쓰기를 완료하였습니다.')

fs.writeFile('output1.txt', '5시에는 도착해야하는데,,,', (error) => {
console.log('파일 쓰기를 완료하였습니다.')})
// Data() 함수: 시스템 라이브러리에 있는 것을 불러옴

let date = new Date()

console.log(date.getFullYear())
console.log(date.getMonth()+1) // 함수만으로는 3월을 표현할 수 없음
console.log(date.getDate())

console.log(date.getHours())
console.log(date.getMinutes())
console.log(date.getSeconds())
const dancer =[
    {'name': '허니제이', 'dance': '왁킹'},
    {'name': '가비', 'dance': '라킹'},
    {'name': '리정', 'dance': '힙합'},
]
let answer = dancer.filter((item, index) => {
    return item.dance == '왁킹';
})
console.log(`스트릿 우먼 파이터 최종 우승자: ${answer[0].name}의 ${answer[0].dance}`)
x

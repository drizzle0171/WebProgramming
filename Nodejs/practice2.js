const dancer = [
    {'name': '허니제이', 'dance': '왁킹'},
    {'name': '가비', 'dance':'라킹'},
    {'name': '리정', 'dance':'힙합'}
];

let win = dancer.map((item, index) => {
    if (item.dance == '왁킹') {
        return item
    }
})

console.log(`스트릿 우먼 파이터 최종 우승자: ${win[0].name}의 ${win[0].dance}`)
let people = [{name:'윤인성', region:'서울'}, {name:'Davis Kim', region: 'New York'}, {name:'송미자', region:'경기'}, {name: '추성훈', region: 'OSAKA'}];

for(let i of people) {
    i = JSON.stringify(i)
    console.log(typeof(i))
}


console.log(people)
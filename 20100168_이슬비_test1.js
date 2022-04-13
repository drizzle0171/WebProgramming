let space = ' ';
let num = 5;
let answer = '';

for (let i = 1; i<=num; i++){
    for (let j = 1; j<=(num-i); j++){
        answer+=space;
    }
    for (let k = 1; k<=i; k++){
        answer+=k;
    }
    answer+='\n';
}

console.log(answer)
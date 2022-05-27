const express = require('express');
const app = express();

app.get('*', (request, response) => {
    const num = request.query;
    let sum = 0;
    for (let i = 1; i<=(num.a); i++ ){
        sum += i
    }
    response.send(`<h1>1-${num.a}까지의 합 = ${sum} </h1>`)
});

app.listen(8000, () => {
    console.log('Server running at http://localhost:8000');
})
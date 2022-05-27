const express = require('express');
const app = express();

app.get('/name/:name', (request, response) => {
    const name = request.params.name;
    response.send(`<h1>안녕하세요, 제 이름은 ${name}입니다.</h1>`)
});

app.listen(8000, () => {
    console.log('Server running at http://localhost:8000');
})
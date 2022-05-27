const express = require('express');
const app = express();
let str1 = "Hello Web programming"
let str2 = "Hello NodeJs"
app.get('/page/:id', (request, response) => {
    const id = request.params.id;
    response.send(`<h1>${id} Page</h1>`)
});

app.listen(12345, () => {
    console.log('Server running at http://127.0.0.1:12345');
})
const express = require('express');
const app = express();
let str1 = "Hello Web programming"
let str2 = "Hello NodeJs"
app.use((request, response) => {
    response.send(`<h1>${str1} <br> ${str2}</h1>`);
});

app.listen(12345, () => {
    console.log('Server running at http://127.0.0.1:12345');
})
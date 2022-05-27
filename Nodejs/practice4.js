const express = require('express');
const app = express();
app.get ('*', (require, response) => {
    console.log(request.query);
});
app.listen (8000, () =>{});
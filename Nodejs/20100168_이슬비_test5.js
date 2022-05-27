var express = require('express');
const {clearCookie} = require('express/lib/response');

var mysql = require('mysql');
var connection = mysql.createConnection({
    host : 'localhost',
    user: 'drizzle',
    password: 'drizzle',
    database: 'webprogramming'
});

var app = express();

connection.connect(function(err){
    if (!err) {
        console.log('서버가 DB와 잘 연동되었습니다. \n');
    }
    else{
        console.log('서버 DB 연동 오류');
    }
});

app.get('/', function(request, response) {
    connection.query('select * from students', function(err, rows, fields) {
        connection.end();
        if(!err){
            response.send(rows);
            console.log('Students Informations \n', rows);
        }
        else{
            console.log('Students Information Table Query Error!');
        }
    });
});
app.listen(8000, ()=>{
    console.log('Sercer is running at http://127.0.0.1:8000');
});
var mysql = require('mysql');
var express = require('express');
var connection = mysql.createConnection({
    host: 'mysql',
    port: 3306,
    user: 'root',
    password: 'passowrd',
    database: 'test_db'
});


app = express();

global.app.get('/getHelloWorld', function (req, res) {
    console.log("hello world");
    res.json({
        ReturnCode: "API0001"
    });
});

global.app.get('/getDB', function (req, res) {
    var connection = mysql.createConnection({
        host: 'mysql',
        port: 3306,
        user: 'root',
        password: 'passowrd',
        database: 'test_db'
    });
    connection.connect();
    connection.query('select * from googleplay', function (error, result, fields) {
        if (error) {
            res.json({
                ReturnCode: "API0002",
                Message: error
            });

        } else {
            res.json({
                ReturnCode: "API0001"
            });
        }
    });
    connection.end();
});

app.listen(9900);
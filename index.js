var mysql = require('mysql');
var express = require('express');
var connection = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'passowrd',
    database: 'test_db'
  });


  app = express();

  global.app.get('/getHelloWorld', function (req, res) {
      console.log("hello world");
      res.json({
          ReturnCode : "API0001"
      });
  });

  app.listen(9900);
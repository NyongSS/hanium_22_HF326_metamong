//mysql2/promise는 async/await를 사용하기 위해서 사용하는 것이다.
const mysql = require('mysql2/promise');
//const db = require('../../database.json')

var db = mysql.createConnection({
    host: '127.0.0.1:3306',
    port: 3306,
    user: user1,
    password: 'hanium_22_HF326_metamong',
    database: 'metamong' // mysql database
});

db.connect();

//동작확인용
db.query('SELECT * from metamong',
function(error, result, fields){
    if (error) throw error;
    console.log('the metamong is >>> : ', results);
});

module.exports = db;
//mysql2/promise는 async/await를 사용하기 위해서 사용하는 것이다.
const mysql = require('mysql2/promise');
const db = require('../../database.json')

module.experts = mysql.createPool({
    host: db.host;,
    port: db.port,
    user: db.user,
    password: db.password,
    database: db.database
});
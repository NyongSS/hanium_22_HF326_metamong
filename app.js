const express = require('express');
const session = require('express-session');

const http = require('http');
const url = require('url');
//화면 가져오는 것 추가

var MySQLStore = require('express-mysql-session')(session);

const app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/asset'));




const models = require("./models/index.js");

models.sequelize.sync().then( () => {
  console.log(" DB 연결 성공");
}).catch(err => {
  console.log("연결 실패");
  console.log(err);
});







//app.use('/login', loginRoutes);



app.use('/comment', function(request, response){
    answer.container(request, response);
});

app.get('/myPage', function(request, response) {
    myPage.container(request, response);
})

//app.get('/board/:boardId', board-route);
//app.get('/search', searchRoutes);
app.listen(3000, () => console.log("Server running at http://localhost:3000"));


module.experts = app;



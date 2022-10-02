const express = require('express');
const session = require('express-session');
const router = require('.src/routes/router');
const http = require('http');
const url = require('url');
//화면 가져오는 것 추가

var MySQLStore = require('express-mysql-session')(session);

const app = express();
app.use(router);
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/asset'));

app.use(            
    session({
    key: "user",
    secret: "user",
    resave: true,
    saveUninitialized: false,
    store : new MySQLStore({
        host     : '127.0.0.1',    
        user     : 'user1',           
        password : 'hanium_22_HF326_metamong',       
        database : 'metamong'      
    })
}));

app.use('/login', loginRoutes);
app.use('/register', registerRoutes);
app.use('/modify', modRoutes);


app.use('/comment', function(request, response){
    answer.container(request, response);
});

app.get('/myPage', function(request, response) {
    myPage.container(request, response);
})

app.get('/board/:boardId', boardRoutes);
app.get('/search', searchRoutes);

app.use('/uploads', express.static('uploads'));



module.experts = app;



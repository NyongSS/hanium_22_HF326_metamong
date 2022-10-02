const express = require('express');
const session = require('express-session');
//const router = require('.src/routes/router');
const http = require('http');
const url = require('url');
const cors = require("cors");

var path = require('path');
var models = require('./models')


//화면 가져오는 것 추가

var MySQLStore = require('express-mysql-session')(session);

var corOptions = {
    origin: "https://localhost:3000",
  };
const app = express();
app.set("port", process.env.PORT || 3000);

app.use(cors(corOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const boardRouter = require("./routes/board-route.js");
app.use("/api", boardRouter);
const commentRouter = require("./routes/comment-route.js");
app.use("/api", commentRouter);
const userRouter = require("./routes/user-router.js");
app.use("/api", userRouter);




app.get("/", (req, res) => {
    res.json({ message: "hello world" });
  });
  
  app.listen(app.get("port"), () => {
    console.log(app.get("port"), "번 포트에서 대기 중");
  });



//app.use(router);
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/asset'));



//app.use('/login', loginRoutes);
//app.use('/register', registerRoutes);
//app.use('/modify', modRoutes);


//app.use('/comment', function(request, response){
//    answer.container(request, response);
//});

//app.get('/myPage', function(request, response) {
//    myPage.container(request, response);
//})


//import boardRouter from "./routers/board-route.js";
//app.get('/board/:boardId', boardRouter);
//app.get('/search', searchRoutes);
//app.use('/uploads', express.static('uploads'));



module.experts = app;



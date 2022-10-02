<<<<<<< HEAD
'use strict';


var express = require('express')
var router = express.Router()
 
router.get('/',function(req,res){
    res.send('hi')
})







const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);




  
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;


sequelize
  .sync({ force: false })
  .then(() => {
    console.log("데이터베이스 연결됨.");
  })
  .catch((err) => {
    console.error(err);
  });


module.exports = router;
=======
const Sequelize= require('sequelize');
const env= process.env.NODE_ENV|| 'development';
const config= require(__dirname+'/../config/config.js');
const db={};

let sequelize= new Sequelize(config.database, config.username, config.password, config);

db.sequelize=sequelize;
db=Sequelize=Sequelize;

db.board=require("./board.js")(sequelize,Sequelize);
db.metaUser=require("./metaUser.js")(sequelize,Sequelize);
db.comment=require("./comment.js")(sequelize,Sequelize);
db.search=require("./search.js")(sequelize,Sequelize);
db.tempSearch=require("./tempSearch.js")(sequelize,Sequelize);

module.exports=db;

>>>>>>> 7eda8a0841fe6002ad35c34ab4073c6b1e902b88

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


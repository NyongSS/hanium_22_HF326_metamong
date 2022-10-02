const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize; // 나중에 연결 객체 재사용을 위해 넣어둠

module.exports = db;










exports.getBoards = (result) => {
    db.query("SELECT * FROM post", (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    });
  };

exports.getBoard = (id, result) => {
    db.query("SELECT * FROM post WHERE postNum = ?", [id], (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results[0]);
      }
    });
  };

exports.insertBoard = (data, result) => {
    db.query("INSERT INTO post SET ?", [data], (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    });
  };


exports.updateBoard = (data, id, result) => {
    db.query(
      "UPDATE post SET postTitle = ?, content = ? WHERE postNum = ?",
      [data.postTitle, data.content, id],
      (err, results) => {
        if (err) {
          console.log(err);
          result(err, null);
        } else {
          result(null, results);
        }
      }
    );
  };

exports.deleteBoard = (id, result) => {
    db.query("DELETE FROM post WHERE postNum = ?", [id], (err, results) => {
      if (err) {
        result(err, null);
      } else {
          db.query("DELETE FROM attachment WHERE id = ?", [id], (err, results) => {
          if (err) {
          result(err, null);
          } else {
          result(null, results);
      }
    });
      }
    }); 
  };
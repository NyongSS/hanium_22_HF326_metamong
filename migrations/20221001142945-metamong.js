'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.createTable("Board",{
      boardID:{
        type: Sequelize.INTEGER(1),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      writerID:{
        type: Sequelize.VARCHAR(20),
        allowNull: false,
      }
      content:{
        type: Sequelize.VARCHAR(500)
      }
      writeTime:{
        TIMESTAMP
      }
      location:{
        DECIMAL(13,10)
      }
      title:{
        type: Sequelize.VARCHAR(20)
      }
    }
    FOREIGN KEY(writerID) REFERENCES metaUsers(userID) ON DELETE CASCADE);
    )



      
      CREATE TABLE metaUsers(
      userID       VARCHAR(20)         PRIMARY KEY,
      userName    VARCHAR(20)         NOT NULL,
      userEmail   VARCHAR(50),
      nickname   VARCHAR(20),
      userpwd      VARCHAR(20)
      );
      CREATE TABLE Comment(
      commentID   INTEGER,
      boardID      INTEGER            NOT NULL,
      content    VARCHAR(100),
      writeTime   TIMESTAMP,
      userID      VARCHAR(20)         NOT NULL,
      location   DECIMAL(13,10),
      PRIMARY KEY(commentID, boardID),
      FOREIGN KEY(boardID) REFERENCES Board(boardID) ON DELETE CASCADE,
      FOREIGN KEY(userID) REFERENCES metaUsers(userID) ON DELETE CASCADE);
      
      create table search(
      searchID integer primary key,
      userID    varchar(20),
      searchContent varchar(100),
      searchtime timestamp,
      foreign key(userID) references metaUsers(userID) ON delete cascade
      );
      
      CREATE TABLE TempSearch( 
      searchID  INTEGER    PRIMARY KEY, 
      writerID  VARCHAR(20)    NOT NULL, 
      content  varchar(100), 
      location DECIMAL(13,10), 
      tempOn  boolean, 
      FOREIGN KEY(writerID) REFERENCES metaUsers(userID) ON DELETE CASCADE);
      
  },

  async down (queryInterface, Sequelize) {
    queryInterface.dropTable("boards");
  }
};

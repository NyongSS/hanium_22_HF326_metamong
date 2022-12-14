
module.exports= (sequelize, Sequelize) => {
    const board = sequelize.define("Board", {
        boardID: { 
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true
            
        },
        writerID: {
            type: Sequelize.STRING,
            allowNull: false,
            
        },
        content: { 
            type: Sequelize.STRING,
            allowNull: false
        },
        writeTime: {
            type: Sequelize.timestamps,
            allowNull: false
        },
        location:{
            type: Sequelize.DECIMAL(13,10),
            allowNull:false

        }
    },
    {
        timestamps: false,
        tableName: 'Board'
    });
    return board;
}

// export const getBoards = (result) => {
//     db.query("SELECT * FROM post", (err, results) => {
//       if (err) {
//         console.log(err);
//         result(err, null);
//       } else {
//         result(null, results);
//       }
//     });
//   };

//   export const getBoard = (id, result) => {
//     db.query("SELECT * FROM post WHERE postNum = ?", [id], (err, results) => {
//       if (err) {
//         console.log(err);
//         result(err, null);
//       } else {
//         result(null, results[0]);
//       }
//     });
//   };

//   export const insertBoard = (data, result) => {
//     db.query("INSERT INTO post SET ?", [data], (err, results) => {
//       if (err) {
//         console.log(err);
//         result(err, null);
//       } else {
//         result(null, results);
//       }
//     });
//   };


//   export const updateBoard = (data, id, result) => {
//     db.query(
//       "UPDATE post SET postTitle = ?, content = ? WHERE postNum = ?",
//       [data.postTitle, data.content, id],
//       (err, results) => {
//         if (err) {
//           console.log(err);
//           result(err, null);
//         } else {
//           result(null, results);
//         }
//       }
//     );
//   };

//   export const deleteBoard = (id, result) => {
//     db.query("DELETE FROM post WHERE postNum = ?", [id], (err, results) => {
//       if (err) {
//         result(err, null);
//       } else {
//           db.query("DELETE FROM attachment WHERE id = ?", [id], (err, results) => {
//           if (err) {
//           result(err, null);
//           } else {
//           result(null, results);
//       }
//     });
//       }
//     }); 
//   };

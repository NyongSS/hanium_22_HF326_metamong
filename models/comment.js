module.exports= (sequelize, Sequelize) => {
    const comment = sequelize.define("Commment", {
        commentID: { 
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true
            
        },
        boardID: {
            type: Sequelize.STRING,
            allowNull: false,
          primaryKey: true  
        },
        content: {
            type: Sequelize.STRING,
            allowNull: false
        },
        writeTime: {
            type: Sequelize.timestamps,
            allowNull: false
        },
        userID: {
            type: Sequelize.STRING,
            allowNull: false
        },
        location:{
            type: Sequelize.DECIMAL(13,10),
            allowNull:false

        }
    },
    {
        timestamps: false,
        tableName: 'Comment'
    });
    return comment;
}
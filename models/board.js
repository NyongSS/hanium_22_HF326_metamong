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
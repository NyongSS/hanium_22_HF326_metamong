module.exports= (sequelize, Sequelize) => {
    const metaUser = sequelize.define("", {
        userID: {
            type: Sequelize.STRING,
            allowNull: false,
            primaryKey: true
            
        },
        userName: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        userEmail: { 
            type: Sequelize.STRING,
            allowNull: false
        },
        nickname:{
            type:Sequelize.STRING,
            allowNull:false
        },
        userpwd: {
            type:Sequelize.STRING,
            allowNull:false
        }
    },
    {
        timestamps: false,
        tableName: 'metaUsers'
    });
    return metaUser;
}
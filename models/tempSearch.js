module.exports= (sequelize, Sequelize) => {
    const tempSearch = sequelize.define("", {
        searchID: { 
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
        location: {
            type: Sequelize.DECIMAL(13,10),
            allowNull:false},
        tempOn: {
            type: Sequelize.boolean,
            allowNull: true
        }
    },
    {
        timestamps: false,
        tableName: 'TempSearch'
    });
    return tempSearch;
}
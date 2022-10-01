module.exports= (sequelize, Sequelize) => {
    const search = sequelize.define("search", {
        searchID: { 
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true
            
        },
        userID: {
            type: Sequelize.STRING,
            allowNull: false,
            
        },
        searchcontent: { //내 아이디와 yourId와의 조합으로 생성된다.
            type: Sequelize.STRING,
            allowNull: false
        },
        searchTime: {
            type: Sequelize.timestamps,
            allowNull: false
        },
        
    },
    {
        timestamps: false,
        tableName: 'search'
    });
    return search;
}
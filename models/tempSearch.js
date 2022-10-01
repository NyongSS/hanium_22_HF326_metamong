module.exports= (sequelize, Sequelize) => {
    const board = sequelize.define("Board", {
        boardID: { //friend model의 기본키는 myId와 yourId입니다.
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true
            
        },
        writerID: {
            type: Sequelize.STRING,
            allowNull: false,
            
        },
        content: { //내 아이디와 yourId와의 조합으로 생성된다.
            type: Sequelize.STRING,
            allowNull: false
        }
    },
    {
        timestamps: false,
        tableName: 'friends'
    });
    return friends;
}
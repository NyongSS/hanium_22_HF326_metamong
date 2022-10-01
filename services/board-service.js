const pool = require('../database/pool')
const BoardQuery = require('../queries/board-query')

exports.getBoard = async (boardId) => {
    try {
        let data = await pool.query(BoardQuery.getBoard, [boardId])
        return data[0]
    } catch (err) {
        console.log(err)
        throw Error(err)
    }
}

// 생략...

exports.deleteComment = async (boardId, commentId) => {
    let conn = await pool.getConnection()
    try {
        await conn.beginTransaction()

        let del = await conn.query(BoardQuery.deleteComment, [commentId])
        if (del[0].affectedRows == 1) {
            let upd = await conn.query(BoardQuery.minusCommentCnt, [boardId])
        }
        await conn.commit()

        return del[0]
    } catch (err) {
        conn.rollback()
        console.log(err)
        throw Error(err)
    } finally {
        conn.release()
    }
}
const BoardService = require('../services/board-service')

exports.getBoard = async (req, res, next) => {
    let { boardId } = req.params.boardId
    let userinfo = request.session
    let boardName
    try {
        let rows = await BoardService.getBoard(boardId)
        return res.json(rows[0])
    } catch (err) {
        return res.status(500).json(err)
    }
}

exports.getBoards = async (req, res, next) => {
    let { boardId } = req.params
    try {
        let rows = await BoardService.getBoard(boardId)
        return res.json(rows[0])
    } catch (err) {
        return res.status(500).json(err)
    }
}

insertBoard

updateBoard

deleteBoard


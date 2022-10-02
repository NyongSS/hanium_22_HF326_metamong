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

exports.insertBoard = (req, res) => {
    const data = req.body;
    insertPost(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

exports.updateBoard = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updatePostByNum(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

exports.deleteBoard= (req, res) => {
    const id = req.params.id;
    deletePostByNum(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}


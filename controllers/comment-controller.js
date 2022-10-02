getComments


insertComment


exports.deleteComment = async (req, res, next) => {
    let { boardId, commentId } = req.params
    try {
        let del = await BoardService.deleteComment(boardId, commentId)
        return res.json(del)
    } catch (err) {
        return res.status(500).json(err)
    }
}
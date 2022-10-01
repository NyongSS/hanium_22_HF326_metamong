exports.getBoard = 'select board_id, title, content from board where board_id = ?'
exports.getBoards = 'select board_id, title from board limit ?, ?'
exports.insertBoard = 'insert into board set ?'
exports.updateBoard = 'update board set title = ?, content = ?, upd_dt = now() where board_id = ?'
exports.deleteBoard = 'delete from board where board_id = ?'
exports.getComments = 'select board_id, title, content from board where board_id = ?'
exports.insertComment = 'insert into board set ?'
exports.plusCommentCnt = 'update board set comment_cnt = comment_cnt + 1 where board_id = ?'
exports.updateComment = 'update board_comment set content = ?, upd_dt = now() where comment_id = ?'
exports.deleteComment = 'select board_id, title, content from board where board_id = ?'
exports.minusCommentCnt = 'update board set comment_cnt = comment_cnt - 1 where board_id = ?'
exports.getBoard = 'select boardID, writerID, writeTime, location, complete, content from board where boardID = ?'
exports.getBoards = 'select boardID, title from board limit ?, ?'
exports.insertBoard = 'insert into board set ?'
exports.updateBoard = 'update Board set title = ?, content = ?, location = ?, complete = ?, upd_dt = now() where boardID = ?'
exports.deleteBoard = 'delete from board where boardID = ?'


exports.getComments = 'select boardID, title, content from board where commentID = ?'
exports.insertComment = 'insert into Board set ?'
exports.plusCommentCnt = 'update Board set comment_cnt = comment_cnt + 1 where boardID = ?'
exports.updateComment = 'update Comment set content = ?, upd_dt = now() where commentID = ?'
exports.deleteComment = 'select boardID, title, content from board where boardID = ?'
exports.minusCommentCnt = 'update board set comment_cnt = comment_cnt - 1 where boardID = ?'

exports.user


//search
//TempSearch
//metausers
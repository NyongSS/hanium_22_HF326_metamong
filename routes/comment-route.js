// import express

var express = require('express');
var router = express.Router();
const CommentController = require('../controllers/comment-controller')
const db = require('../db.js');


/*
router.get('/:boardId/comment', CommentController.getComments)
router.post('/:boardId/comment', CommentController.insertComment)
router.patch('/:boardId/comment/:commentId', CommentController.updateComment)
router.delete('/:boardId/comment/:commentId', CommentController.deleteComment)
*/

module.exports = router;
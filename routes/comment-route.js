// import express
import express from "express";
import multer from "multer";
import db from "../db.js";

var express = require('express');
var router = express.Router();
const CommentController = require('../controllers/comment-controller')
const db = require('../db.js');

import {
    getComments,
    insertComment,
    plusCommentCnt,
    updateComment,
    deleteComment,
    minusCommentCnt
  } from "../queires/query.js";

router.get('/:boardId/comment', BoardController.getComments)
router.post('/:boardId/comment', BoardController.insertComment)
router.patch('/:boardId/comment/:commentId', BoardController.updateComment)
router.delete('/:boardId/comment/:commentId', BoardController.deleteComment)


module.exports = router;
// import express
import express from "express";
import multer from "multer";
import db from "../db.js";

var express = require('express');
var router = express.Router();
const BoardController = require('../controllers/board-controller')
const db = require('../db.js');


// import function from controller
import {
    getBoard,
    getBoards,
    insertBoard,
    updateBoard,
    deleteBoard
  } from "../queires/query.js";

router.get('/:boardId', BoardController.getBoard)
router.get('/', BoardController.getBoards)
router.post('/', BoardController.insertBoard)
router.patch('/:boardId', BoardController.updateBoard)
router.delete('/:boardId', BoardController.deleteBoard)


module.exports = router;
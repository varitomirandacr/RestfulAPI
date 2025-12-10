const express = require('express');
const router = express.Router();
const itemsController = require('../controllers/itemsController');

// POST /api/items/check - Check if room code matches
router.post('/check', itemsController.checkRoomCode);
router.post('/test', itemsController.checkDummyRoomCode);

module.exports = router;


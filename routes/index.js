const express = require('express');
const router = express.Router();
const itemsRouter = require('./items');

// Mount route modules
router.use('/items', itemsRouter);

module.exports = router;


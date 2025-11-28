const express = require('express');
const router = express.Router();
const itemsController = require('../controllers/itemsController');

// GET /api/items - Get all items
router.get('/', itemsController.getAllItems);

// GET /api/items/:id - Get item by ID
router.get('/:id', itemsController.getItemById);

// POST /api/items - Create new item
router.post('/', itemsController.createItem);

// PUT /api/items/:id - Update item
router.put('/:id', itemsController.updateItem);

// DELETE /api/items/:id - Delete item
router.delete('/:id', itemsController.deleteItem);

module.exports = router;


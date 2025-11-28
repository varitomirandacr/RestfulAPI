// In-memory data store (replace with database in production)
let items = [
  { id: 1, name: 'Item 1', description: 'Description for item 1', price: 10.99 },
  { id: 2, name: 'Item 2', description: 'Description for item 2', price: 20.99 },
  { id: 3, name: 'Item 3', description: 'Description for item 3', price: 30.99 }
];

let nextId = 4;

// Get all items
const getAllItems = (req, res) => {
  try {
    res.json({
      success: true,
      count: items.length,
      data: items
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// Get item by ID
const getItemById = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const item = items.find(item => item.id === id);

    if (!item) {
      return res.status(404).json({
        success: false,
        error: 'Item not found'
      });
    }

    res.json({
      success: true,
      data: item
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// Create new item
const createItem = (req, res) => {
  try {
    const { name, description, price } = req.body;

    // Validation
    if (!name || !description || price === undefined) {
      return res.status(400).json({
        success: false,
        error: 'Please provide name, description, and price'
      });
    }

    const newItem = {
      id: nextId++,
      name,
      description,
      price: parseFloat(price)
    };

    items.push(newItem);

    res.status(201).json({
      success: true,
      data: newItem
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// Update item
const updateItem = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const itemIndex = items.findIndex(item => item.id === id);

    if (itemIndex === -1) {
      return res.status(404).json({
        success: false,
        error: 'Item not found'
      });
    }

    const { name, description, price } = req.body;
    const updatedItem = {
      ...items[itemIndex],
      ...(name && { name }),
      ...(description && { description }),
      ...(price !== undefined && { price: parseFloat(price) })
    };

    items[itemIndex] = updatedItem;

    res.json({
      success: true,
      data: updatedItem
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// Delete item
const deleteItem = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const itemIndex = items.findIndex(item => item.id === id);

    if (itemIndex === -1) {
      return res.status(404).json({
        success: false,
        error: 'Item not found'
      });
    }

    const deletedItem = items.splice(itemIndex, 1)[0];

    res.json({
      success: true,
      message: 'Item deleted successfully',
      data: deletedItem
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

module.exports = {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem
};


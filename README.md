# Node.js RESTful API

A simple and clean RESTful API built with Node.js and Express.js.

## Features

- RESTful API architecture
- Express.js framework
- CORS enabled
- Request logging with Morgan
- Environment variable configuration
- Error handling middleware
- Clean project structure

## Project Structure

```
RestfulAPI/
├── controllers/          # Business logic
│   └── itemsController.js
├── middleware/           # Custom middleware
│   ├── errorHandler.js
│   └── notFound.js
├── routes/              # API routes
│   ├── index.js
│   └── items.js
├── server.js            # Main server file
├── package.json         # Dependencies
├── .gitignore          # Git ignore file
└── README.md           # This file
```

## Installation

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory:
```env
PORT=3000
NODE_ENV=development
```

## Running the Server

### Development Mode (with auto-reload)
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

The server will start on `http://localhost:3000` (or the port specified in your `.env` file).

## API Endpoints

### Items API

Base URL: `http://localhost:3000/api/items`

#### Get All Items
```http
GET /api/items
```

**Response:**
```json
{
  "success": true,
  "count": 3,
  "data": [
    {
      "id": 1,
      "name": "Item 1",
      "description": "Description for item 1",
      "price": 10.99
    }
  ]
}
```

#### Get Item by ID
```http
GET /api/items/:id
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "Item 1",
    "description": "Description for item 1",
    "price": 10.99
  }
}
```

#### Create New Item
```http
POST /api/items
Content-Type: application/json

{
  "name": "New Item",
  "description": "Item description",
  "price": 15.99
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 4,
    "name": "New Item",
    "description": "Item description",
    "price": 15.99
  }
}
```

#### Update Item
```http
PUT /api/items/:id
Content-Type: application/json

{
  "name": "Updated Item",
  "price": 25.99
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "Updated Item",
    "description": "Description for item 1",
    "price": 25.99
  }
}
```

#### Delete Item
```http
DELETE /api/items/:id
```

**Response:**
```json
{
  "success": true,
  "message": "Item deleted successfully",
  "data": {
    "id": 1,
    "name": "Item 1",
    "description": "Description for item 1",
    "price": 10.99
  }
}
```

## Testing with cURL

### Get all items
```bash
curl http://localhost:3000/api/items
```

### Get item by ID
```bash
curl http://localhost:3000/api/items/1
```

### Create new item
```bash
curl -X POST http://localhost:3000/api/items \
  -H "Content-Type: application/json" \
  -d '{"name":"New Item","description":"Item description","price":15.99}'
```

### Update item
```bash
curl -X PUT http://localhost:3000/api/items/1 \
  -H "Content-Type: application/json" \
  -d '{"name":"Updated Item","price":25.99}'
```

### Delete item
```bash
curl -X DELETE http://localhost:3000/api/items/1
```

## Dependencies

- **express**: Web framework for Node.js
- **cors**: Cross-Origin Resource Sharing middleware
- **morgan**: HTTP request logger middleware
- **dotenv**: Environment variable loader

## Dev Dependencies

- **nodemon**: Development tool that automatically restarts the server

## Next Steps

To enhance this API, consider:

1. **Database Integration**: Replace in-memory storage with a database (MongoDB, PostgreSQL, MySQL)
2. **Authentication**: Add JWT authentication for protected routes
3. **Validation**: Use libraries like Joi or express-validator for request validation
4. **Testing**: Add unit and integration tests (Jest, Mocha)
5. **Documentation**: Use Swagger/OpenAPI for API documentation
6. **Rate Limiting**: Add rate limiting middleware
7. **Logging**: Implement proper logging system (Winston, Pino)

## License

ISC


// In-memory data store (replace with database in production)
let rooms = {
  "Rooms": {
    "room0": {
      "code": "EGRZKVQ"
    },
    "room1": {
      "code": "74921343"
    },
    "room2": {
      "code": "solid"
    },
    "room3": {
      "code": "s0+cAcAI8p+zqhoIZtVjRr+HSLnTHp6NVa5YmTw1Ie4="
    },
    "room4": {
      "code": "67A1790DCA55B8803AD024EE28F616A284DF5DD7B8BA5F68B4B252A5E925AF79"
    },
    "room5": {
      "code": "realize, game, season, model, toward"
    },
    "room6": {
      "code": "30"
    },
    "room7": {
      "code": "lalala"
    },
    "room8": {
      "code": "2"
    },
    "room9": {
      "code": "dependency injection"
    },
    "room10": {
      "code": "el profe"
    }
  }
}


function getAnswerByRoomCode(roomName, inputValue) {
  // Check if the room exists
  if (!rooms.Rooms[roomName]) {
    return { match: false, error: "Room not found" };
  }
  
  // Get the stored code for the room
  const storedCode = rooms.Rooms[roomName].code;
  
  // Compare the input value with the stored code
  const isMatch = storedCode === inputValue;
  
  return { match: isMatch };
}

// Express route handler for checking room code
const checkRoomCode = (req, res) => {
  const { roomName, inputValue } = req.body;
  
  if (!roomName || inputValue === undefined) {
    return res.status(400).json({ 
      error: 'Missing required fields: roomName and inputValue are required' 
    });
  }
  
  const result = getAnswerByRoomCode(roomName, inputValue);
  
  if (result.error) {
    return res.status(404).json(result);
  }
  
  res.json(result);
};

module.exports = {
  getAnswerByRoomCode,
  checkRoomCode,
};


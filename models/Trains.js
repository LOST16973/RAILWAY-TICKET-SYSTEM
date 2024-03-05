const mongoose = require("mongoose");
const trainSchema = mongoose.Schema( {
              "type": "object",
              "properties": {
                "train_id": { "type": "string", "required": true },
                "train_name": { "type": "string", "required": true },
                "departure_station": { "type": "string", "required": true },
                "departure_time": { "type": "string", "format": "time", "required": true },
                "arrival_station": { "type": "string", "required": true },
                "arrival_time": { "type": "string", "format": "time", "required": true },
                "duration": { "type": "string", "required": true },
                "price": { "type": "number", "required": true },
                "available_seats": { "type": "number", "required": true },
                "class_info": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "class_name": { "type": "string", "required": true },
                      "available_seats": { "type": "integer", "required": true }
                    },
                    "required": ["class_name", "available_seats"]
                  },
                  "required": true
                }
              },
              "required": ["train_id", "train_name", "departure_station", "departure_time", "arrival_station", "arrival_time", "duration", "price", "available_seats", "class_info"]
            }
      )

const trainModel = mongoose.model('Trains',trainSchema)

module.exports = trainModel
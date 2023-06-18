const mongoose = require("mongoose");

const messageListSchema = new mongoose.Schema({
  room: { required: true, type: String },
  messages: [
    {
      user: { required: true, type: String },
      content: { required: true, type: String },
    },
  ],
});

module.exports = new mongoose.model("MessageList", messageListSchema);

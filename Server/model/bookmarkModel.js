const mongoose = require("mongoose");

const bookmarkSchema = new mongoose.Schema({
  date_added: String,
  guid: String,
  id: String,
  name: String,
  type: String,
  url: {
    type: String,
    required: true,
  },
  tags: Array,
});

module.exports = mongoose.model("Bookmarks", bookmarkSchema);

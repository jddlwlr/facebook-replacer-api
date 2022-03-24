const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/facebook-replacer", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;

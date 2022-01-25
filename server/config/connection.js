const mongoose = require('mongoose');
const dotenv = require('dotenv');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/sous-smart', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
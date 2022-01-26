const mongoose = require('mongoose');
const dotenv = require('dotenv');

// mongodb://localhost/sous-smart <-- OLD URI KEY (goes after the || if need to switch back)

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://James182:7FjUBMhra!ck8%407@cluster0.7lth2.mongodb.net/SouSmart?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
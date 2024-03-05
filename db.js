const mongoose = require('mongoose');
const mongoURL = 'mongodb://localhost:27017/Mern-Rail';

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true })
  

const connection = mongoose.connection;
connection.on('error',()=>{
  console.log('MongoDb connection failed')
})
connection.on('connected',()=>{
  console.log('MongoDb connection successful')
})


module.exports = mongoose;

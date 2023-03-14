const mongoose = require('mongoose');


 mongoose.connect('mongodb://127.0.0.1:27017/facebookclone')
  .then(() => console.log('MongoDB Connected!'));
  
  const mongodb =mongoose.connection

  mongodb.on('open',()=>{console.log("mongodb db connection is succesfull");})
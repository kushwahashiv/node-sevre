const mongoose = require('mongoose');  
const userSchema = new mongoose.Schema({  
  name: String,
  age: Number,
  dob: { type: Date, default: Date.now }
});


module.exports = mongoose.model('User', userSchema);

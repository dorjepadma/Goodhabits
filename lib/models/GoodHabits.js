const mongoose = require ('mongoose');

const schema = new mongoose.Schema({
  title: {
    type: String, 
    required: true
  },
  Date: {
    type: Date,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  goal: {
    type: Number, 
    required: true,
    min:0,
    max:11
  },
  progress: {
    type: Number, 
    required: true,
    min:0,
    max:11
  }
});

module.exports = mongoose.model('Habit', schema);

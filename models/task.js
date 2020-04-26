const mongoose = require('mongoose');

//Create the schema
const taskSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

//Name the collection in database
const Task = mongoose.model('Task', taskSchema);

//Export the collection
module.exports = Task;

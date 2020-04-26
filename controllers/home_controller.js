//include mongoose
const db = require('../config/mongoose');
//include collection
const Task = require('../models/task');

module.exports.home = function (req, res) {
  Task.find({}, function (err, tasks) {
    if (err) {
      console.log(`Error in finding tasks ${err}`);
      return;
    }
    return res.render('home', { title: 'ToDo App', task_List: tasks });
  });
};

module.exports.create = function (req, res) {
  var oldDate = req.body.date;

  Task.create(
    {
      description: req.body.description,
      category: req.body.category,
      date: oldDate,
    },
    function (err, newTask) {
      if (err) {
        console.log('Error in the creating a task');
        return;
      }
      console.log('*******', newTask);
      return res.redirect('back');
    }
  );
};

module.exports.delete = function (req, res) {
  let task_item = req.body.id;

  //if only one task at a time is to be deleted
  if (!Array.isArray(task_item)) {
    Task.findByIdAndDelete(task_item, function (err) {
      if (err) {
        console.log(`Error in deleting from db ${err}`);
        return;
      }
      console.log('Successfully deleted from database');
    });
  } else {
    console.log(task_item);

    for (i of task_item) {
      Task.findByIdAndDelete(i, function (err) {
        if (err) {
          console.log(`Error in deleting from db ${err}`);
          return;
        }
        console.log('Successfully deleted from database');
        return;
      });
    }
  }

  return res.redirect('back');
};

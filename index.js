const express = require('express');
const port = 8000;

//include mongoose
const db = require('./config/mongoose');
//include collection
const Task = require('./models/task');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('./assets'));
app.use(express.urlencoded());

//Use express router
app.use('/', require('./routes'));
app.locals.moment = require('moment');

// app.get('/', function (req, res) {
//   //To find all the tasks
//   Task.find({}, function (err, tasks) {
//     if (err) {
//       console.log(`Error in finding tasks ${err}`);
//       return;
//     }
//     return res.render('home', { title: 'ToDo App', task_List: tasks });
//   });
// });

// app.post('/create-task', function (req, res) {
//   var oldDate = req.body.date;

//   Task.create(
//     {
//       description: req.body.description,
//       category: req.body.category,
//       date: oldDate,
//     },
//     function (err, newTask) {
//       if (err) {
//         console.log('Error in the creating a task');
//         return;
//       }
//       console.log('*******', newTask);
//       return res.redirect('back');
//     }
//   );
// });

// app.post('/delete-task', function (req, res) {
//   let task_item = req.body;
//   console.log(req.body);
//   for (let i of task_item) {
//     let delid = i.remTask;
//     Task.findByIdAndDelete(delid, function (err) {
//       if (err) {
//         console.log(`Error in deleting from db ${err}`);
//         return;
//       }
//       console.log('Successfully deleted from database');
//     });
//   }
//   return res.redirect('back');
// }); //sir method ko post krna h?not necessary

app.listen(port, function (err) {
  if (err) {
    console.log(`Error in firing server ${err}`);
    return;
  }
  console.log(`Server is up and running with port ${port}`);
});

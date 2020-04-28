const express = require('express');
const port = 8000;

//include mongoose
const db = require('./config/mongoose');
//include collection
const Task = require('./models/task');

//Use express
const app = express();

//To set up the view engine ejs
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('./assets'));
app.use(express.urlencoded());

//Use express router
app.use('/', require('./routes'));
app.locals.moment = require('moment');

//To fire up the server
app.listen(port, function (err) {
  if (err) {
    console.log(`Error in firing server ${err}`);
    return;
  }
  console.log(`Server is up and running with port ${port}`);
});

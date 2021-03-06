require('dotenv').config()
const createError = require('http-errors');
const express = require('express');
const cors = require('cors')
const path = require('path');
// const cookieParser = require('cookie-parser');
// const logger = require('morgan');

// const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/users');

const app = express();
const port = process.env.PORT || 3000

const gitRouter = require('./routes/git')

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(cors())


app.use('/', gitRouter)




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err); // ku ubah jadi send
});

app.listen(port, () => {
  console.log(`I'm running on port ${port}`);
})

module.exports = app;

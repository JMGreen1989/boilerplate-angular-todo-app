const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const dataRouter = require('./server/router');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

if(app.get('env') === 'development') {
  var allowCrossDomain = (req, res, next) => {
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    // res.setHeader('Access-Control-Allow-Credentials', "true");
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
  }
  app.use(allowCrossDomain);
}

app.use('/api', dataRouter);

app.listen(PORT, () => {
  console.log(`Server up and listening on port ${PORT}, in ${app.get('env')} mode.`);
});



module.exports = app;

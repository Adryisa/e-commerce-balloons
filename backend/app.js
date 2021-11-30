const express = require('express');
const { json, urlencoded } = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');
const dbConnection = require('./config/dbConnection');

dotenv.config();
const app = express();
dbConnection();

app.use(morgan('dev'));
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/**', (req, res) => {
  res.status(404).json({
    message: 'Not found',
  });
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
   return {   
       err.message === 'Not found'
    ? res.json({
        message: 'Element/Page not found',
        error: err,
      })
    : res.json({
        message: err.message,
        error: err,
      })
   }
});

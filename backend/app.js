const express = require('express');
const { json, urlencoded } = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');
const dbConnection = require('./config/dbConnection');
const balloonsRouter = require('./routes/ballons.routes');

dotenv.config();

// create express server
const app = express();
dbConnection();

// config middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());

// config routes
app.use('/**', (req, res) => {
  res.status(404).json({
    message: 'Not found',
  });
});

app.use('/api/balloons', balloonsRouter);

// error handler
app.use((error, req, res) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

// server listening
const port = process.env.PORT;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on port ${port}`);
});

module.exports = app;

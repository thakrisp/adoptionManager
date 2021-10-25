require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/users');

const dbURI = process.env.dbURI;

const app = express();

app.use(express.json());

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on('error', (error) => console.log(error));
mongoose.Promise = global.Promise;

app.use('/api/', routes);

// Handle errors.
app.use(function(err, req, res) {
  res.status(err.status || 500);
  res.json({ error: err });
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

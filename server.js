const express = require('express');

const bodyParser = require('body-parser');
const errorHandler = require('./_middleware/error-handler');

const routes = require('./routes');
const PORT = process.env.PORT || 3000;
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', routes);

// global error handler
app.use(errorHandler);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
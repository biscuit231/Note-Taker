const express = require('express');
// const apiR = require('./routes/api');
// const htmlR = require('./routes/html');
const h = require('./routes/apiRoute')(htmlRoute);
const a = require('./routes/apiRoute')(apiRoute);

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

const PORT = process.env.PORT || 3001;

app.use('/api', a);
app.use('/', h);

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));

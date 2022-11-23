const express = require('express');
const apiR = require('./routes/api.js');
const htmlR = require('./routes/html.js');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

const PORT = process.env.PORT || 3001;

app.use('/api', apiR);
app.use('/', htmlR);

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));

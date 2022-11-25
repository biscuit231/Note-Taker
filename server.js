const express = require('express');
require('./routes/api')(app);
require('./routes/html')(app);
// const h = require('./routes/apiRoute');
// const a = require('./routes/apiRoute');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

const PORT = process.env.PORT || 3001;

// app.use('/api', apiR);
// app.use('/', htmlR);

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));

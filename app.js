const express = require('express');
const app = express();
const indexController = require('./controllers/indexController');

app.use(express.static('public'));

app.get('/', indexController.getIndexPage);

// port server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}/`)
});
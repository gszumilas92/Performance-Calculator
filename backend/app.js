const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3000;

const index = fs.readFileSync(__dirname + '/../dist/index.html', 'utf8')

//Settings
app.use('/', express.static(__dirname + '/../dist'));
mongoose.connect("mongodb://test:test@ds113936.mlab.com:13936/performance-calculator")

//Controllers
const calculatorController = require('./controllers/calculatorController');

calculatorController(app);





//Return Index
app.get('/', (req, res) => {
    res.send(index);
});

console.log(`App listening on port ${port}`)
app.listen(port);
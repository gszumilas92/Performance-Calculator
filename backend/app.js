const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3000;

const index = fs.readFileSync(__dirname + '/../dist/index.html', 'utf8')

//Settings
app.use('/', express.static(__dirname + '/../dist'));
// mongoose.connect("mongodb://admin:testadmin@ds227045.mlab.com:27045/szumilas-cms")

//Controllers
const calculatorController = require('./controllers/calculatorController');

calculatorController(app);





//Return Index
app.get('/', (req, res) => {
    res.send(index);
});

console.log(`App listening on port ${port}`)
app.listen(port);
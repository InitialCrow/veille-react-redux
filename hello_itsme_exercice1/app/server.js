'use strict'


let express = require('express')
let path = require('path')
let app = express()

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname + '/')));

app.get('/', function (req, res) {
 	res.render('index')
});

app.listen(8000, function () {
  console.log('===================================================');
});

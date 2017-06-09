var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');
// var patient = require('./routes.patient');

var app = express();


//view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//set static folder
app.use(express.static(path.join(__dirname, 'client')));

//body parser mw
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use('/', index);
// app.use('/api', patient);


app.listen(4000);
console.log('portal started on port 4000');
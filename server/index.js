const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');


const app =express();
app.set('port', (process.env.PORT || 4400));

mongoose.Promise = global.Promise;

app.use(bodyParser.json());

//init app
//build part of the react app
//uncoment this after npm build
app.use('/', express.static(path.join(__dirname, '../dist')));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '../dist/app/index.html'));
});

//err
app.use(function(err, req, res, next){
  //console.log(err);
  res.status(422).send({error: err.message})
});

//port
app.listen(app.get('port'), function () {
    console.log('App listening on port ' + app.get('port'));
});

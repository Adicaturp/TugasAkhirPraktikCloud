'use strict'

const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const app =express();
var port = 3000;

//import models
require('./app/models/sweater');

//views
app.use(express.static('public/'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.set('views',__dirname + '/app/views');
app.set ('view engine','jade');

//routes
var sweater_routes = require('./app/controllers/sweater');
app.use('/sweater',sweater_routes);
app.get('/',function(req,res){
res.redirect('/sweater');
});

//main loop
connect()
 .on('error',console.log)
 .on ('disconnected',connect)
 .once('open',listen);
 
 function listen (){
 app.listen(port);
 console.log ('Express app started on port'+port);
 }
 
 function connect () {
  var options = {server: {socketOptions: {keepAlive: 1}}};
  return mongoose.connect('mongodb://localhost/cloud',options).connection;
  }
'use strict';

const mongoose = require('mongoose');
const schema = mongoose.Schema;

var sweaterschema = new schema({
	merek : String,
	bahan : String,
	ukuran:String,
});

module.export = mongoose.model('sweater',sweaterschema);
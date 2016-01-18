'use strict';

const router = require('express').Router();
const mongoose = require('mongoose');
var sweater = mongoose.model('sweater');

router.get ('/', function(req,res){
	sweater.find({}).exec(function(err,sweater){
	res.render('sweater_index',{data :sweater});
});
});

//tambah data
router.get('/tambah',function(req,res){
	res.render('sweater_tambah',{title:'tambah_sweater', data:''});
});

router.post('/tambah',function(req,res){
	var merek = req.body.merek;
	var bahan = req.body.bahan;
	var ukuran = req.body.ukuran;
	
	var sweaterbaru = new sweater({merek:merek,bahan:bahan,ukuran:ukuran});
	sweaterbaru.save(function(err) {
		if (err) throw err;
		res.redirect('/sweater');
	});
});

//ubah data
router.get('/ubah/:sweater_id([0-9a-z]+)',function(req,res){
	sweater.findOne({_id:req.params.sweater_id}).exec(function(err,sweater){
		if (err)throw err;
		res.render('sweater_tambah',{title:'ubah_sweater',data:sweater});
	});
});

router.post('/ubah/:sweater_id([0-9a-z]+)',function(req,res){
	var data_terubah = req.body;
	sweater.findOneAndUpdate({_id:req.params.sweater_id},data_terubah).exec(function(err){
		if (err)throw err;
		res.redirect('/sweater');
	});
});

// hapus data
router.get('/hapus/:sweater_id([0-9a-z]+)',function(req,res){
	sweater.findOneAndRemove({_id:req.params.sweater_id}).exec(function(err,baju){
		if (err)throw err;
		res.redirect('/sweater');
	});
});

module.exports = router;

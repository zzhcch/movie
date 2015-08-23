var express = require('express');
var router = express.Router();
var db=require('../public/javascripts/db-open');
var xls2json = require('../public/javascripts/xls2json');
var query=require('../public/javascripts/db-findDate');
router.get('/', function (req, res, next) {
    res.render('report-index');
});
router.get('/report-index',function(req,res){
   res.render('report-index');
});
router.get('/report-beling',function(req,res){
    res.render('report-beling');
});
router.get('/report-import',function(req,res){
    res.render('report-import');
});
router.get('/report-wb',function(req,res){
    res.render('report-wb');
});
router.get('/report-wpl',function(req,res){
    res.render('report-wpl');
});




router.post('/import', function (req, res) {
    xls2json.xls2json(req.body.filename, req.body.sheet,db);
    res.render('report-import',{message:"导入成功!"});
});
router.post('/beling-query',function(req,res){
    console.log(req.body.date);

     query(req.body.date,function(data){
         console.log(data);
        res.send(data);
     });


});
router.post('/test',function(req,res){

    var json={"aa":"123","bb":"234"};

    res.json(json);
});

module.exports = router;

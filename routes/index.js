var express = require('express');
var mysql=require("./mysql.js");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/fetch', function(req, res, next) {
    mysql.query("select * from category",function(err,result){
      res.send(JSON.stringify(result));
    })

});

router.get('/fetch/:id', function(req, res, next) {
    mysql.query("select * from list where cid="+req.params.id,function(err,result){
        res.send(JSON.stringify(result));
    })

});


module.exports = router;

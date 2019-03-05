var express = require('express');
var router = express.Router();
router.get('/list',function(req,res,next){
    res.send('分类列表页')
});
router.get('/show',function(req,res,next){
    res.send('分类详情页')
});
module.exports = router;
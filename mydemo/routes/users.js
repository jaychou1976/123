var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/list', function(req, res, next) {
  res.send('用户列表页');
});
router.get('/show', function(req, res, next) {
  res.send('用户详情页');
});

module.exports = router;

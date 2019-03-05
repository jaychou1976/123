var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '后台管理页面' });
});
router.get('/list', function(req, res, next) {
  let data={
    head:'文章列表显示',
    itemLists:[
      {title:'express原理',author:'tom'},
      {title:'express路由',author:'alice'},
      {title:'express的request方法',author:'zhangs'},
      {title:'express的response',author:'lis'},
    ]
  }
  res.render('list',{data:data});
});

//params传值 
router.get('/show/:id', function(req, res, next) {
  res.send('我是文章详情页'+req.params.id);
});

// res.send()方法
router.get('/demo1',function(req,res,next){
  res.send('我是send方法')
})
// res.render()方法  渲染页面
router.get('/demo2',function(req,res,next){
  res.render('html/demo')
})
// res.redirect()方法  重定向到某个页面
router.get('/demo3',function(req,res,next){
  res.redirect('/list')
})
// res.json方法 转换为json格式
router.get('/demo4',function(req,res,next){
  res.json({
    code:200,
    data:[
      {title:'express原理',author:'tom'},
      {title:'express路由',author:'alice'}
    ]
  })
})

// request req.params方法
router.get('/demo5/:user/:age',function(req,res,next){
  res.send('req.params方法'+req.params.age)
})
// request req.query方法
router.get('/demo6',function(req,res,next){
  res.send('req.query方法'+req.query.user)
})

// 登录的操作 分两步
// 1.get显示 （登录页面）
router.get('/login',function(req,res,next){
  res.render('login')
})
// 2.post 接受表单信息
router.post('/login',function(req,res,next){
  console.log(req.body)
  res.send('来自表单信息req.body的传值')
})
module.exports = router;

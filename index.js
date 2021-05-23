const express = require('express');
// const serverless = require('serverless-http');
const app = express();
const path = require('path');
const router = express.Router();
app.use(express.static(path.join(__dirname, '/public')));


router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));

});

router.get('/about',function(req,res){
  res.sendFile(path.join(__dirname+'/about.html'));
});

router.get('/contact',function(req,res){
  res.sendFile(path.join(__dirname+'/contact.html'));
});

router.get('/attributes',function(req,res){
    res.sendFile(path.join(__dirname+'/attributes.html'));
});


//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

// module.exports.handler=serverless(app);
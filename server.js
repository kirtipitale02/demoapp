const express = require('express');
 const path = require('path');
 const app = express();
 app.use(express.static(__dirname + '/demoapp'));
 app.get('/*',function(req,res){
     res.sendfile(path.join(__dirname+ '/demoapp/index.html'));
 });
 app.listen(process.env.PORT || 8080);
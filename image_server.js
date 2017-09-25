var express = require('express');
var multer  = require('multer');
var cors = require('cors')


var storage = multer.diskStorage({
    destination: function(req, file, callback){
        callback(null, './uploads');
    },
    filename: function(req, file, callback){
        callback(null, Date.now()+"_"+file.originalname);
    }
});

var upload = multer({storage: storage}).single('myFile');

var app = express();
app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
  });
  
app.use(cors());
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended:true
}));

app.use(bodyParser.json());


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/files');
//To get the access for the functions defined in index.js class
//var routes = require('./routes/imagefile.js')(app);

app.get('/image', function(req, res){
    res.send('hello world');
  });
  
  // accept one file where the name of the form field is named photho
  app.post('/image', function(req, res){
  
    upload(req, res, function(err){
        if(err){
            return res.end("Error in uploading file");
        }
        res.end("file has been uploaded");
    });
  });
  

var server = app.listen(3003, function(){
    console.log('server running at http://127.0.0.1:3003');
});

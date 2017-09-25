var express = require('express')
var app = express();

var bodyParser = require('body-parser');
// app.use(express.staticProvider(__dirname + '/view'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));
app.engine('html', require('ejs').renderFile);
app.get('/', function(req, res) {
    res.render(__dirname + '/view/index.html');
});


var server = app.listen(3004, function(){
    console.log('server running at http://127.0.0.1:3004');
});


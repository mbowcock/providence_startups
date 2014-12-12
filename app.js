var express = require('express')
  , routes = require('./routes/routes.js');

var app = express();
var bodyParser = require('body-parser');
// Configuration

app.set('views', __dirname + '/views'); 
app.set('view engine', 'jade');
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + '/public'));

// Routes
app.get('/', routes.index);
app.get('/submit', routes.submit);
app.post('/submit', routes.submitHandle);
app.get('/api', routes.show_documentation);
app.get('/api/startups/:operation.:format', routes.api);

app.listen(3001, function(){
  console.log("Providence startups starting up....");
});

var db = require('../config.js'),
	pg = require('pg'), 
    connectionString = db.config.connectionString;

function getStartups(){
	pg.connect(connectionString, function(err, client){
		client.query('select id, name, description, url, hiring, "hiringUrl" from startups where active=TRUE', function(err, result){
				return result.rows;
		});
	});
};

exports.index = function(req, res){
	pg.connect(connectionString, function(err, client){
		client.query('select id, name, description, url, hiring, "hiringUrl" from startups where active=TRUE', function(err, result){
			if(!result){
				res.return("no data found");
			} else {
				res.render('index', { dbRows: result.rows });
			}
		});
	});
};

exports.show_documentation = function(req, res){
	res.render('api');
};

exports.api = function(req, res){
	// the db access needs to refactored out of here. Its the same code as the index route handler.
	var operation = req.params.operation;
	if(operation == "list"){
		pg.connect(connectionString, function(err, client){
			client.query('select id, name, description, url, hiring, "hiringUrl" from startups', function(err, result){
				if(!result){
					res.return("no data found");
				} else {
					//var json = JSON.stringify(result.rows);
					//res.writeHead(200, {'Content-type':'application/json', 'content-length':json.length});
					//lengthres.write(json);
					res.send(result.rows);
				}
			});
		});
	}else{
		res.send("404 doesn't exist");
	}
};

exports.submit = function(req, res){
	res.render('submit');
};

exports.submitHandle = function(req, res){
	var client = new pg.Client(connectionString);
	client.connect();
	client.query('insert into startups (name, description, url, hiring, "hiringUrl") values ($1, $2, $3, $4, $5)', [req.body.name, req.body.description, req.body.url, req.body.hiring, req.body.hiringUrl]);
	res.redirect('/');
};

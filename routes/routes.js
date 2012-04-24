var db = require('../config.js'),
	pg = require('pg'), 
    connectionString = db.config.connectionString;

exports.index = function(req, res){
	pg.connect(connectionString, function(err, client){
		client.query('select id, name, description, url, hiring, "hiringUrl" from startups', function(err, result){
			if(!result){
				res.return("no data found");
			} else {
				res.render('index', { dbRows: result.rows });
			}
		});
	});
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

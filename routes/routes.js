/*
 * GET index
 */
var pg = require('pg')
  , connectionString = 'postgres://postgres:513556@localhost/startups';

client = new pg.Client(connectionString);
client.connect();

exports.index = function(req, res){
	var rows=[];
	query = client.query('select id, name, description, url, hiring, "hiringUrl" from startups');
	query.on('row', function(row){
		rows.push(row);
	});
	query.on('end', function(row){
		res.render('index', { dbRows: rows });
	});
};

exports.submit = function(req, res){
	res.render('submit');
};

exports.submitHandle = function(req, res){
	client.query('insert into startups (name, description, url, hiring, "hiringUrl") values ($1, $2, $3, $4, $5)', [req.body.name, req.body.description, req.body.url, req.body.hiring, req.body.hiringUrl]);
	res.redirect('/');
};

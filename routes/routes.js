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

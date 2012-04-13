/*
 * GET index
 */
var pg = require('pg')
  , connectionString = 'postgres://postgres:513556@localhost/startups';
var rows = [];

client = new pg.Client(connectionString);
client.connect();

exports.index = function(req, res){
	query = client.query('select id, name, description, url, hiring, "hiringUrl" from startups');
	query.on('row', function(row){
		rows.push(row);
	});
	res.render('index', { dbRows: rows });
};

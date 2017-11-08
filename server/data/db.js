const { Pool } = require('pg');
const TABLES = require('./tables');
const {DATABASE_CONFIG} = require('../config');

const pool = new Pool(DATABASE_CONFIG);

module.exports.test = function()
{
	console.log('called test');
	const query = 'SELECT * FROM ' + TABLES.USERS;
	pool.query(query).then(res => {
		console.log('res:',res.rows[0]);
	})
	.catch(e => {
		console.error('query error', e.message, e.stack);
	});
}
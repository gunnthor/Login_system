/*
* Contains all config variables for the application, credentials, URLs etc.
*
*/

/* CONFIG VARIABLES */

const local_db = 'signup_db';
const LOCAL_USER = 'postgres';
const LOCAL_PWD = '36etxFEjbO';

module.exports.DATABASE_CONFIG = selectDbConfig();


/* CONFIG FUNCTIONS */

function selectDbConfig(){
	let config = {};

	if(process.env.DATABASE_URL)
	{
		const params = url.parse(process.env.DATABASE_URL);
		const auth = params.auth.split(':');

		config = {
		  user: auth[0],
		  password: auth[1],
		  host: params.hostname,
		  port: params.port,
		  database: params.pathname.split('/')[1],
		  ssl: true
		};
	}

	else
	{		
		config = {
		  user: LOCAL_USER, //env var: PGUSER 
		  database: local_db, //env var: PGDATABASE 
		  password: LOCAL_PWD, //env var: PGPASSWORD 
		  //port: 5432, //env var: PGPORT 
		  //max: 10, // max number of clients in the pool 
		  //idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed 
		};
	}

	return config;
}
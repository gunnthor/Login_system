const { Pool } = require('pg');
const tables = require('./tables');
const {DATABASE_CONFIG} = require('../config');

const pool = new Pool(DATABASE_CONFIG);

function test()
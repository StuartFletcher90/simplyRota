//*require essentials
const mysql = require('mysql')
const { promisify } = require('util')
const {password} = require ("./password")


//connect to mysql
const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password: `${password}`,
    database: "simplyRota"
})

const promisifiedQuery = promisify(connection.query).bind(connection);

//* Methods


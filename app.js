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

const addUser = async (user) => {
    try {
        const queryStringAdd = `INSERT INTO users(users) VALUES ("${user}")`;
        let data = await promisifiedQuery (queryStringAdd);
        return(data);
    }   catch (error) {
        console.log (error.sqlMessage);
        
    }
};

    //*require essentials
const mysql = require('mysql')
const { promisify } = require('util')
const { password } = require("./passwords")

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

        // user={username:'Geo',password:'Geo'}
        const queryStringAdd = `INSERT INTO users(admin_status,username,pass) VALUES ("Y","Geo","password")`;
        let data = await promisifiedQuery (queryStringAdd);
        return(data);
    }   catch (error) {
        console.log (error.sqlMessage);
        
    }
};

// addUser()


const signIn = async () => {

    try {

        const queryString = `SELECT id FROM users WHERE username = 'Geo';`
        let data = await promisifiedQuery(queryString)


        if (data[0] !== undefined){
            console.log(data[0].id)
            return data[0].id
        }

        else{
            console.log("user does not exist")
            return false
        }         
    }

    catch (error) {
        console.log('Sign in Error')
        console.log(error)
    }
}

signIn()

module.exports = {
    addUser,
    signIn
}
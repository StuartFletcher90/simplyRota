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
        const queryStringAdd = `INSERT INTO users(admin_status,username,pass) VALUES ("N","Stef","password")`;
        let data = await promisifiedQuery (queryStringAdd);
        return(data);
    }   catch (error) {
        console.log (error.sqlMessage);
        
    }
};

//addUser()

// sign in function which checks whether username exists and returns their id and admin status
const signIn = async () => {

    try {
        const queryString = `SELECT id, admin_status FROM users WHERE username = 'Stef'`;
        let data = await promisifiedQuery(queryString)

// console.logs their admin status if true

        if (data[0] !== undefined && data[0].admin_status=="Y"){
                console.log('admin')
                return {
                    id: data[0].id,
                    status: data[0].admin_status
                }
            }

//console.logs their admin status as false

        else if (data[0] !== undefined && data[0].admin_status=="N"){
            console.log('staff')
            return {
                id: data[0].id,
                status: data[0].admin_status
            }
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

//signIn()


const addShift = async ()=>{
    try{
        const queryString = `INSERT INTO shifts(start_time,end_time)VALUES("9AM","5PM")`
        let data = await promisifiedQuery(queryString)
        console.log(data)
        // return data
    }

    catch (error) {
        console.log('add shift error')
        return (error.code)
    }
}

module.exports = {
    addUser,
    signIn,
    addShift
}
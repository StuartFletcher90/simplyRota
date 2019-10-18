//require essentials
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
user = {
    first_name : "Ben",
    last_name : "Franklin",
    gender : "M",
    hours_contracted : 35,
    email : "ben@gmail.com",
    username : "Benfranco",
    user_password : "benny",
    job_title : "Assistant Carer",
    admin_status : "N",
    driving_status : "Y",
    skills : "Fortnight",
    annual_leave_entitlement: 25,


}

const addUser = async (user) => {
    //add user will take a object as an input, below are the variables that will be used in the query
    //this function will take req.body as an input which will have all the various inputs of info as key-value pairs
    try {

        // let comments= user.comments
        // took out comments otherwise if a comment isn't added upon user creation this will cause an error. This way comments are optional and can be added later.
        const queryStringAdd = `INSERT INTO staff (first_name,last_name,gender,hours_contracted,username,email,user_password,job_title,admin_status,driving_status,skills,annual_leave_entitlement)
        VALUES ('${user.first_name}',
        '${user.last_name}',
        '${user.gender}',
        '${user.hours_contracted}',
        '${user.username}',
        '${user.email}',
        '${user.user_password}',
        '${user.job_title}',
        '${user.admin_status}',
        '${user.driving_status}',
        '${user.skills}',
        '${user.annual_leave_entitlement}');`
        console.log(queryStringAdd)
        let data = await promisifiedQuery (queryStringAdd);
        console.log(data)
        return(data);
    }   catch (error) {
        console.log (error.sqlMessage);
    }
 };





// addUser(user)

// sign in function which checks whether username exists and returns their id and admin status
const signIn = async (username) => {

    try {
        const queryString = `SELECT id FROM staff WHERE username = '${username}'`;
        let data = await promisifiedQuery(queryString)

        if (data[0] !== undefined){
                console.log(data[0].id)
                return {
                    id: data[0].id,
                }
            }
        
        else { return ("Username doesnt exists")}
        }

    catch (error) {
        console.log('Sign in Error')
        console.log(error)
    }
    connection.end()
}


newShift = {
    clientLocation : '2 Elm Street',
    firstName : null,
    lastName : null,
    startTime : '10:00:00',
    endTime : '16:30:00',
    shiftDate : '2019-10-19',
    hoursWorked : 6.5,
}
// newShift = {
//     clientLocation : '2 Elm Street',
//     firstName : null,
//     lastName : null,
//     startTime : '10:00:00',
//     endTime : '16:30:00',
//     shiftDate : '2019-10-19',
//     hoursWorked : 6.5,


// }

const addShift = async (shift)=>{

    
    try{
        let client_id_query =  `SELECT id FROM clients WHERE client_location = '${shift.clientLocation}'`
        let client_id = await promisifiedQuery(client_id_query)

        let staff_id_query = `SELECT id FROM staff WHERE first_name='${shift.firstName}' AND last_name='${shift.lastName}'`
        let staff_id = await promisifiedQuery(staff_id_query)
        // if(shift.firstName){
        //     let staff_id = await `SELECT id FROM staff WHERE first_name='${shift.firstName}' AND last_name='${shift.lastName}'`

        //     const queryString = `INSERT INTO shifts(start_time,end_time, shift_date, hours_worked, client_id, staff_id)
        // VALUES('${shift.startTime}', '${shift.endTime}', '${shift.shiftDate}', '${shift.hoursWorked}', '${client_id}', '${staff_id}');`
        // let data = await promisifiedQuery(queryString)
        // console.log(data)
        // return data
        // } else {
        //     let staff_id = null

        //     const queryString = `INSERT INTO shifts(start_time,end_time, shift_date, hours_worked, client_id, staff_id)
        // VALUES('${shift.startTime}', '${shift.endTime}', '${shift.shiftDate}', '${shift.hoursWorked}', '${client_id}', '${staff_id}');`
        // let data = await promisifiedQuery(queryString)
        // console.log(data)
        // return data
        // }

        if(shift.firstName){
            let staff_id_query = `SELECT id FROM staff WHERE first_name='${shift.firstName}' AND last_name='${shift.lastName}'`
            let staff_id = await promisifiedQuery(staff_id_query)


        const queryString = `INSERT INTO shifts(start_time,end_time, shift_date, hours_worked, client_id, staff_id)
        VALUES('${shift.startTime}', '${shift.endTime}', '${shift.shiftDate}', '${shift.hoursWorked}', '${client_id[0].id}', '${staff_id[0].id}');`
        let data = await promisifiedQuery(queryString)
        console.log(data)
        return data

        }
        else {
            let staff_id = null


        const queryString = `INSERT INTO shifts(start_time,end_time, shift_date, hours_worked, client_id, staff_id)
        VALUES('${shift.startTime}', '${shift.endTime}', '${shift.shiftDate}', '${shift.hoursWorked}', '${client_id[0].id}', ${staff_id});`
        let data = await promisifiedQuery(queryString)
        console.log(data)
        return data

        }

        

     
    // console.log(staff_id[0].id)
    // console.log(client_id[0].id)

       
    }

    catch (error) {
        console.log('add shift error')
        console.log(error.sqlMessage)

      
        return (error.sqlMessage)
    }
}

const editShift = async (shift) => {

    let start = shift.start
    let end = shift.end
    let date = shift.date
    let client = shift.client
    let staff = shift.staff
    let hours = shift.hours
    let id = shift.id
    try{
        const queryString = `UPDATE shifts SET start_time='${start}', end_time='${end}', shift_date='${date}', client_id='${client}', staff_id='${staff}', hours_worked='${hours}' where id=${id}`;
        let data = await promisifiedQuery(queryString)
        return data
    }

    catch (error) {
        console.log('edit reminder error')
        console.log(error.sqlMessage)
    }

    connection.end()
}

//* testing edit shift
// let shift = {
//     start:"10:00:00",
//     end:"12:00:00",
//     date:"2019-10-17",
//     client:2,
//     staff:1,
//     hours:2,
//     id:1
// }

//editShift(shift)

// Delete shifts
let shift_to_delete = {
    clientLocation: "4 Village Mews",
    startTime: "09:00:00",
    endTime: "17:00:00",
    shiftDate: "2019-10-17",
    hoursWorked: 8.0,


}

const deleteShift = async (shift) => {
    try {

    //getting client id from client location
    let client_id_query = `SELECT id FROM clients
    WHERE client_location = '${shift.clientLocation}';`
    let client_id = await promisifiedQuery(client_id_query)

    console.log(client_id[0].id)

    //getting shift id from shift information in the shift card
    // let shift_id_query = `SELECT id FROM shifts
    // WHERE start_time = '${shift.startTime}', AND end_time ='${shift.endTime}' AND shift_date ='${shift.shiftDate}' AND
    // client_id = '${client_id[0].id}' ;`
    // let shift_id = await promisifiedQuery(shift_id_query)

    // console.log(shift_id)

    //deleting shift
    let queryStringAdd = `DELETE FROM shifts
    WHERE start_time = '${shift.startTime}' AND end_time ='${shift.endTime}' AND shift_date ='${shift.shiftDate}' AND
    client_id = ${client_id[0].id};`
    let data = await  promisifiedQuery(queryStringAdd)

    Return (data)
    
    }
    catch(e){
    console.log(e.sqlMessage)
    // console.log(shift)
    }
    }
// deleteShift(shift_to_delete)

module.exports = {
    addUser,
    signIn,
    addShift,
    editShift,
    listShifts,
    deleteShift
}
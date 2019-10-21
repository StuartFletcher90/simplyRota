const express = require("express");
const path = require("path");
const bodyParser = require('body-parser')

const port = process.env.PORT || 3003;

const {addUser, signIn, addShift, listShifts, deleteShift, editShift} = require("./app")


//?---------- incase of access cors error ==========?//
// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     next();
// });

const app = express();
app.use("/admin", express.static(path.join(__dirname, "admin")))
app.use("/",express.static(path.join(__dirname, "landing")))
app.use("/staff", express.static(path.join(__dirname, "staff")))

//to allow HTTP requests
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.post("/register",  (req) => {
    let user = {
        first_name : req.body.firstName,
        last_name : req.body.lastName,
        gender : req.body.gender,
        hours_contracted :  req.body.hoursContracted,
        email : req.body.email,
        username : req.body.username,
        user_password : req.body.password,
        job_title :  req.body.jobTitle,
        admin_status :  req.body.adminAccess,
        driving_status : req.body.drivingStatus,
        skills : req.body.skills,
        annual_leave_entitlement: req.body.annualLeave
    }
    console.log(user)
    console.log(req.body)
    // addUser is only expected 1 parameter, 
    // so can't have a bunch of req.queries separated by commas.
    // Instead create a user object with the 
    // req.queries and use that as the function parameter.
    addUser(user)
    // console.log(data)
    console.log("user has been registered")
 });



//sign in
app.get("/signIn", async (req, res) => {
    let data = await signIn(req.query.username)
    res.send(data)
})

//display
app.get("/display", async (req, res) => {
    let data = await read(
        req.query.id
    )
    res.send(data)
})

//add shift
app.post("/addShift", (req, res) => {
   
    shift = {
        clientLocation : req.body.clientLocation,
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        startTime : req.body.startTime,
        endTime : req.body.endTime,
        shiftDate : req.body.shiftDate,
        hoursWorked : req.body.hoursWorked,
    }
    addShift(shift)
    console.log("added shift")
});


// app.post("/addShift", (req, res) => {
//     let staff_fullName = req.body.staff_fullName

//     let fullNameSplit = staff_fullName.split(' ')

   
//     shift = {
//         clientLocation : req.body.clientLocation,
//         firstName : fullNameSplit[0],
//         lastName : fullNameSplit[1],
//         startTime : req.body.startTime,
//         endTime : req.body.endTime,
//         shiftDate : req.body.shiftDate,
//         hoursWorked : req.body.hoursWorked,
//     }
 
//     addShift(shift)
  
//     console.log("added shift")

// });


//delete shift
// app.get("/deleteShift", async (req, res) => {
//     let data = await deleteShift(
//         req.query.shift
//     )
//     res.send(data)
//     console.log("deleted shift")
// })

app.post("/deleteShift", (req, res) => {
    let shift = {
    staffName: req.body.staffName,
    startTime : req.body.startTime,
    endTime: req.body.endTime,
    shiftDate: req.body.shiftDate,
    hoursWorked: req.body.hoursWorked,
    clientLocation: req.body.clientLocation
    }
    deleteShift(shift)
    res.send(data)
    console.log("deleted shift")

    }) 

//list shifts for particular date

app.get("/admin/list-shifts", async (req, res) => {
    let data = await listShifts(req.query.shift_date);
    console.log({data:data});
    res.send({data: data});
})

//url where server exists
app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})

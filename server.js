const express = require("express");
const path = require("path");
const bodyParser = require('body-parser')

const port = process.env.PORT || 3003;

const {addUser, signIn, addShift, listShifts} = require("./app")

//import functions
//const {functions} = require('/lib/app')


//incase of access cors error
// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     next();
// });

const app = express();
app.use(express.static(path.join(__dirname, "public/landing")))


//to allow HTTP requests
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//sign up for staff
app.get("/register", async (req, res) => {
    await addUser(req.body.addUser)
    console.log("user has been registered")
})


//sign in
app.get("/signIn", async (req, res) => {
    let data = await signIn(
        req.query.username,
        req.query.password
        )
    res.send(data)
    console.log("signed in user")
})

//display
app.get("/display", async (req, res) => {
    let data = await read(
        req.query.id
    )
    res.send(data)
})

//add shift
app.get("/addShift", async (req, res) => {
    let data = await addShift(
        req.query.employer,
        req.query.client,
        req.query.date,
        req.query.startTime,
        req.query.endTime
    )
    res.send(data)
    console.log("added shift")

})


//delete shift
app.get("/deleteShift", async (req, res) => {
    let data = await deleteShift(
        req.query.shift
    )
    res.send(data)
    console.log("deleted shift")
})

//list shifts for particular date

app.get("/list-shifts", async (req, res) => {
    let data = await listShifts(req.query.shift_date);
    console.log({data:data});
    res.send({data: data});
})

//url where server exists
app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})

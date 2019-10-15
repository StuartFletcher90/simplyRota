const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3003;

//import functions
//const {functions} = require('/lib/app')


//incase of access cors error
// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     next();
// });

app.use(express.static(path.join(__dirname, "public")))

//sign up for admin
app.get("/admin/register", async (req, res) => {
    await addUser(
        req.query.firstName,
        req.query.lastName,
        req.query.username,
        req.query.password
        )
    console.log("user has been registered")
})

//sign up for staff
app.get("/admin/register", async (req, res) => {
    await addUser(
        req.query.firstName,
        req.query.lastName,
        req.query.gender,
        req.query.hoursContracted,
        req.query.jobTitle,
        req.query.username,
        req.query.password
        )
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

//admin display
app.get("/admin/display", async (req, res) => {
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


app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})






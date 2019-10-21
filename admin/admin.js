// whats with all the global variables? - Stu   <----- so u can use them ?! 
const signout = document.getElementsByClassName("signout");
const username = document.getElementsByClassName("username");
const datedrop = document.getElementById("date-drop");
const searchbtn = document.getElementById("search-button");
const dateSelect = document.getElementById('dateSelect')
// const addButton = document.getElementById("addButton");
const shiftTime = document.getElementsByClassName("shift-time");
const shiftClient = document.getElementsByClassName("shift-client");
const shiftLocation = document.getElementsByClassName("shift-location");
const shifStaffNames = document.getElementsByClassName("shift-staff-names");
const hoursWorked = document.getElementsByClassName("hours-staff-worked");
const informationButton = document.getElementsByClassName("shift-client-details-button");
const editButton = document.getElementsByClassName("shift-edit-shift-button");
const deleteButton = document.getElementsByClassName("shift-delete-button");
const formSubmitButton = document.getElementsByClassName("new-client-submit");
const newClientWrapper = document.getElementById("new-client-wrapper");
//--v- geo's variables -v--//
const modal = document.getElementById("add-shift-modal");
const closer = document.getElementById("closer");
const addShiftFormBtn = document.getElementById("add-shift-form-btn");
const addShiftBtn = document.getElementById("addShift-Btn");

signout.addEventListener("click",(out)=> {
filename=location.pathname.substring(location.pathname.lastIndexOf("/"));
document.getElementsByClassName("singout").href= "landing/"; 
    function out() {
        alert ("Signed Out!");
      }
})


//---------- show add shift form ----------//
addShiftFormBtn.addEventListener("click", () => {
    modal.style.display = "block";
    console.log("add a shift button has been clicked")
})


//---------- close form on close ----------//
closer.addEventListener("click", () => {
    modal.style.display = "none";
})


//---------- close form when clicked off form ----------//
window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


//---------- add shift ----------//
addShiftBtn.addEventListener("click", async () => {
    // only close form on submit when required inputs have been entered
    if(document.getElementById("assignedFirstName").value != ""
        && document.getElementById("assignedLastName").value != ""
        && document.getElementById("clientChosen").value != ""
        && document.getElementById("startTime").value != ""
        && document.getElementById("endTime").value != ""
        && document.getElementById("duration").value != ""
        ){
            modal.style.display = "none";
            console.log("add shift button has been clicked")
        }
})




//!---- Please check this as it's stopping the page from working
// deleteButton.addEventListener('click', async (shift_id) => {
//     // document.getElementById('load').innerHTML="Loading..."
//     let response = await fetch(`"/deleteShift"${shift_id}`);
//     let data = await response.json()
//     console.log(data)
// });

// searchbtn.addEventListener('click', async () => {
//     let shiftDate = dateSelect.value
//     console.log(`requesting shift for date of ${shiftDate}`)
//     let response = await fetch(`/lists-shifts?shift_date=${shiftDate}`)
//     let data = await response.json()
//     console.log(data)
//     // displayData(data)
// })
                        
// const fetchData = async () => {
//     console.log("Fetching data!")
    
//     let response = await fetch(`/lists-shifts=${}`)
//     let data = await response.json()
    

//     console.log(data)
//     // displayData(data)

// }
// fetchData()
// shift-cards-wrapper
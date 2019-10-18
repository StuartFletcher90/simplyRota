const signout = document.getElementsByClassName("signout");
const username = document.getElementsByClassName("username");
const datedrop = document.getElementById("date-drop");
const searchbtn = document.getElementById("search-button");
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
const modal = document.getElementById("add-shift-modal");
const closer = document.getElementById("closer");
const addShiftBtn = document.getElementById("add-shift-btn");

// const fetchData = async () => {
//     console.log("Fetching data!")
    
//     let response = await fetch(`/lists-shifts=${}`)
//     let data = await response.json()
    

//     console.log(data)
//     // displayData(data)

// }
// fetchData()
// shift-cards-wrapper


//---------- show add shift form ----------//
addShiftBtn.addEventListener("click", () => {
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
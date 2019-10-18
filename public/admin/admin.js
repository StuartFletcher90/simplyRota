// whats with all the global variables? - Stu
const signout = document.getElementsByClassName("signout");
const username = document.getElementsByClassName("username");
const datedrop = document.getElementById("date-drop");
const searchbtn = document.getElementById("search-button");
const dateSelect = document.getElementById("dateSelect");
const addButton = document.getElementById("addButton");
const shiftTime = document.getElementsByClassName("shift-time");
const shiftClient = document.getElementsByClassName("shift-client");
const shiftLocation = document.getElementsByClassName("shift-location");
const shifStaffNames = document.getElementsByClassName("shift-staff-names");
const hoursWorked = document.getElementsByClassName("hours-staff-worked");
const informationButton = document.getElementsByClassName("shift-client-details-button");
const editButton = document.getElementsByClassName("shift-edit-shift-button");
const deleteButton = document.getElementsByClassName("shift-delete-button");
const formSubmitButton = document.getElementsByClassName("new-client-submit");
const addBtn = document.getElementById("addButton");

// display add shift elements
const newClientWrapper = document.getElementById("new-client-wrapper");









searchbtn.addEventListener('click', async () => {

    let shiftDate = dateSelect.value
    console.log(`requesting shift for date of ${shiftDate}`)
    let response = await fetch(`/lists-shifts?shift_date=${shiftDate}`)
    let data = await response.json()
    console.log(data)
    // displayData(data)

})








// fetchData()
// shift-cards-wrapper

// function myFormFunction() {
//     document.getElementById("new-client-wrapper").style.display="block";
//  }
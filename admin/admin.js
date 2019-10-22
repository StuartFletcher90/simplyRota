<<<<<<< HEAD
=======

>>>>>>> 23227974d6a72949de5d3301c1a8dfd5b5bf9086
// whats with all the global variables? - Stu   <----- so u can use them ?! 
const signout = document.getElementById("signout");
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

//--v- geo's variables -v--//
const modal = document.getElementById("add-shift-modal");
const closer = document.getElementById("closer");
const addShiftFormBtn = document.getElementById("add-shift-form-btn");
const addShiftBtn = document.getElementById("addShift-Btn");
const newClientWrapper = document.getElementById("new-client-wrapper");

const shiftCardsWrapper = document.getElementById("shift-cards-wrapper")


// ---------- Display all shift cards ------//

const displayData = (shiftData) => {

  console.log(shiftData.data[0])

  shiftCardsWrapper.innerHTML = ""  // clear every time its loaded


  shiftData.data.map((shiftDatesObject) => {

      

      // create the div with shift content in it

      let shiftCard = document.createElement("div")
      shiftCard.className = "shift-card"

      // shiftCard.setAttribute("data", shiftDatesObject.shift_id)  **** SHIFT ID in DOM ****

      shiftCardsWrapper.appendChild(shiftCard)


      // shiftDatesObject.staff_name = null  // **** TEMP TEST

      if(shiftDatesObject.staff_name == null){
        console.log('no staff name')
        shiftCard.className = "shift-card unassigned" // unassigned so make card warning colours
        console.table(shiftDatesObject)
      } 
      else 
      {
        let shiftClient = document.createElement("h5")
        shiftClient.className = "shift-client"
        shiftClient.innerHTML = shiftDatesObject.client_name
        shiftCard.appendChild(shiftClient)
      }



      let shiftTime = document.createElement("h5")
      shiftTime.className = "shift-time"
      shiftTime.innerHTML = `Time: ${shiftDatesObject.start_time} - ${shiftDatesObject.end_time}`
      shiftCard.appendChild(shiftTime)


      let shiftLocation = document.createElement("h5")
      shiftLocation.className = "shift-location"
      shiftLocation.innerHTML = `Location: ${shiftDatesObject.client_location}`
      shiftCard.appendChild(shiftLocation)

      // let numberOfStaff = shiftDatesObject.staff_name  
      // assumes one name for now - in future this should store an object of names and loop for all the names
      
      
      let shiftStaffNames = document.createElement("h5")
      shiftStaffNames.className = "shift-staff-names"
      shiftStaffNames.innerHTML = shiftDatesObject.staff_name
      shiftCard.appendChild(shiftStaffNames)


      let hoursStaffWorked = document.createElement("h5")
      hoursStaffWorked.className = "hours-staff-worked"
      hoursStaffWorked.innerHTML = ` Duration: ${shiftDatesObject.hours_worked}`
      shiftCard.appendChild(hoursStaffWorked)

      // ******* MISSING
      // let shiftClientDetailsButton = document.createElement("button")
      // shiftClientDetailsButton.className = "shift-client-details-button"
      // siftClientDetailsButton.setAttribute("data-shiftDetail", "")
      // shiftClientDetailsButton.innerHTML = '<i class="fas fa-info-circle"></i>'
      

      let shiftEditShiftButton = document.createElement("button")
      shiftEditShiftButton.className = "shift-edit-shift-button"
      shiftEditShiftButton.innerHTML = '<i class="fas fa-edit"></i>'
      shiftCard.appendChild(shiftEditShiftButton)


      let shiftDeleteButton = document.createElement("button")
      shiftDeleteButton.className = "shift-delete-button"
      shiftDeleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>'
      shiftCard.appendChild(shiftDeleteButton)

      console.table(shiftDatesObject)

  })
}





/****   Listen for events on the edit and delete buttons */

// const deleteReminder = async (id) => {
//   console.log("Deleting a shift")
//   let response = await fetch("/deleteShift", {
//       method:"DELETE",
//       headers: { "content-type" : "application/json" },
//       body: JSON.stringify({
//           deleteReminder: {"user_id" : user_id, "reminder_id": id}
//       })
//   })

//   let result = await response.json()

//   if (result.message === "Deleted reminders ok") {
//       readReminders()
//   }
//   else {
//       console.log("Deleting failed!")
//   }
// }






signout.addEventListener("click",()=> {
location.pathname="/"
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
window.onclick = ((event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
})


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



//---------  Date Picker gets all Shifts from a date --------//
searchbtn.addEventListener('click', async () => {

    let shiftDate = dateSelect.value
    console.log(`requesting shift for date of ${shiftDate}`)
    let response = await fetch(`/admin/list-shifts?shift_date=${shiftDate}`)
    let data = await response.json()
    // console.log(data)
    displayData(data)
})


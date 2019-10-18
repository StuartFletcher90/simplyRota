// whats with all the global variables? - Stu
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
const modal = document.getElementById("add-shift-modal");
const closer = document.getElementById("closer");
const addShiftFormBtn = document.getElementById("add-shift-form-btn");
const addShiftBtn = document.getElementById("addShift-Btn");
const newClientWrapper = document.getElementById("new-client-wrapper");

const shiftCardsWrapper = document.getElementById("shift-cards-wrapper")


// ---------- Display all shift cards ------//

const displayData = (shiftData) => {

  // console.log(data.data[0])

  shiftCardsWrapper.innerHTML = ""  // clear every time its loaded

  // for(i=0; i<shiftData.data.length; i++){

  //   console.log(shiftData.data[i])
  // }

  shiftData.data.map((shiftDatesObject) => {

      console.table(shiftDatesObject)

      // create the div with shift content in it

      let div = document.createElement("div")
      shiftCard.className = "shift-card"

      shiftCardsWrapper.appendChild(shiftCard)

      let shiftClient = document.createElement("h5")
      shiftClient.className = "shift-client"
      shiftClientDetailsButton.innerHTML = // **** nned this
      // Need to appendChild to shiftCard


      let shiftTime = document.createElement("h5")
      shiftTime.className = "shift-time"
      shiftClientDetailsButton.innerHTML =


      let shiftLocation = document.createElement("h5")
      shiftLocation.className = "shift-location"
      shiftClientDetailsButton.innerHTML =


      let shiftClient = document.createElement("h5")
      shiftStaffNames.className = "shift-staff-names"
      shiftClientDetailsButton.innerHTML =


      let shiftClient = document.createElement("h5")
      hoursStaffWorked.className = "hours-staff-worked"
      shiftClientDetailsButton.innerHTML =


      let shiftClient = document.createElement("button")
      shiftClientDetailsButton.className = "shift-client-details-button"
      siftClientDetailsButton.setAttribute("data-shiftDetail", "")h
      shiftClientDetailsButton.innerHTML = '<i class="fas fa-info-circle"></i>'

      
      let shiftClient = document.createElement("button")
      shiftEditShiftButton.className = "shift-edit-shift-button"
      shiftClientDetailsButton.innerHTML = '<i class="fas fa-edit"></i>'


      let shiftClient = document.createElement("button")
      shiftDeleteButton.className = "shift-delete-button"
      shiftClientDetailsButton.innerHTML = '<i class="fas fa-trash-alt"></i>'


  })


}

{/* <div class="shift-cards-wrapper">
<div class="shift-card">
    <h5 class="shift-client">Client: Miss Rogers</h5>
    <h5 class="shift-time">Time: 9:00 - 14:00</h5>
    <h5 class="shift-location">Location:Chester</h5>
    <h5 class="shift-staff-names">Amanda,Lisa</h5>
    <h5 class="hours-staff-worked">Duration:69</h5>
    <button class="shift-client-details-button" data-shiftDetail=""><i class="fas fa-info-circle"></i></button>
    <button class="shift-edit-shift-button"><i class="fas fa-edit"></i></button>
    <button class="shift-delete-button"><i class="fas fa-trash-alt"></i></button>
 */}











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
  if(document.getElementById("assignedTo").value != ""
      && document.getElementById("clientChosen").value != ""
      && document.getElementById("startTime").value != ""
      && document.getElementById("endTime").value != ""
      && document.getElementById("duration").value != ""
      ){
          modal.style.display = "none";
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




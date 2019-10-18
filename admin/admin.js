// whats with all the global variables? - Stu
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
const addShiftFormBtn = document.getElementById("add-shift-form-btn");
const addShiftBtn = document.getElementById("addShift-Btn");
// const fetchData = async () => {
//     console.log("Fetching data!")
    
//     let response = await fetch(`/lists-shifts=${}`)
//     let data = await response.json()
    

//     console.log(data)
//     // displayData(data)

// }
// fetchData()
// shift-cards-wrapper


deleteButton.addEventListener('click', async (shift_id) => {
    // document.getElementById('load').innerHTML="Loading..."
   let response = await fetch(`"/deleteShift"${shift_id}`);
   let data = await response.json()
   console.log(data)
});


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
//    console.log(document.getElementById("assignedTo").value )
   // only close form on submit when required inputs have been entered
   if(document.getElementById("assignedTo").value != ""
       // && document.getElementById("clientChosen").value != null
       // && document.getElementById("startTime").value != null
       // && document.getElementById("endTime").value != null
       // && document.getElementById("duration").value != null
       ){
           modal.style.display = "none";
           console.log("should hide the modal only if all the required inputs have been entered")
       }
})

//importing the elements of the card to be deleted
// const cardToDelete = document.getElementById("card-to-delete")


const cl = document.getElementById('clientLocation')
const ss = document.getElementById('shiftStart')
const se = document.getElementById('shiftEnd')
const sn = document.getElementById('shiftName')
const sd = document.getElementById('shiftDate')
const sh = document.getElementById('shiftHours')

const xdeleteBtn = document.getElementById("xdelete")

xdeleteBtn.addEventListener('click', async ()=> {
   const shiftToDelete = {
       clientLocation: cl.textContent,
        shiftStart: ss.textContent,
        shiftEnd: se.textContent,
        shiftName: sn.textContent,
        shiftDate: sd.textContent,
        shiftHours: sh.textContent

    }

     await fetch(`/deleteShift?shift=${shiftToDelete}`)
// //    let data =  await fetch(`/deleteShift?shift=${shiftToDelete}`)

   console.log(shiftToDelete)
})




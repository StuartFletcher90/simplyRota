//declaring elements from index.html
const splash = document.getElementById("splash");
const splashTwo = document.getElementById("splash-two");
const logInBtn = document.getElementById("logIn");
const signUpBtn = document.getElementById("signUp");
const returnBtn = document.getElementById("return");
const registerBtn = document.getElementById("registerBtn");
const logMeInBtn = document.getElementById("logMeIn");
const usernameInput = document.getElementById("username")
const modal = document.getElementById("register-modal");
const closer = document.getElementById("closer");

//when landing (default), only show logIn or signUp buttons
splash.style.display="block";
splashTwo.style.display="none";
returnBtn.style.display="none";
registerBtn.style.display="none";
logMeInBtn.style.display="none";


//---------- go to log in ----------//
logInBtn.addEventListener("click", ()=> {
    splash.style.display="none";
    logMeInBtn.style.display="block";
    splashTwo.style.display="block";
    returnBtn.style.display="block";
    console.log("log in has been clicked");

});

//---------- return to landing page ----------//
returnBtn.addEventListener("click", () => {
    splash.style.display="block";
    splashTwo.style.display="none";
    returnBtn.style.display="none";
    registerBtn.style.display="none";
    logMeInBtn.style.display="none";
    console.log("return has been clicked");
})

//---------- show register form ----------//
signUpBtn.addEventListener("click", () => {
    modal.style.display = "block";
    // splash.style.display="none";
    // splashTwo.style.display="none";
    // returnBtn.style.display="block";
    registerBtn.style.display="block";
    console.log("sign up has been clicked");
})

//---------- register a new user ----------//
registerBtn.addEventListener("click", async () => {
    // displays the log in stuff only when required inputs have been entered
    if(document.getElementById("usernameSetter").value != null
        && document.getElementById("passwordSetter").value != null
        && document.getElementById("firstName").value != null
        && document.getElementById("lastName").value != null
        && document.getElementById("email").value != null
        && document.querySelector('input[name="adminAccess"]:checked').value != null
        && document.getElementById("jobTitle").value != null
        && document.getElementById("hoursContracted").value != null
        && document.getElementById("annualLeave").value != null
        && document.querySelector('input[name="gender"]:checked').value != null
        && document.querySelector('input[name="drivingStatus"]:checked').value != null
        ){
            splash.style.display="none";
            splashTwo.style.display="block";
            returnBtn.style.display="block";
            registerBtn.style.display="none";
            modal.style.display="none";
            console.log("registered button has been clicked")
        }
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


//!---------- I don't know what this is ----------!//
//   const heading = document.getElementById("lead-heading");
//   heading.charAt(6).style.color = "red";

//* SIGN IN BUTTON

logMeInBtn.addEventListener("click", async () => {
    let response = await fetch(`/signIn?username=${usernameInput.value}`) // fetch endpoint
    let data = await response.json()
    if (data.id){console.log(data.id)} // if id exists, console.log it
})

const signIn = async () => {
    const username = usernameInput.value;

    let response = await fetch(`/signin?username=${username}`)
    let data = await response.json()
    console.log(data);

    if (data.id) {
        location.pathname = "./admin/index.html"
    }
    else {
        alert('Username not recognised! Please check your username or sign up.')
    }
}


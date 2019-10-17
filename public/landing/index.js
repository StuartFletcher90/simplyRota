//declaring elements from index.html
const splash = document.getElementById("splash");
const splashTwo = document.getElementById("splash-two");
const logInBtn = document.getElementById("logIn");
const signUpBtn = document.getElementById("signUp");
const returnBtn = document.getElementById("return");
const registerBtn = document.getElementById("register");
const logMeInBtn = document.getElementById("logMeIn");
const modal = document.getElementById("register-modal")
// const span = document.getElementsByClassName("close")[0]

//when landing (default), only show logIn or signUp buttons
splash.style.display="block";
splashTwo.style.display="none";
returnBtn.style.display="none";
registerBtn.style.display="none";
logMeInBtn.style.display="none";


logInBtn.addEventListener("click", ()=> {
    splash.style.display="none";
    logMeInBtn.style.display="block";
    splashTwo.style.display="block";
    returnBtn.style.display="block";
    console.log("log in has been clicked");

});

returnBtn.addEventListener("click", () => {
    splash.style.display="block";
    splashTwo.style.display="none";
    returnBtn.style.display="none";
    registerBtn.style.display="none";
    logMeInBtn.style.display="none";
    console.log("return has been clicked");
})

signUpBtn.addEventListener("click", () => {
    modal.style.display = "block";
    // splash.style.display="none";
    // splashTwo.style.display="none";
    // returnBtn.style.display="block";
    // registerBtn.style.display="block";
    console.log("sign up has been clicked");
})

registerBtn.addEventListener("click", () => {
    //displays the log in stuff
    splash.style.display="none";
    splashTwo.style.display="block";
    returnBtn.style.display="block";
    registerBtn.style.display="none";
    modal.style.display="none";
    console.log("registered button has been clicked")
})

// span.addEventListener("click", () => {
//     modal.style.display = "none";
// })

window.onclick = (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  const heading = document.getElementById("lead-heading");
  
  heading.charAt(6).style.color = "red";



// logInBtn.addEventListener("click", async () => {
//     console.log("log in has been clicked")

//     let response = await fetch(`/signIn?username=${usernameInput.value}&password=${password}`)
//     let data = await response.json()
//     console.log(data)
// })

// signUpBtn.addEventListener("click", async () => {
//     console.log("sign up has been clicked")

//     await fetch(`/register?username=${usernameInput.value}&password=${password}`)
//     console.log("user has been registered")

// })

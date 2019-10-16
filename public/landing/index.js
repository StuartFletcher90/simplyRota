// hide elements of the login

const splashTwo = document.getElementById("splash-two");
const splash = document.getElementById("splash");
const returnBtn = document.getElementById("return");
const signUp = document.getElementById("signUp");
const registerBtn = document.getElementById("register");

splashTwo.style.display="none";
splash.style.display="block";
returnBtn.style.display="none";
registerBtn.style.display="none";

login.addEventListener("click", ()=> {
    splashTwo.style.display="block";
    splash.style.display="none";
    returnBtn.style.display="block";

});

returnBtn.addEventListener("click", () => {
    splashTwo.style.display="none";
    splash.style.display="block";
    returnBtn.style.display="none";
    registerBtn.style.display="none";
})

signUp.addEventListener("click", () => {
    splashTwo.style.display="none";
    splash.style.display="none";
    returnBtn.style.display="block";
    registerBtn.style.display="block";
})

///

const logInBtn = document.getElementById("login")
const signUpBtn = document.getElementById("sign-up")
const usernameInput = document.getElementById("username")
const passwordInput = document.getElementById("password")

logInBtn.addEventListener("click", async () => {
    console.log("log in has been clicked")

    // let response = await fetch(`/signIn?username=${usernameInput.value}&password=${password}`)
    // let data = await response.json()
    // console.log(data)
})

signUpBtn.addEventListener("click", async () => {
    console.log("sign up has been clicked")

    // await fetch(`/register?username=${usernameInput.value}&password=${password}`)
    // console.log("user has been registered")

})

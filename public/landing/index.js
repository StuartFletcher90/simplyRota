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


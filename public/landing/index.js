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

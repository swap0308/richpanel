const register = document.getElementById("register");

document.getElementById("changeToSignIn").addEventListener('click', (e) => {
    e.preventDefault();
    register.style.display = "none";
})

document.getElementById("changeToRegister").addEventListener('click', (e) => {
    e.preventDefault();
    register.style.display = "block";
})

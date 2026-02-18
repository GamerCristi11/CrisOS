console.log("Password is 0000");
function login() {
    const pass = document.getElementById("password");
    if (pass.value === "0000") {
        window.location.href = "main.html";
    } else {
        alert("Incorrect password, check console to see the correct password.");  
    }
}

let welcomeshow = localStorage.getItem("warningshow?");

if (welcomeshow === "false") {
    document.getElementById("warning").style.display = "none";
}

function warningnot() {
    localStorage.setItem("warningshow?", "false");
    document.getElementById("warning").style.display = "none";
}
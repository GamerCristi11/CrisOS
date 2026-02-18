const audio = document.getElementById('BootAudio');
audio.play();

let welcomeshow = localStorage.getItem("welcomeshow?");

if (welcomeshow === "false") {
    document.getElementById("welcome").style.display = "none";
}

function welcomenot() {
    localStorage.setItem("welcomeshow?", "false");
    document.getElementById("welcome").style.display = "none";
}
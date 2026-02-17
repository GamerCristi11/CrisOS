function updateTime() {
    var currentTime = new Date().toLocaleString();
    var timeText = document.querySelector("#time-top");
    timeText.textContent = currentTime;
}
setInterval(updateTime, 1000);
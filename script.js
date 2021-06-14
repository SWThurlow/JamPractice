/*Countdown to start of the jam*/
const startClock = document.querySelector('.startClock');

const startDate = new Date(2021, 6, 9, 11, 00, 00).getTime();

function updateStartTime(){
    const now = new Date().getTime();
    const timeLeft = startDate - now;

    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24))/(1000 * 60 * 60));
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000)

    startClock.textContent = `Days: ${days} Hours: ${hours} Minutes: ${minutes} Seconds: ${seconds}`

    if(timeLeft < 0) clearInterval(startInterval);
}

let startInterval = setInterval(updateStartTime, 1000);
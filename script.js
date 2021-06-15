/*Countdown to start of the jam*/
const dom =( () => {
	const hours = document.querySelector(".hours");
	const days = document.querySelector(".days");
	const minutes = document.querySelector(".minutes");
	const seconds = document.querySelector(".seconds");

	return {
		hours,
		days,
		minutes,
		seconds
	}
})();

function updateStartTime() {
	const startDate = new Date(2021, 6, 9, 11, 00, 00).getTime();
    const now = new Date().getTime();
    const timeLeft = startDate - now;

    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24))/(1000 * 60 * 60));
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    dom.days.textContent = days; 
    dom.hours.textContent = hours; 
    dom.minutes.textContent = minutes; 
    dom.seconds.textContent = seconds; 

    if(timeLeft < 0) clearInterval(startInterval);
}

let startInterval = setInterval(updateStartTime, 1000);

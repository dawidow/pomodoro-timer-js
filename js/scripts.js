const timer = document.querySelector(".timer__time");
const start = document.querySelector(".timer__start");
const stop = document.querySelector(".timer__stop");
const reset = document.querySelector(".timer__reset");
const work = document.querySelector(".options__work");
const breakTime = document.querySelector(".options__break");

let seconds = 0,
	active = false,
	intervalID;

const startTimer = mins => {
	seconds = mins * 60 || 0;
	active = !active;

	if (active) {
		intervalID = setInterval(time, 1000);
	}
};

const time = () => {
	seconds--;
	minutes = Math.floor(seconds / 60);
	sec = seconds % 60;

	if (sec < 10) {
		sec = `0${sec}`;
	}

	console.log(seconds);
	timer.textContent = `${minutes}:${sec}`;

	if (seconds === 0) {
		clearInterval(intervalID);
	}
};

start.addEventListener("click", startTimer(1));

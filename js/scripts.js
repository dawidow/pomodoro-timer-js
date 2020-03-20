const timer = document.querySelector(".timer__time");
const start = document.querySelector(".timer__start");
const stop = document.querySelector(".timer__stop");
const reset = document.querySelector(".timer__reset");
const work = document.querySelector(".options__work");
const breakBtn = document.querySelector(".options__break");
const current = document.querySelector(".currently__mode");

let seconds = 0,
	active = false,
	intervalID;

const startTimer = mins => {
	clearInterval(intervalID);

	if (!active) {
		timer.textContent = "25:00";
		seconds = mins * 60 || 0;
	}

	active = true;

	current.textContent = "WORK";

	if (active) {
		intervalID = setInterval(time, 1000);
	}
};

const breakTimer = mins => {
	resetTime();
	clearInterval(intervalID);

	if (!active) {
		timer.textContent = "5:00";
		seconds = mins * 60 || 0;
	}

	active = true;

	current.textContent = "BREAK";

	if (active) {
		intervalID = setInterval(time, 1000);
	}
};

const resetTime = () => {
	clearInterval(intervalID);
	timer.textContent = "25:00";
	active = false;
	current.textContent = "-";
};

const stopTime = () => {
	clearInterval(intervalID);
	current.textContent = "PAUSE";
};

const showMessage = () => {
	const modal = document.querySelector(".modal");

	modal.classList.remove("hidden");
	setTimeout(() => {
		modal.classList.add("hidden");
	}, 5000);
};

const time = () => {
	seconds--;
	minutes = Math.floor(seconds / 60);
	sec = seconds % 60;

	if (sec < 10) {
		sec = `0${sec}`;
	}

	timer.textContent = `${minutes}:${sec}`;

	if (seconds === 0) {
		clearInterval(intervalID);
		playSound();
		showMessage();
	}
};

const playSound = () => {
	let mp3Source = '<source src="../audio/notification.mp3" type="audio/mpeg">';
	let oggSource = '<source src="../audio/notification.ogg" type="audio/ogg">';
	let embedSource =
		'<embed hidden="true" autostart="true" loop="false" src="../audio/notification.mp3">';
	document.querySelector(".sound").innerHTML =
		'<audio autoplay="autoplay">' + mp3Source + oggSource + embedSource + "</audio>";
};

start.addEventListener(
	"click",
	function() {
		startTimer(25);
	},
	false
);
stop.addEventListener("click", stopTime, false);
reset.addEventListener("click", resetTime, false);
work.addEventListener(
	"click",
	function() {
		resetTime();
	},
	false
);
work.addEventListener(
	"click",
	function() {
		startTimer(25);
	},
	false
);

breakBtn.addEventListener(
	"click",
	function() {
		breakTimer(5);
	},
	false
);

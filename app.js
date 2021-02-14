const navEl = document.querySelector(".nav");
const navTriggerEl = document.querySelector(".hamburger");
const hamburgerBarsEl = document.getElementsByTagName("span");
const contentEl = document.querySelector(".content");

function navToggle () {
	navTriggerEl.addEventListener("click", function(){
		navEl.classList.toggle("open");
		contentEl.classList.toggle("shift");
		animateBars();
	});
}

function animateBars() {
	for (let item of hamburgerBarsEl) {
		item.classList.toggle("change");
	}
}

navToggle();
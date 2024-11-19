const NAV = document.querySelector("nav");
const CROSS = document.getElementById("cross");
const BURGER = document.getElementById("hamburger");
const WIDE = 1366;

let navClass = NAV.getAttribute("class");
let brgClass = BURGER.getAttribute("class");
let crsClass = CROSS.getAttribute("class");

function openNav() {
	NAV.setAttribute("class", "display");
	CROSS.setAttribute("class", "display");
	BURGER.setAttribute("class", "no-display");
}

function closeNav() {
	NAV.setAttribute("class", "no-display");
	CROSS.setAttribute("class", "no-display");
	BURGER.setAttribute("class", "display");
}

function wideNav() {
	NAV.setAttribute("class", "display");
	BURGER.setAttribute("class", "no-display");
	CROSS.setAttribute("class", "no-display");
}

function sizeNav() {
	if (window.innerWidth >= WIDE) {
		wideNav();
	} else {
		closeNav();
	}
};

window.addEventListener("resize", () => {
	sizeNav();
	console.log(window.innerWidth);
});


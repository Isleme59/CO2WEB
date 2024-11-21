const NAV = document.querySelector("nav");
let iconAction;
const WIDE = 1366;

function openNav() {
	iconAction = document.getElementById("hamburger");
	NAV.setAttribute("class", "display");
	iconAction.setAttribute("onclick", "closeNav()");
	iconAction.setAttribute("id", "cross");
};

function closeNav() {
	iconAction = document.getElementById("cross");
	NAV.setAttribute("class", "hide");
	iconAction.setAttribute("id", "hamburger");
	iconAction.setAttribute("onclick", "openNav()");
};

function wideNav() {
	NAV.setAttribute("class", "display");
	BURGER.setAttribute("class", "no-display");
	CROSS.setAttribute("class", "no-display");
};

function sizeNav() {
	if (window.innerWidth >= WIDE) {
		wideNav();
	} else {
		closeNav();
	}
};

window.addEventListener(
	"resize", () => {
		sizeNav();
		console.log(window.innerWidth);
	}
);
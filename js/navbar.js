const BODY = document.querySelector("body");
const NAV = document.querySelector("nav");
const FNAV = document.querySelector("footer").children[2].children[0].children;

let i = 0;
let fList;
let fLink;

const footerLink = () => {
	fLink.setAttribute("onclick", "noAnim()")
};

function noAnim() {
	iconAction = document.getElementById("hamburger");
	iconAction.setAttribute("id", "hamburgerInit");
}

while (i < FNAV.length) {
	fList = FNAV[i];
	fLink = fList.children[0];
	if (fLink.className === "active") { } else {
		footerLink(fLink);
	}
	console.log(fLink);
	i++;
}

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
	if (iconAction) {
		iconAction.setAttribute("id", "hamburger");
		iconAction.setAttribute("onclick", "openNav()");
	}
};

function wideNav() {
	NAV.setAttribute("class", "display");
	if (iconAction) iconAction.setAttribute("class", "no-display");
};

function sizeNav() {
	if (window.innerWidth >= WIDE) {
		wideNav();
	} else {
		iconAction = document.getElementById("hamburger");
		iconAction.setAttribute("onclick", "openNav()");
		NAV.setAttribute("class", "no-display");
	}
};

window.addEventListener(
	"resize", () => {
		sizeNav();
	}
);

document.addEventListener("DOMContentLoaded", () => sizeNav());
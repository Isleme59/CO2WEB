const NAV = document.querySelector("nav");
const CROSS = document.getElementById("cross");
const BURGER = document.getElementById("hamburger");

function openNav(){
	NAV.setAttribute("class", "display");
	CROSS.setAttribute("class", "display");
	BURGER.setAttribute("class", "no-display");
}

function closeNav(){
	NAV.setAttribute("class", "no-display");
	CROSS.setAttribute("class", "no-display");
	BURGER.setAttribute("class", "display");
}
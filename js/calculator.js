//variables
let distanceValue;
let workingDaysValue;
let carboneDist;
let daysPerMonth;
let total;
let carbonAmount = document.getElementById("carbonAmount");
let displayStatus = "no-display";

//comstantes
const FLEX = "flex";
const POPBG = document.getElementById("popupbg");
const POPUP = document.getElementById("popup");
const FORM = document.querySelector("form");
const DISTANCE = document.getElementById("distance");
const WORKINGDAYS = document.getElementById("working-days");
const SUBMIT = document.querySelector("input[type=submit]");

POPUP.setAttribute("class", displayStatus);
POPBG.setAttribute("class", displayStatus);

//calcul des émissions de carbone
function carbonPrint(event) {
	event.preventDefault();
	distanceValue = DISTANCE.valueAsNumber;
	workingDaysValue = WORKINGDAYS.valueAsNumber;
	carboneDist = distanceValue * 0.12;
	daysPerMonth = workingDaysValue * 4.348;
	total = Math.round((carboneDist * daysPerMonth) * 100) / 100;
	console.log(total);
	carbonAmount.innerHTML = total;
	displayStatus = "display flex";
	POPBG.setAttribute("class", displayStatus);
	POPUP.setAttribute("class", FLEX);
}

function closePop() {
	displayStatus = "no-display";
	POPBG.setAttribute("class", displayStatus);
	POPUP.setAttribute("class", displayStatus);
}

FORM.addEventListener("submit", carbonPrint);
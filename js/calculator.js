const FORM = document.querySelector("form");
const DISTANCE = document.getElementById("distance");
const WORKINGDAYS = document.getElementById("working-days");
const SUBMIT = document.querySelector("input[type=submit]");
console.log(FORM);
console.log(WORKINGDAYS);
console.log(SUBMIT);

let distanceValue;
let workingDaysValue;
let carboneDist;
let daysPerMonth;
let total;
let popup = document.querySelector(".popup");
let carbonAmount = document.getElementById("carbonAmount");

function carbonPrint(event){
	event.preventDefault();
	distanceValue = DISTANCE.valueAsNumber;
	workingDaysValue = WORKINGDAYS.valueAsNumber;
	carboneDist = distanceValue * 0.12;
	daysPerMonth = workingDaysValue * 4.348;
	total = Math.round((carboneDist * daysPerMonth) * 100) / 100;
	console.log(total);
	carbonAmount.innerHTML = total;
}
FORM.addEventListener("submit", carbonPrint);



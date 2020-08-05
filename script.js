"use strict";
let totalParagraph = document.querySelector(".total");

let buttons = document.querySelectorAll(".btn");

let totalDue = 0;

buttons.forEach((snack) => {
	snack.addEventListener("click", () => {
		let amount = Number(snack.getAttribute("data-amount"));
		totalDue += amount;
		totalParagraph.innerText = `Total: $${totalDue}
    `;
	});
});

// challenge 2

let form = document.querySelector(".money-form");

let coinContainer = document.querySelector(".coin-container");

form.addEventListener("submit", (event) => {
	event.preventDefault();
	let data = new FormData(form);
	let number = data.get("amount");
	let type = data.get("type");
	for (let i = 0; i < number; i++) {
		let newCoin = document.createElement("div");
		newCoin.classList.add(type, "coin");
		newCoin.innerText = type;
		coinContainer.append(newCoin);
		newCoin.addEventListener("click", () => {
			newCoin.remove();
		});
	}
	form.reset();
});

// let penny = document.querySelector(".penny");
// let nickel = document.querySelector(".nickel");
// let dime = document.querySelector(".dime");
// let quarter = document.querySelector(".quarter");

// .addEventListener("click", () => {
// 	event.preventDefault();
// 	let amount = parseInt(gummies.getAttribute("data-amount"));
// 	total += amount;
// 	let totalSnacks = document.querySelector(".challenge1-total-amount");
//     totalSnacks.innerText = total;

// let newDiv = document.createElement("div");
// newDiv.setAttribute("class", "penny-coin coin");

// let newDiv = document.createElement("div");
// newDiv.setAttribute("class", "nickel-coin coin");

// let newDiv = document.createElement("div");
// newDiv.setAttribute("class", "dime-coin coin");

// let newDiv = document.createElement("div");
// newDiv.setAttribute("class", "quarter-coin coin");

// challenge 3
let bulb = document.querySelector(".bulb");
let onButton = document.querySelector(".on");
let offButton = document.querySelector(".off");
let toggle = document.querySelector(".toggle");
let end = document.querySelector(".end");

onButton.addEventListener("click", () => {
	bulb.classList.add("light");
});

offButton.addEventListener("click", () => {
	bulb.classList.remove("light");
});

toggle.addEventListener("click", () => {
	bulb.classList.toggle("light");
});

end.addEventListener("click", () => {
	let buttons = document.querySelectorAll(".switch");
	buttons.forEach((button) => {
		button.disabled = true;
	});
});

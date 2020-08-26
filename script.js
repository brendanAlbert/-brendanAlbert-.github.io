let theme = localStorage.getItem("theme");

if (theme == null) {
	setTheme("light");
} else {
	setTheme(theme);
}

let themeDots = document.querySelectorAll(".theme-dot");

for (let i = 0; i < themeDots.length; i++) {
	themeDots[i].addEventListener("click", function (e) {
		let mode = this.dataset.mode;
		setTheme(mode);
	});
}

function setTheme(mode) {
	localStorage.setItem("theme", mode);

	if (mode == "light") {
		document.querySelector("#theme-style").href = "default.css";
	} else if (mode == "blue") {
		document.querySelector("#theme-style").href = "blue.css";
	} else if (mode == "green") {
		document.querySelector("#theme-style").href = "green.css";
	} else if (mode == "purple") {
		document.querySelector("#theme-style").href = "purple.css";
	}
}

// let scrollLink = document.querySelector("#contact-link");
// scrollLink.addEventListener("click", () => {
// 	// let contactForm = document.querySelector("#contact-form");
// 	// contactForm.scrollIntoView({
// 	// 	behavior: "smooth",
// 	// });
// 	window.scrollTo(
// 		0,
// 		document.querySelector(".section-container").scrollHeight
// 	);
// });

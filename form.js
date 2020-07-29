const form = document.querySelector("#contact-form");
const url =
	"https://cduhj61rp3.execute-api.us-west-2.amazonaws.com/dev/email/send";
const toast = document.querySelector("#toast");
const submitbtn = document.querySelector("#submit-btn");

function post(url, body, callback) {
	let req = new XMLHttpRequest();
	req.open("POST", url, true);
	req.setRequestHeader("Content-Type", "application/json");
	req.addEventListener("load", function () {
		if (req.status < 400) {
			callback(null, JSON.parse(req.responseText));
		} else {
			callback(new Error("Request failed: " + req.statusText));
		}
	});
	req.send(JSON.stringify(body));
}

function success() {
	toast.innerHTML = `Thanks for sending me a message!  I'll be in touch ASAP. =)`;
	submitbtn.disabled = false;
	submitbtn.blur();
	form.name.focus();
	form.name.value = "";
	form.subject.value = "";
	form.email.value = "";
	form.message.value = "";
}

function error(err) {
	toast.innerHTML = `There was an error trying to send your message.  Perhaps try reaching out to me on LinkedIn or email me directly.  Sorry for the inconvenience but thank you for your interest!`;
	submitbtn.disabled = false;
	console.log(err);
}

form.addEventListener("submit", function (e) {
	e.preventDefault();
	toast.innerHTML = "Sending...";
	submitbtn.disabled = true;

	const payload = {
		name: form.name.value,
		subject: form.subject.value,
		email: form.email.value,
		message: form.message.value,
	};

	post(url, payload, function (err, res) {
		if (err) {
			return error(err);
		}
		success();
	});
});

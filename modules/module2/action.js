var btns = document.querySelectorAll(".buttons button");
var scheme = document.getElementsByClassName("scheme")[0];

for (i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", manageSchemeClasses);
}

function manageSchemeClasses() {
	if (this.getAttribute("data-add")) {
		scheme.classList.add(this.getAttribute("data-add"));

	}
}

function manageSchemeClasses() {
	if (this.getAttribute("data-remove")) {
		scheme.classList.remove(this.getAttribute("data-remove"));
	}
}

$("#start").click(function () {
	alert("Handler for .click() called.");
});

$("#stop").click(function () {
	alert("Handler for .click() called.");
});
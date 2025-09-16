// Shrink nav to top right on scroll for desktop
window.addEventListener("scroll", function () {
	const header = document.querySelector("header");
	if (window.innerWidth >= 900) {
		if (window.scrollY > 80) {
			header.classList.add("sticky");
		} else {
			header.classList.remove("sticky");
		}
	}
});

// Mobile hamburger menu activation
document.addEventListener("DOMContentLoaded", function () {
	const navToggle = document.getElementById("nav-toggle");
	const navMenu = document.querySelector(".bubble-container");
	navToggle.addEventListener("change", function () {
		navMenu.classList.toggle("active", navToggle.checked);
	});
});

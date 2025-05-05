// Show/Hide Back to Top Button
const backToTopButton = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = "block"; // Show button when scrolled down
    } else {
        backToTopButton.style.display = "none"; // Hide button when at the top
    }
});

// Scroll to Top on Button Click
backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Initialize AOS (Animate on Scroll)
document.addEventListener("DOMContentLoaded", function () {
    AOS.init();
});

// Handle Contact Form Submission
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thank you for your message! I'll get back to you soon.");
    contactForm.reset();
});
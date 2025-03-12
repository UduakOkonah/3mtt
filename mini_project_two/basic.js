// Responsive Navbar Toggle
document.querySelector(".menu-toggle").addEventListener("click", function () {
    document.querySelector(".nav-links").classList.toggle("active");
});

// Dynamic Year in Footer
document.getElementById("year").textContent = new Date().getFullYear();

// Form Validations
function validateForm(formId) {
    document.getElementById(formId).addEventListener("submit", function (event) {
        let inputs = this.querySelectorAll("input, textarea");
        for (let input of inputs) {
            if (input.value.trim() === "") {
                alert("Please fill out all fields.");
                event.preventDefault();
                return;
            }
        }
        alert("Form submitted successfully!");
    });
}

validateForm("signupForm");
validateForm("loginForm");
validateForm("contactForm");

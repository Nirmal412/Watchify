function showPassword() {
  var passwordField = document.getElementById("password");
  var showCheckbox = document.getElementById("show");

  if (showCheckbox.checked) {
      passwordField.type = "text";
  } else {
      passwordField.type = "password";
  }
}

// JavaScript: login.js
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    const email1 = document.getElementById("email").value;
    const password1 = document.getElementById("password").value;

    // Retrieve stored signup data from sessionStorage or localStorage
    const storedEmail = sessionStorage.getItem('email') || localStorage.getItem('email');
    const storedPassword = sessionStorage.getItem('password') || localStorage.getItem('password');

    if (email1 === storedEmail && password1 === storedPassword) {
      alert("Login successful!");
      window.location.href = './final-homepage.html'; // Redirect to the home page after successful login
    }else if (email1==''||password1=='') {
      alert("Please enter Email and Password!");
      // return;
    } else {
      alert("Incorrect email or password. Please try again.");
    }
  });
});


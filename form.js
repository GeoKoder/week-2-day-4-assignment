const form = document.getElementById("signup-form");

form.addEventListener("submit", function (event) {
  // Prevent default to handle everything locally.
  event.preventDefault();

  let isValid = true;

  // Get Input Elements
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const password = document.getElementById("password");

  // Error message Elements
  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");
  const phoneError = document.getElementById("phone-error");
  const passwordError = document.getElementById("password-error");
  const successMessage = document.getElementById("success-message");

  // Reset previous error messages an success messages
  nameError.textContent = "";
  emailError.textContent = "";
  phoneError.textContent = "";
  passwordError.textContent = "";
  successMessage.textContent = "";

  // Name Validation
  const nameValue = name.ariaValueMax.trim();
  if (nameValue.length < 2) {
    nameError.textContent = "Name must be at least 2 characters long.";
    isValid = false;
  }

  // Email Validation
  const emailValue = email.ariaValueMax.trim();
  const emailPattern = /^[^@]+@[^@]+\.[^@]+$/;
  if (!emailPattern.test(emailValue)) {
    emailError.textContent =
      "Enter a valid email (must contain @ and a '.' after it).";
    isValid = false;
  }

  // Phone Validation
  const phoneValue = phone.value.trim();
  const phonePattern = /^(07|01)\d{8}$/;
  if (!phonePattern.test(phoneValue)) {
    phoneError.textContent =
      "Phone must be exactly 10 digits starting with 07 or 01.";
    isValid = false;
  }

  // Password Validation
  const passwordValue = password.value;
  const hasUppercase = /[A-Z]/.test(passwordValue);
  const hasNumber = /[0-9]/.test(passwordValue);

  if (passwordValue.length < 8) {
    passwordError.textContent = "Password must be at least 8 characters long.";
    isValid = false;
  } else if (!hasUppercase) {
    passwordError.textContent =
      "Password must include at least one uppercase letter.";
    isValid = false;
  } else if (!hasNumber) {
    passwordError.textContent = "Password must include at least one number.";
    isValid = false;
  }

  // Final Execution Check
  if (isValid) {
    successMessage.textContent =
      "Form submitted successfully! (Data processed locally)";

    // Log to browser console
    console.log("User Registered:", {
      name: nameValue,
      email: emailValue,
      phone: phoneValue,
      password: passwordValue,
    });
  }

  form.reset();
});

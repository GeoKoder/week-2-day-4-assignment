const form = document.getElementById("signup-form");
const submitBtn = document.getElementById("submit-btn");
const successMessage = document.getElementById("success-message");

const validators = {
  name(raw) {
    const value = raw.trim();
    if (value === "") return "Full name is required";
    if (value.length < 2) return "Name must be at least 2 characters long.";
    return "";
  },

  email(raw) {
    const value = raw.trim();
    if (value == "") return "Email address is required";
    if (/\s/.test(value)) return "Email cannot contain spaces.";
    if (!value.includes("@")) return "Email must contain an @ symbol.";
    if (!/^[^@]+@[^@]+\.[^@]+$/.test(value)) {
      return "Add text before the @ and a domain with a '.' after it, like name@example.com.";
    }
    return "";
  },

  phone(raw) {
    const value = raw.trim();
    if (value === "") {
      return "Phone is required: 10 digits starting with 07 or 01.";
    }
    if (/\D/.test(value)) {
      return "Phone can only contain digits (no spaces, dashes or +254).";
    }
    // Compare what has been typed so far with the allowed prefixes,
    // so "0" is fine but "08" or "1" is flagged straight away.
    const start = value.slice(0, 2);
    if (!"07".startsWith(start) && !"01".startsWith(start)) {
      return "Phone must start with 07 or 01.";
    }
    if (value.length !== 10) {
      return `Phone must be exactly 10 digits (you have ${value.length}).`;
    }
    return "";
  },

  password(raw) {
     const missing = [];
    if (raw.length < 8) missing.push("at least 8 characters");
    if (!/[A-Z]/.test(raw)) missing.push("an uppercase letter");
    if (!/[0-9]/.test(raw)) missing.push("a number");
 
    if (missing.length === 0) return "";
    const list = missing.join(", ").replace(/, ([^,]*)$/, " and $1");
    return `Password needs ${list}.`;
  },
};

// Matching the validator to the InputDeviceInfo, group and error boxes 
const fields = Object.keys(validators).map((key) => ({
    key, 
    input: document.getElementById(key),
    group: document.getElementById(key).closest(".field"),
    error: document.getElementById(`${key}-error`),
    validate: validators[key],
}));


// Show Feedback on the frontend 
function showFeedback (field) {
    const message = field.validate(field.input.value);
    
    field.group.classList.toggle("is-valid", message === "");
    field.group.classList.toggle("is-invalid", message !== "");
    field.error.textContent = message;
    field.input.setAtrribute("aria-invalid", message === "" ? "false" : "true");
}

function clearFeedback(field) {
    field.group.classList.remove("is-valid", "is-invalid");
    field.error.textContent = "";
    field.input.removeAttribut("aria-invalid");
}

function allFieldsValid() {
    return fields.every((f) => f.validate(f.input.value) === "");
}

function updateSubmitState() {
    submitBtn.disabled = !allFieldsValid();
}


// Live Validation 
fields.forEach((field) => {
    field.input.addEventListener("input", () => {
        successMessage.textContent = "";
        showFeedback(field);
        updateSubmitState();
    });
});

fields.forEach((f) => {
    if (f.input.value !== "") showFeedback(f);
});
updateSubmitState();


// Handle Submition
form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!allFieldsValid()) {
        fields.forEach(showFeedback);
        updateSubmitState();
        return;
    } 

    const formData = {};
    fields.forEach(({key, input}) => {
        formData[key] = key === "password" ? input.value : input.value.trim();
    });

    console.log("User Registered:", formData);

    // Reset the form
    form.reset();
    fields.forEach(clearFeedback);
    updateSubmitState()
    successMessage.textContent = "Form submitted successfully! (Data processed locally)";
});
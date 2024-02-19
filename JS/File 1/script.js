const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

//functions
const checkRequired = (inputArray) => {
    inputArray.forEach((input) => {
        if (input.value.trim() === "") {
            showError(input, `${getRequired(input)} is required`);
        } else {
            showSuccess(input);
        }
        console.log(input, input.value);
    });
};
const passwordCheck = (p1, p2) => {
    if (p1.value.trim() === p2.value.trim()) {
        showSuccess(p2);
    } else {
        showError(p2, "password must be same as above");
    }
};
const checkLength = (input, min, max) => {
    if (input.value.length < min) {
        showError(input, `${getRequired(input)} must be at least ${min}`);
    } else if (input.value.length > max) {
        showError(input, `${getRequired(input)} must be less than ${max}`);
    } else {
        showSuccess(input);
    }
};
const getRequired = (input) => {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
};
const isValidEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (re.test(email.value)) {
        showSuccess(email);
    } else {
        showError(email, "email should be valid");
    }
};

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerText = message;
}
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

//event listeners
form.addEventListener("submit", function (e) {
    e.preventDefault();
    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 15);
    isValidEmail(email);
    passwordCheck(password, password2);
});

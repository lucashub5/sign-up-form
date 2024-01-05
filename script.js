const root = document.documentElement;
const darkTheme = document.querySelector('.dark-theme');
const lightTheme = document.querySelector('.light-theme');

const submit = document.getElementById("submit");
const passwordField = document.getElementById("user_password");
const confirmPasswordField = document.getElementById("user_confirmpassword");

let themeControl = false;

darkTheme.addEventListener('click', function() {
    if(!themeControl){
        themeControl = true;
        root.className = 'dark';
    }
});

lightTheme.addEventListener('click', function() {
    if(themeControl == true){
        themeControl = false;
        root.className = 'light';
    }
});

submit.addEventListener('click', function() {
    const passwordValue = passwordField.value;
    const confirmPasswordValue = confirmPasswordField.value;

    if (passwordValue  === confirmPasswordValue) {
    } else {
        confirmPasswordField.setCustomValidity("Passwords do not match.");
        confirmPasswordField.reportValidity();
    }
});

document.addEventListener('input', function() {
    confirmPasswordField.setCustomValidity("");
});

function togglePasswordVisibility(targetId, eyeIconId) {
    const passwordField = document.getElementById(targetId);
    const eyeIcon = document.getElementById(eyeIconId);

    if (passwordField.type === "password") {
        passwordField.type = "text";
        eyeIcon.src = "images/eye-outline.svg";
    } else {
        passwordField.type = "password";
        eyeIcon.src = "images/eye-off-outline.svg";
    }
}



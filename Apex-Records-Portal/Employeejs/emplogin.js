const form = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

showPassword.addEventListener("change", () => {
    passwordInput.type = showPassword.checked ? "text" : "password";
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value;

    if (username === "ApexRecordPortal" && password === "Apex@123") {
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "../Employeehtml/empdashboard.html";
    } else {
        message.textContent = "Invalid username or password.";
    }
});

// js for index html
document.getElementById("submit-btn").addEventListener("click", function () {
    const email = document.getElementById("user-email").value;
    const password = document.getElementById("user-password").value;
    if (email === "developertoriqul@gmail.com" && password === "1234") {

        window.location.href = 'second.html';

    }
    else
        (
            alert("Incorrect User Id or Password")
        );
});
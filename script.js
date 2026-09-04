function checkPassword() {

    const input = document.getElementById("password");
    const error = document.getElementById("error");

    const password = input.value.trim();

    const correctPasswords = [
        "11122002",
        "11/12/2002",
        "11-12-2002"
    ];

    if (correctPasswords.includes(password)) {

        error.style.color = "#8cffb0";
        error.textContent = "تم فتح المرحلة ❤️";

        setTimeout(() => {
            window.location.href = "stage1.html";
        }, 800);

    } else {

        error.style.color = "#ff8f9e";
        error.textContent = "كلمة السر ليست صحيحة... حاولي مرة أخرى ❤️";

        input.value = "";
    }
}


document.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        checkPassword();
    }

});

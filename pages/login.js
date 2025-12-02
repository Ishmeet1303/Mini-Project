document.getElementById('login').addEventListener('click', function (e) {
    e.preventDefault();
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    // console.log("Email:" + email, "Password: " + password.target);
    console.log(email.target)
    console.log("Login method")

    fetch("http://localhost:3000/login", {
        email: email.target.value,
        password: password.target.value
    })
        .then(async (res) => await res.json())
        .then(res => {
            console.log(res);
        }).catch(err => {
            console.log("Error: ", err);
        })
})
const loginUser = () => {

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let record = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [];

    let check = record.filter((val) => {
        return val.email === email && val.password === password;
    })

    if (check.length != 0) {
        localStorage.setItem("checkuser", JSON.stringify(check[0]));
        window.location.href = "./dashbord.html";
        alert("users are successfully login.....!")
    }
    else {
        alert("Invalid email or password Please try again")
    }
}
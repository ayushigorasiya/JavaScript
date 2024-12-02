let users = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [];

const registerUser = () => {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let phone = document.getElementById('phone').value;

    let obj = {
        id: Date.now(),
        name: name,
        email: email,
        password: password,
        phone: phone
    }

    users.push(obj);
    localStorage.setItem("users", JSON.stringify(users));
    alert("User Are Successfully Registered");
}
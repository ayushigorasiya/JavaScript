let checkuser = JSON.parse(localStorage.getItem('checkuser'));

if (!checkuser) {
    window.location.href = "./login.html";
}
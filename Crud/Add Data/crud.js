let users = [
    { id: 1123250773622, name: 'yug', phone: 123456 },
    { id: 2732507736221, name: 'om', phone: 135686 },
    { id: 3132507736221, name: 'dhruv', phone: 148256 },
]
const viewRecord = () => {
    let tbl = "";
    users.map((val, index) => {
        tbl += `
                <tr>
                    <td>${val.id}</td>
                    <td>${val.name}</td>
                    <td>${val.phone}</td>
                </tr>
                `
    })
    document.getElementById('record').innerHTML = tbl;

}

viewRecord();

const saveData = () => {
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;


    let obj = {
        id: Date.now(),
        name: name,
        phone: phone,

    }
    users.push(obj)

    alert("Register");
    document.getElementById('name').value = "";
    document.getElementById('phone').value = "";

    viewRecord();
}
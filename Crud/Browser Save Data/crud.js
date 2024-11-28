let record = []


const viewRecord = () => {

    record = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : []
    let tbl = "";
    record.map((val) => {
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

    record.push(obj);
    localStorage.setItem("users", JSON.stringify(record))
    alert("Record Successfully Registered");
    viewRecord();
    document.getElementById('name').value = "";
    document.getElementById('phone').value = "";
}
let value = 0;

function Demo() {
    const cvalue = document.getElementById('value').innerHTML = value;
}

function plus() {
    value++;
    Demo();
}

function minus() {
    value--;
    Demo();
}

function reset() {
    value = 0;
    Demo();
}
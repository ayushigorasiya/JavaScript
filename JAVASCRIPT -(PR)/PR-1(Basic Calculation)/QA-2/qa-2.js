var a, b;
document.write(`<h1>swaping program<h1>`);

var a = parseInt(prompt("Enter The Element Of A :-"));
var b = parseInt(prompt("Enter The Element Of B :-"));
document.write(`<h2>:) After Swaping:- ${a}  ${b}</h2>`);

swap = a;
a = b;
b = swap;

document.write(`<h2>:) Before Swaping :- ${a}  ${b}</h2>`);

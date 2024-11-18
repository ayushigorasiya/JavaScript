document.write(`<h1>find gross salary</h1>`);

var bs = parseInt(prompt("Enter The Element Of BS :-"));
var hra = parseInt(prompt("Enter The Element Of HRA :-"));
var da = parseInt(prompt("Enter The Element Of DA :-"));
var ta = parseInt(prompt("Enter The Element Of TA :-"));


hra = (bs * hra) / 100;
da = (bs * da) / 100;
ta = (bs * ta) / 100;
var ans = bs + hra + ta + da;

document.write(`<h3>Base Salary :- ${ans}</h3>`);

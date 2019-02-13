/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function div(n1, n2) {
    return n1 / n2;
}
function add(n1, n2) {
    return n1 + n2;
}
var sub = function (n1, n2) {
    return n1 - n2;
}
var mul = function (n1, n2) {
    return n1 * n2;
}
document.getElementById("buttons").addEventListener("click", appendToDiv)
function appendToDiv(e) {
    e.preventDefault();
    var text = document.getElementById("display").innerText;
    text += e.target.innerText;
    if(e.target.innerText.length == 1)
    document.getElementById("display").innerText = text;
}

document.getElementById("calculate").addEventListener("click", equals)

function equals(e) {
    e.stopPropagation();
    var text = "" + document.getElementById("display").innerText;
    
    var add1 = text.indexOf("+");
    var sub1 = text.indexOf("-");
    var mul1 = text.indexOf("*");
    var div1 = text.indexOf("/");
    
    var n1 = "";
    var n2 = "";
    
    var res;
    if (add1 > -1){
        numbers = text.split("+");
        console.log(numbers)
        n1 = parseInt(numbers[0]);
        n2 = parseInt(numbers[1]);
        res = add(n1,n2);
        document.getElementById("display").innerText = ""+res;
    }
    if (sub1 > -1){
        numbers = text.split("-");
        console.log(numbers)
        n1 = parseInt(numbers[0]);
        n2 = parseInt(numbers[1]);
        res = sub(n1,n2);
        document.getElementById("display").innerText = ""+res;
    }
    if (mul1 > -1){
        numbers = text.split("*");
        console.log(numbers)
        n1 = parseInt(numbers[0]);
        n2 = parseInt(numbers[1]);
        res = mul(n1,n2);
        document.getElementById("display").innerText = ""+res;
    }
    if (div1 > -1){
        numbers = text.split("/");
        console.log(numbers)
        n1 = parseInt(numbers[0]);
        n2 = parseInt(numbers[1]);
        res = div(n1,n2);
        document.getElementById("display").innerText = ""+res;
    }
}

document.getElementById("clear").addEventListener("click",function clear(e){
    e.preventDefault();
    document.getElementById("display").innerText = "";
});


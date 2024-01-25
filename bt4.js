let txt = document.getElementById("input-1");
let box = document.getElementById("input-2");
let bit = document.getElementById("input-3");
let but = document.getElementById("btn");
but.addEventListener("click", function(){
    var number1 = parseInt(txt.value);
    var number2 = parseInt(box.value);
    var sum = number1 + number2;
    bit.value = sum;
});
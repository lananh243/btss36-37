let input = document.getElementById("input");
let div = document.getElementById("result");
input.onkeyup = function () {
    div.innerHTML = input.value;
}
input.onkeydown = function (){
    div.innerHTML = input.value;
}
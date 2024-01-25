let but = document.getElementById("but");
let number = 1;
but.onclick = function () {
    if(number % 2 === 0){
        but.innerText = "OFF";
    }else{
        but.innerText = "ON";
    }
    number++;
}

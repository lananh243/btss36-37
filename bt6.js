let idInput = document.getElementById("id-input");
let nameInput = document.getElementById("name-input");
let ageInput = document.getElementById("age-input");
let phoneInput = document.getElementById("phone-input");
let emailInput = document.getElementById("email-input");
let but = document.getElementById("btn");
let pro = document.getElementById("print");
but.addEventListener("click", (e) => {
    var idValue = idInput.value;
    var nameValue = nameInput.value;
    var ageValue = ageInput.value;
    var phoneValue = phoneInput.value;
    var emailValue = emailInput.value;
    if(idValue.length !== 6){
        alert("Không hợp lệ");
        return;
    }
    if(nameValue.trim() === ""){
        alert("Không hợp lệ");
        return;
    }
    if(ageValue < 18){
        alert("Không hợp lệ");
        return;
    }
    var phone = /^(0[0-9]{9}|[1-9][0-9]{8})$/;
    if(!phone.test(phoneValue)){
        alert("Không hợp lệ");
        return;
    }
    var email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!email.test(emailValue)){
        alert("Không hợp lệ");
        return;
    }
    var studentInfo = "Student Id: " + idValue + "<br>" +"Student Name: "+ nameValue + "<br>" + "Age: " + ageValue + "<br>" + "Phone: " + phoneValue + "<br>" + "Email: " + emailValue;
    var stus = document.createElement("div");
    stus.innerHTML = studentInfo;
    pro.appendChild(stus);
    idValue.value = "";
    nameValue.value = "";
    ageValue.value = "";
    phoneValue.value = "";
    emailValue.value = "";
    e.preventDefault();

});
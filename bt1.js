let btn = document.getElementById("btn");
let answerIp = document.getElementById("answer");
let result = document.getElementById("result");

btn.onclick = function() {
  let answer = answerIp.value;

  if (answer.length > 10) {
    result.textContent = "Không hợp lệ";
  } else {
    result.textContent = "Thành công";
  }
};

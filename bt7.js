let btns = document.querySelectorAll(".btn");
let result = document.getElementById("result");
let caculate = document.getElementById("caculate");
let clean = document.getElementById("clean");

btns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    let value = e.target.innerText;

    result.innerHTML += value;
  });
});

// Tính toán
caculate.addEventListener("click", function () {
  let resultCaculate = eval(result.innerHTML);
  result.innerHTML = resultCaculate;
});

clean.addEventListener("click", function () {
  result.innerHTML = "";
});

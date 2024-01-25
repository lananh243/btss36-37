
let ul = document.getElementsByClassName("list")[0];
let input = document.getElementById("input");
let addBtn = document.getElementById("add-btn");
input.style.backgroundColor = "yellow";
input.onkeydown = function () {
  if (input.value === 0) {
    input.style.backgroundColor = "";
  } else {
    input.style.backgroundColor = "white";
  }
};
addBtn.onclick = function () {
  ul.innerHTML = "";
  let li = document.createElement("li");
  li.innerHTML = input.value;
  ul.appendChild(li);
  input.value = "";
  input.style.backgroundColor = "yellow";
};

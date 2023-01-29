function Solve(val) {
  let v = document.getElementById("display");
  v.value += val;
}

function Result() {
  let num1 = document.getElementById("display").value;
  let num2 = eval(num1);
  document.getElementById("display").value = num2;
}

function Back() {
  let ev = document.getElementById("display");
  ev.value = ev.value.slice(0, -1);
}

function Clear() {
  let clear = document.getElementById("display");
  clear.value = "";
}

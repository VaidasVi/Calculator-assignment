const sum = document.getElementById("sum");
const sub = document.getElementById("sub");
const div = document.getElementById("div");
const mul = document.getElementById("mul");
const mod = document.getElementById("mod");

const response = document.getElementById("response");

function sumNumbers() {
  sum.addEventListener("click", () => {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);

    let result = num1 + num2;
    console.log(result);

    response.textContent = result;
  });
}

sumNumbers();

sub.addEventListener("click", () => {
  const num1 = Number(document.getElementById("num1").value);
  const num2 = Number(document.getElementById("num2").value);

  let result = num1 - num2;
  console.log(result);

  response.textContent = result;
});

div.addEventListener("click", () => {
  const num1 = Number(document.getElementById("num1").value);
  const num2 = Number(document.getElementById("num2").value);

  let result = (num1 / num2).toFixed(2);
  console.log(result);

  response.textContent = result;
});

mul.addEventListener("click", () => {
  const num1 = Number(document.getElementById("num1").value);
  const num2 = Number(document.getElementById("num2").value);

  let result = num1 * num2;
  console.log(result);

  response.textContent = result;
});

mod.addEventListener("click", () => {
  const num1 = Number(document.getElementById("num1").value);
  const num2 = Number(document.getElementById("num2").value);

  let result = num1 % num2;
  console.log(result);

  response.textContent = result;
});

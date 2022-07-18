const sum = document.getElementById("sum");
const sub = document.getElementById("sub");
const div = document.getElementById("div");
const mul = document.getElementById("mul");
const mod = document.getElementById("mod");
const clear = document.getElementById("clear");

const response = document.getElementById("response");

// First Part -------------------

// function sumNumbers() {
//   sum.addEventListener("click", () => {
//     const num1 = Number(document.getElementById("num1").value);
//     const num2 = Number(document.getElementById("num2").value);

//     const result = num1 + num2;
//     console.log(result);

//     response.textContent = result;
//   });
// }

// sumNumbers();

// sub.addEventListener("click", () => {
//   const num1 = Number(document.getElementById("num1").value);
//   const num2 = Number(document.getElementById("num2").value);

//   const result = num1 - num2;
//   console.log(result);

//   response.textContent = result;
// });

// div.addEventListener("click", () => {
//   const num1 = Number(document.getElementById("num1").value);
//   const num2 = Number(document.getElementById("num2").value);

//   const result = (num1 / num2).toFixed(2);
//   console.log(result);

//   response.textContent = result;
// });

// mul.addEventListener("click", () => {
//   const num1 = Number(document.getElementById("num1").value);
//   const num2 = Number(document.getElementById("num2").value);

//   const result = num1 * num2;
//   console.log(result);

//   response.textContent = result;
// });

// mod.addEventListener("click", () => {
//   const num1 = Number(document.getElementById("num1").value);
//   const num2 = Number(document.getElementById("num2").value);

//   const result = num1 % num2;
//   console.log(result);

//   response.textContent = result;
// });

// Second Part -------------------

response.textContent = 0;

function central(a) {
  const num1 = Number(document.getElementById("num1").value);
  const num2 = Number(document.getElementById("num2").value);

  console.log(num1);
  console.log(num2);

  console.log(a);

  switch (a) {
    case "sum":
      response.textContent = num1 + num2;
      break;
    case "sub":
      response.textContent = num1 - num2;
      break;
    case "div":
      response.textContent = (num1 / num2).toFixed(2);
      break;
    case "mul":
      response.textContent = num1 * num2;
      break;
    case "mod":
      response.textContent = num1 % num2;
      break;
    case "clear":
      document.getElementById("num1").value = "";
      document.getElementById("num2").value = "";
      response.textContent = 0;
      break;
  }
}

sum.addEventListener("click", () => {
  central("sum");
});

sub.addEventListener("click", () => {
  central("sub");
});

div.addEventListener("click", () => {
  central("div");
});

mul.addEventListener("click", () => {
  central("mul");
});

mod.addEventListener("click", () => {
  central("mod");
});

clear.addEventListener("click", () => {
  central("clear");
});

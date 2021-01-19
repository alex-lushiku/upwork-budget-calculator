document.addEventListener("DOMContentLoaded", () => {
  let budget = document.getElementById("budget");

  $.get("https://api.exchangeratesapi.io/latest?base=USD", res => {
    let rate = res["rates"]["EUR"];

    budget.addEventListener("keyup", e => calculate(e.target.value, rate));
    budget.addEventListener("paste", e => calculate(e.target.value, rate));
    budget.addEventListener("change", e => calculate(e.target.value, rate));
  });
})

function calculate(budget, rate) {
  let result = document.getElementById("result");
  let fee = 0.8;

  if (budget <= 500) {
    fee = 0.8;
  }
  else if (budget > 10000) {
    fee = 0.95;
  }
  else {
    fee = 0.9;
  }

  result.value = (budget * fee * rate).toFixed(2);
}
const select = document.querySelector(".form-select");
const time = document.querySelector("#time");
const amount = document.querySelector("#time");
const calculateBtn = document.querySelector(".btn");
let rate = 0; //oran
let installment = 0; //taksit

calculateBtn.addEventListener("click", (e) => {
  e.preventDefault(); //preventDefault event'in default davranışını (submit etmek ve formu silmek) engeller.
  if (select.value === "Housing Credit") {
    rate = 1.29;
  } else if (select.value === "Personal Finance Credit") {
    rate = 1.99;
  } else if (select.value === "Car Credit") {
    rate = 1.79;
  }
  if (!select.value || !time.value || !amount.value) {
    alert("Please enter loan type, time and amount!");
  }

  const interest = rate / 100; //faiz
  installment =
    (amount.value * (interest * (1 + interest) ** time.value)) /
    ((1 + interest) ** time.value - 1);

  showResults();
});

const showResults = () => {
  const results = document.querySelector(".results");

  results.innerHTML = `
  <h2 class="mt-3 text-info">Credit Information</h2>
  <table class="table table-bordered border-primary mt-4">
   <tbody>
    <tr>
      <th>Credit Amount</th>
      <td>${amount.value} $</td>
      <th>Credit Type</th>
      <td>${select.value}</td>
    </tr>
    <tr>
      <th>Time</th>
      <td>${time.value}</td>
      <th>Interest Rate</th>
      <td>${rate}</td>
    </tr>
    <tr>
      <th>Total Amount</th>
      <td>${(installment * time.value).toFixed(2)} $</td>
      <th>Installment Amount</th>
      <td>${installment.toFixed(2)} $</td>
    </tr>
  </tbody>
</table> `;
};

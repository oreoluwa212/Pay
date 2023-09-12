
document.addEventListener("DOMContentLoaded", function () {
  // DOM elements
  const cardNumberInput = document.querySelectorAll(".equal");
  const cardholderInput = document.querySelector(".equal-cardholder");
  const expMonthSelect = document.querySelector(".equal-month");
  const expYearSelect = document.querySelector(".equal-year");
  const cvvInput = document.querySelector(".equal-cvv");
  const cardLogo = document.querySelector(".visa-logo");

  // Card logo change based on card number
  cardNumberInput[0].addEventListener("input", function () {
    const cardNumber = cardNumberInput[0].value;
    let cardType = "";

    if (/^4/.test(cardNumber)) {
      cardType = "visa";
    } else if (/^5[1-5]/.test(cardNumber)) {
      cardType = "mastercard";
    } else if (/^3[47]/.test(cardNumber)) {
      cardType = "amex";
    }

    cardLogo.style.backgroundImage = `url('${cardType}.png')`;
  });

  // Display cardholder name
  cardholderInput.addEventListener("input", function () {
    const cardholderName = cardholderInput.value;
    document.querySelector(".holder").textContent = cardholderName;
  });

  // Display expiration date
  expMonthSelect.addEventListener("change", updateExpirationDate);
  expYearSelect.addEventListener("change", updateExpirationDate);

  function updateExpirationDate() {
    const month = expMonthSelect.value;
    const year = expYearSelect.value;
    document.querySelector(".expires").textContent = `EXPIRES: ${month}/${year}`;
  }

  // Submit button click event
  const submitButton = document.querySelector(".sub-btn");
  submitButton.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent form submission for now

    // Validate inputs before showing the alert
    const isValid = validateInputs();
    if (isValid) {
      alert("Your payment was successful.");
    } else {
      alert("Please fill in all required fields correctly.");
    }
  });

  // Input validation function
  function validateInputs() {
    // Implement your validation logic here for card number, cardholder, CVV, and expiration date
    // Return true if all inputs are valid, otherwise return false
    // You can use regular expressions and other validation techniques
    return true; // Placeholder, replace with your validation logic
  }
});
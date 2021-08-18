function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputAmount = parseFloat(inputField.value);
  inputField.value = "";
  return inputAmount;
}

function updateTotalField(totalFieldId, amount) {
  const totalField = document.getElementById(totalFieldId);
  const previousTotalField = parseFloat(totalField.innerText);
  const newTotal = previousTotalField + amount;
  totalField.innerText = newTotal;
}

function getCurrentBalance() {
  const balanceTotal = document.getElementById("balance-total");
  const previousBalanceTotal = parseFloat(balanceTotal.innerText);
  return previousBalanceTotal;
}

function updateBalance(amount, isAdd) {
  const balanceTotal = document.getElementById("balance-total");
  const previousBalanceTotal = getCurrentBalance();
  if (isAdd == true) {
    const newBalanceTotal = previousBalanceTotal + amount;
    balanceTotal.innerText = newBalanceTotal;
  } else {
    const newBalanceTotal = previousBalanceTotal - amount;
    balanceTotal.innerText = newBalanceTotal;
  }
}

// Handle Deposit button
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    // Get Deposit Amount
    const depositAmount = getInputValue("deposit-input");

    if (depositAmount > 0) {
      // Update Account balance
      updateTotalField("deposit-total", depositAmount);
      updateBalance(depositAmount, true);
    }
  });

// Handle Withdraw button
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    // Get withdraw amount
    const withdrawAmount = getInputValue("withdraw-input");

    // Get Current Balance
    const currentBalance = getCurrentBalance();

    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
      // Update Account Balance
      updateTotalField("withdraw-total", withdrawAmount);
      updateBalance(withdrawAmount, false);
    }
  });

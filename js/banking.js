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

function updateBalance(amount, isAdd) {
  const balanceTotal = document.getElementById("balance-total");
  const previousBalanceTotal = parseFloat(balanceTotal.innerText);
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
    // Update Deposit total
    const depositAmount = getInputValue("deposit-input");
    updateTotalField("deposit-total", depositAmount);

    // Update Account balance
    updateBalance(depositAmount, true);
  });

// Handle Withdraw button
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    // Update withdraw Total
    const withdrawAmount = getInputValue("withdraw-input");
    updateTotalField("withdraw-total", withdrawAmount);

    // Update Account Balance
    updateBalance(withdrawAmount, false);
  });

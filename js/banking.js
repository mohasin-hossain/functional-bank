

// Handle Deposit button
document.getElementById('deposit-button').addEventListener('click', function() {
    // Update Deposit total
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmount = parseFloat(depositInput.value);

    const depositTotal = document.getElementById('deposit-total');
    const previousDepositTotal = parseFloat(depositTotal.innerText);
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotal.innerText = newDepositTotal;

    // Update Account balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(balanceTotal.innerText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;
})

// Handle Withdraw button
document.getElementById('withdraw-button').addEventListener('click', function() {
    // Update withdraw Total
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawAmount = parseFloat(withdrawInput.value);

    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotal = parseFloat(withdrawTotal.innerText);
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    // Update Account Balance 
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalAmount = parseFloat(balanceTotal.innerText);
    const newBalanceTotal = previousBalanceTotalAmount - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;

    // Clear the withdraw input field
    withdrawInput.value = '';
})

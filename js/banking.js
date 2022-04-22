/* document.getElementById('deposit').addEventListener('click', function () {
    const depositFilled = document.getElementById('deposit-money');
    const depositAmount = depositFilled.value;
    console.log(depositAmount);
    const newDeposit = parseFloat(depositAmount);

    const depositTotal = document.getElementById('deposit-total');
    const previousDeposit = depositTotal.innerText;
    const previousDepositTotal = parseFloat(previousDeposit);
    const totalDeposit = newDeposit + previousDepositTotal;
    depositTotal.innerText = totalDeposit;

    depositFilled.value = '';
}) */














document.getElementById('deposit').addEventListener('click', function () {
    const depositValue = document.getElementById('deposit-money');
    const depositNewValue = depositValue.value;
    const newDepositAmount = parseFloat(depositNewValue);

    const depositMoney = document.getElementById('deposit-total');
    const depositPreviousValue = depositMoney.innerText;
    const depositPreviousValueAmount = parseFloat(depositPreviousValue);
    const totalDepositAmount = newDepositAmount + depositPreviousValueAmount;
    depositMoney.innerText = totalDepositAmount;
    depositValue.value = '';

    //update deposit and total balance
    const depositStatus = document.getElementById('balance-adjustment');
    const depositAdjustment = depositStatus.innerText;
    const depositBalance = parseFloat(depositAdjustment);
    const depositBalanceAdjustment = depositBalance + newDepositAmount;
    depositStatus.innerText = depositBalanceAdjustment;
})
//withdraw
document.getElementById('withdraw').addEventListener('click', function () {
    const withdrawValue = document.getElementById('withdraw-money');
    const withdrawAmount = withdrawValue.value;
    // console.log(withdrawAmount);
    const newWithdrawMoney = parseFloat(withdrawAmount);

    const withdrawInput = document.getElementById('withdraw-amount');
    const previousWithdrawAmount = withdrawInput.innerText;
    const preWithdraw = parseFloat(previousWithdrawAmount);
    const withdrawTotal = newWithdrawMoney + preWithdraw;
    withdrawInput.innerText = withdrawTotal;
    withdrawValue.value = '';

    //update withdraw
    const balanceAdjustment = document.getElementById('balance-adjustment');
    const balanceMoney = balanceAdjustment.innerText;
    const balanceConvert = parseFloat(balanceMoney);
    const balanceTotal = balanceConvert - newWithdrawMoney;
    balanceAdjustment.innerText = balanceTotal;
})


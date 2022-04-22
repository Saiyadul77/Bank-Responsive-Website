function inputValue(fieldId) {
    const inputNum = document.getElementById(fieldId);
    const inputNumber = inputNum.value;
    const inputTotal = parseFloat(inputNumber);
    inputNum.value = '';
    return inputTotal;

}
function inputValueUpdate(inputId, amount) {

    const previousAmount = balanceInnerTest(inputId)
    const totalAmount = previousAmount + amount;
    document.getElementById(inputId).innerText = totalAmount;
    // return totalAmount; // return only used for more place used
}
function balanceInnerTest(fieldId) {
    const balanceInner = document.getElementById(fieldId);
    const balanceText = balanceInner.innerText;
    const previousBalanceAmount = parseFloat(balanceText);
    return previousBalanceAmount;
}
function updateBalance(amount, isAdd) {
    let newBalance;  // if dont use it never output. dont use const. only used let
    previousBalance = balanceInnerTest('balance-adjustment')
    if (isAdd == true) {
        newBalance = previousBalance + amount; // here never use const 
    }
    else {
        newBalance = previousBalance - amount;
    }

    document.getElementById('balance-adjustment').innerText = newBalance;
}
document.getElementById('deposit').addEventListener('click', function () {
    const amount = inputValue('deposit-money');
    if (amount > 0) {
        inputValueUpdate('deposit-total', amount);
        updateBalance(amount, true)
    }

})
document.getElementById('withdraw').addEventListener('click', function () {
    const amount = inputValue('withdraw-money');
    const balanceUpdate = balanceInnerTest('balance-adjustment')
    if (amount > 0 && amount <= balanceUpdate) {
        inputValueUpdate('withdraw-amount', amount);
        updateBalance(amount, false)
    }

})
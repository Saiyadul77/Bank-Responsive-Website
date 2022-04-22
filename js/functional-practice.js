function inputvalue(fieldId) {
    const inputText = document.getElementById(fieldId);
    const inputValue = inputText.value;
    const inputConvert = parseFloat(inputValue);
    inputText.value = inputConvert;
    if (isNaN(inputConvert)) {
        inputText.value = '';
        return alert('please valid number')
    }
    return inputConvert;
}
function innerTextValue(fieldId, amount) {
    const fieldTagConvert = innerTextAvaerage(fieldId)
    const newValue = fieldTagConvert + amount;
    document.getElementById(fieldId).innerText = newValue;
}
function innerTextAvaerage(fieldId) {
    const inner = document.getElementById(fieldId);
    const innerField = inner.innerText;
    const innerConvert = parseFloat(innerField);
    inner.innerText = innerConvert
    return innerConvert
}
function updateBalance(amount, isAdd) {
    const previousBalance = innerTextAvaerage('balance-adjustment');
    if (isAdd == true) {
        const balanceTotal = previousBalance + amount;
        document.getElementById('balance-adjustment').innerText = balanceTotal;
    }
    else {
        const balanceTotal = previousBalance - amount;
        document.getElementById('balance-adjustment').innerText = balanceTotal;
    }

}
document.getElementById('deposit').addEventListener('click', function () {
    const inputType = inputvalue('deposit-money');
    if (inputType > 0) {
        innerTextValue('deposit-total', inputType)
        updateBalance(inputType, true);
    }


})
document.getElementById('withdraw').addEventListener('click', function () {
    const inputType = inputvalue('withdraw-money');
    if (inputType > 0) {
        innerTextValue('withdraw-amount', inputType)
        updateBalance(inputType, false);
    }

})
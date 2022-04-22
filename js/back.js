document.getElementById('login-submit').addEventListener('click', function () {
    const userFilled = document.getElementById('user-email');
    const userEmail = userFilled.value;
    const passwordFilled = document.getElementById('user-password');
    const userPassword = passwordFilled.value;
    if (userEmail == 'saiyadul@gmail.com' && userPassword == 'asadul') {
        window.location.href = 'banking.html';
    }
})

/* document.getElementById('login-submit').addEventListener('click', function () {
    // get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // check email and password
    if (userEmail == 'saiyadul@gmail.com' && userPassword == 'secret') {
        window.location.href = 'banking.html';
    }
}); */
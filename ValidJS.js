let emailWarning = document.getElementById('emailWarning');
let passwordWarning = document.getElementById('passwordWarning');
let emailInput = document.getElementById('email').value;
let passwordInput = document.getElementById('password').value;
let display = document.getElementById('display');
let passwordWarning2 = document.getElementById('passwordWarning2');

emailWarning.style.display = 'none';
passwordWarning.style.display = 'none';
passwordWarning2.style.display = 'none';

document.getElementById('SignIn').addEventListener('click', function(){
    let emailInput = document.getElementById('email').value.trim();
    let passwordInput = document.getElementById('password').value.trim();

    if(emailInput == '') {
        emailWarning.style.display = 'block';
    }

    if (passwordInput == '') {
        passwordWarning.style.display = 'block';
    } else if (passwordInput.trim().length < 6) {
        passwordWarning2.style.display = 'block';
    }

    if (emailInput != '' && passwordInput != '' && passwordInput.trim().length >= 6) {
        display.innerHTML = `Welcome, <b>${emailInput}<b/> !`;
    }

    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
});

document.getElementById('email').addEventListener('input', function () {
    if (this.value.trim() !== '') {
        emailWarning.style.display = 'none';
    }
});

document.getElementById('password').addEventListener('input', function () {
    if (this.value.trim() !== '') {
        passwordWarning.style.display = 'none';
    }
});

document.getElementById('password').addEventListener('input', function () {
    if (this.value.trim() !== '') {
        passwordWarning2.style.display = 'none';
    }
    if (this.value.trim().length >= 6) {
        passwordWarning2.style.display = 'none';
    }
});


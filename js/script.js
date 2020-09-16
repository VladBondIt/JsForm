const form = document.getElementById('form');
const userName = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('pass');
const password2 = document.getElementById('pass2');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    const userNameValue = userName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (userNameValue === '') {
        setErrorFor(userName, 'Username cannot be blank');

    } else {
        setSuccesFor(userName);
    }

    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid');
    } else {
        setSuccesFor(email);
    }
    if (passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank');
    } else if (passwordValue !== password2Value) {
        setErrorFor(password, 'Password does not match');
    } else {
        setSuccesFor(password);
    }
    if (password2Value === '') {
        setErrorFor(password2, 'Password cannot be blank');
    } else if (passwordValue !== password2Value) {

        setErrorFor(password2, 'Password does not match');
    } else {
        setSuccesFor(password2);
    }
};

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;
    formControl.className = 'form-control error'
}

function setSuccesFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
};

function isEmail(email) {
    const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(email);
};
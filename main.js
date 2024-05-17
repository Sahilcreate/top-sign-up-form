var password = document.querySelector('#pwd');
var confirmPassword = document.querySelector('#confirm_pwd');
const btn = document.querySelector('button');
const confirmation = document.querySelector('.confirmation');

password.addEventListener('keyup', comparePassword);
confirmPassword.addEventListener('keyup', comparePassword);

/*comparing passwords on every keyup event fired*/
function comparePassword() {
    if (password.value != confirmPassword.value) {
        password.style.border = '2px solid red';
        confirmPassword.style.border = '2px solid red';
        confirmation.style.color = 'red';
        confirmation.textContent = "passwords do not match";
    } else {
        password.style.border = '2px solid green';
        confirmPassword.style.border = '2px solid green';
        confirmation.style.color = 'green';
        confirmation.textContent = "passwords match";
    }
}



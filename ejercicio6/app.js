const nameUser = document.getElementById('name');
const lastName = document.getElementById('lastName');
const password = document.getElementById('password');
const confirmPass = document.getElementById('confirmPassword');
const email = document.getElementById('email');
const nameError = document.getElementById('errorMessage1');
const passError = document.getElementById('errorMessage2');
const emailError = document.getElementById('errorMessage3');
const lstNameError = document.getElementById('errorMessage5')


nameUser.addEventListener('input', validateName)

function validateName(){
    const nameVal = nameUser.value.trim();
    nameError.textContent = '';

    if(nameVal < 3){
        nameError.textContent = 'Debe tener al menos 3 caracteres';
    }else if(!/^[A-Z][a-zA-Z]*$/.test(nameVal)){
        nameError.textContent = 'Debe comenzar con mayuscula';
    }
}

lastName.addEventListener('input', validateLastName)
function validateLastName(){
    const lastNameVal = lastName.value.trim();
    lstNameError.textContent = '';

    if(lastNameVal.length < 3){
        lstNameError.textContent = 'Debe tener al menos 3 caracteres';
    }else if(!/^[A-Z][a-zA-Z]*$/.test(lastNameVal)){
        lstNameError.textContent = 'Debe comenzar con mayuscula';
    }
}

password.addEventListener('input', validatePassword)
confirmPass.addEventListener('input', validatePassword)
function validatePassword(){
    const passwordVal = password.value.trim();
    const passwordVal2 = confirmPass.value.trim();
    passError.textContent = '';

    if(passwordVal == passwordVal2){
        passError.textContent = '';
    }else{
        passError.textContent = 'Las contraseñas deben coincidir';
    }

}

email.addEventListener('input', validateEmail)
function validateEmail(){
    const emailVal = email.value.trim();
    emailError.textContent = '';

    if(!(emailVal.includes('@'))){
        emailError.textContent = 'El correo debe contener arroba';
    }else{
        emailError.textContent = '';
    }
}
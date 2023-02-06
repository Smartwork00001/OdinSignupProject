const password = document.querySelector('input[name="password"]');
const confirmpassword = document.querySelector('input[name="confirmpassword"]');
const passwordWarning = document.querySelector('#password-warning');

function passwordValidator(){
    if(password.value !== confirmpassword.value){
        passwordWarning.textContent = "Passwords not same!";
    }else{
        passwordWarning.textContent = '';
    }
}

confirmpassword.addEventListener('input', passwordValidator);
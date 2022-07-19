const form = document.getElementById('form');
const name = document.getElementById('name');
const surName = document.getElementById('surName');
const cpf = document.getElementById('cpf');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirme = document.getElementById('passwordConfirme');

form.addEventListener('submit', function(event){
    event.preventDefault();
    
    checkInputs();
})

function checkInputs() {
    const nameValue = name.value;
    const surNameValue = surName.value;
    const cpfValue = cpf.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passwordConfirmeValue = passwordConfirme.value;

    if(nameValue == ""){
        setErrorFor(name, "Preencha este Campo")
    } else {
        setSucessFor(name);
    }

    if(surNameValue == ""){
        setErrorFor(surName, "Preencha este Campo")
    } else {
        setSucessFor(surName);
    }

    if(cpfValue == ""){
        setErrorFor(cpf, "Preencha este Campo")
    } else {
        setSucessFor(cpf);
    }

    if(emailValue == ""){
        setErrorFor(email, "Preencha este Campo")
    } else if(!emailValue.includes("@")) {
        setErrorFor(email, "Insira um email válido")
    } else {
        setSucessFor(email);
    }

    if(passwordValue == ""){
        setErrorFor(password, "Preencha este Campo")
    } else if(passwordValue.length < 6) {
        setErrorFor(password, "Insira uma senha mais forte")
    } else {
        setSucessFor(password);
    }

    if(passwordConfirmeValue == ""){
        setErrorFor(passwordConfirme, "Preencha este Campo")
    } else if(passwordConfirmeValue != passwordValue) {
        setErrorFor(passwordConfirme, "As senhas não coincidem")
    } else {
        setSucessFor(passwordConfirme);
    }
    
}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;
    formControl.className = 'MuiSignup-input error'
}

function setSucessFor(input){
    const formControl = input.parentElement;

    formControl.className = 'MuiSignup-input success';
}


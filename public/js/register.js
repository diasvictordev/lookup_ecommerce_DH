const form = document.getElementById('form');
const name = document.getElementById('name');
const surName = document.getElementById('surName');
const cpf = document.getElementById('cpf');
const tel = document.getElementById('tel');
const email = document.getElementById('email');
const dateBirthday = document.getElementById('date');
const password = document.getElementById('password');
const passwordConfirme = document.getElementById('passwordConfirme');


form.addEventListener('submit', function(event){
    // event.preventDefault();

    checkErrorInputs();
})

name.addEventListener('change', function(event){
    const nameValue = name.value;
    
    if(nameValue != ""){
        setSucessFor(name);
    } else {
        setErrorFor(name, "Preencha este Campo")
    }
})

surName.addEventListener('change', function(event){
    const surNameValue = surName.value;
    
    if(surNameValue != ""){
        setSucessFor(surName);
    } else {
        setErrorFor(surName, "Preencha este Campo")
    }
})

cpf.addEventListener('change', function(event){
    const cpfValue = cpf.value;
    
    if(cpfValue != ""){
        setSucessFor(cpf);
    } else {
        setErrorFor(cpf, "Preencha este Campo")
    }
})

tel.addEventListener('change', function(event){
    const telValue = tel.value;
    
    if(telValue != ""){
        setSucessFor(tel);
    } else {
        setErrorFor(tel, "Preencha este Campo")
    }
})

email.addEventListener('change', function(event){

    validacaoEmail(email);
})


dateBirthday.addEventListener('change', function(event){
    const dateBirthdayValue = dateBirthday.value;
    
    if(dateBirthdayValue != ""){
        setSucessFor(dateBirthday);
    } else {
        setErrorFor(dateBirthday, "Preencha este Campo")
    }
})

password.addEventListener('change', function(event){
    const passwordValue = password.value;
    
    if(passwordValue != "" && passwordValue.length > 6){
        setSucessFor(password);
    } else {
        setErrorFor(password, "Insira uma senha mais forte");
    }    
})

passwordConfirme.addEventListener('change', function(event){
    const passwordConfirmeValue = passwordConfirme.value;
    const passwordValue = password.value;
    
    if(passwordConfirmeValue != "" && passwordConfirmeValue == passwordValue){
        setSucessFor(passwordConfirme);
    } else {
        setErrorFor(passwordConfirme, "As senhas não coincidem")
    }
})

function checkErrorInputs() {
    const nameValue = name.value;
    const surNameValue = surName.value;
    const cpfValue = cpf.value;
    const telValue = tel.value;
    const emailValue = email.value;
    const dateBirthdayValue = dateBirthday.value;
    const passwordValue = password.value;
    const passwordConfirmeValue = passwordConfirme.value;
    
    if(nameValue == ""){        

        setErrorFor(name, "Preencha este Campo")
    }

    if(surNameValue == ""){

        setErrorFor(surName, "Preencha este Campo")
    }

    if(cpfValue == ""){

        setErrorFor(cpf, "Preencha este Campo")
    }

    if(telValue == ""){

        setErrorFor(tel, "Preencha este Campo")
    }

    if(emailValue == ""){

        setErrorFor(email, "Preencha este Campo")
    }

    if(dateBirthdayValue == ""){

        setErrorFor(dateBirthday, "Preencha este Campo")
    }

    if(passwordValue == ""){

        setErrorFor(password, "Preencha este Campo")
    } else if(passwordValue.length < 6) {

        setErrorFor(password, "Insira uma senha mais forte")
    }

    if(passwordConfirmeValue == ""){

        setErrorFor(passwordConfirme, "Preencha este Campo")
    } else if(passwordConfirmeValue != passwordValue) {

        setErrorFor(passwordConfirme, "As senhas não coincidem")
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

function validacaoEmail(field) {
    usuario = field.value.substring(0, field.value.indexOf("@"));
    dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
    
    if ((usuario.length >=1) &&
        (dominio.length >=3) &&
        (usuario.search("@")==-1) &&
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) &&
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&
        (dominio.indexOf(".") >=1)&&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
    
            setSucessFor(email);
    }
    else{
        setErrorFor(email, "Insira um email válido");
    }
}


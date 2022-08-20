const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');
const { User } = require("../database/models");


form.addEventListener('submit', function(event){
    event.preventDefault();
    alert("funciona")

    checkLogin();
})


function checkLogin() {
    
    if(email.value == ""){
        alert("funciona")
        
        setErrorFor("Email ou senha incorreto");
    }
    
}


function setErrorFor(message){
    const small = document.querySelector('small');

    small.innerText = message;
    small.parentElement.className = 'loginErrors-container error'
}
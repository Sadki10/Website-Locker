const password = document.getElementById('password').value;
const confirmPasswd = document.getElementById('confirmPasswd').value;
const form = document.getElementById('form');

form.addEventListener('submit', e=>{
    if (password === confirmPasswd) {
        console.log('hola');
    }
})
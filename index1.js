//var password = document.getElementById('password').value;
console.log("alkdj");
// falta posar variables i funcions aquí, moltes estan més abaix
var password = document.getElementById('password').value;
var localPasswd = localStorage.getItem('localPasswd');
// Funció per a mostrar o ocultar
function chDisplay(display) {
    document.getElementById('confirmPasswd').style.display = display;
    document.getElementById('savePasswd').style.display = display;
}

//  document.addEventListener('submit', savePasswd => {
//     var password = document.getElementById('password').value;
//     console.log(password);
//     if (savePasswd.submitter && savePasswd.submitter.id === 'savePasswd') {
//         var confirmPasswd = document.getElementById('password').value;

//         if (confirmPasswd === password) {
//             //alert('hola')
//             var localPasswd = localStorage.setItem("localPasswd", confirmPasswd);
//             alert(localStorage.getItem("localPasswd"));
//         } else {
//             alert('NO corresponen')
//         }
//     } else if (savePasswd.submitter.id === 'resetPasswd') {
//         // var chPasswdDisplay = document.getElementById('confirmPasswd') || document.getElementById('savePasswd');
//         // chPasswdDisplay.style.display = '';
//         function chDisplay(display) {
//             document.getElementById('confirmPasswd').style.display = display;
//             document.getElementById('savePasswd').style.display = display;
//         }
//         chDisplay('inline-block');
//         //document.getElementById('confirmPasswd').style.display = '';
//         alert('canviar')
//     } else {
//         alert('NO estás loguejat')
//     }
//  });

// Aixó es un cop registrat, si hi ha una contrasenya guardada.
// if (localStorage.hasOwnProperty('localPasswd') == true) {
//     //alert(localStorage.getItem("localPasswd"))
//     //alert('display1')
//     chDisplay('none');
//     //alert('display2')
//     //document.addEventListener('submit', passwdFunct);

// // un altre document.addeventlistener de submit, on submitter igual a confirmar es guarda la contrasenya
// } //else {
    //atrlert('no hi ha contrasenya')

    function passwdFunct() {
        // if submitter unlock tal else if submitter change password lo de abaix
        //if (Passwd.submitter.id === 'submitPasswd') {
            var password = document.getElementById('password').value;
            if (localPasswd === password) {
                // quitar bloqueo de la pagina
                document.body.classList.remove('blocker');
            } else {
                alert('Contrasenya incorrecta');
          //  }
        } //else if (Passwd.submitter.id === 'resetPasswd') {
            chDisplay('');
            // if submitter igual a confirmar es guarda if contra1 y 2 iguals 
        //}
    
    };
    
    document.addEventListener('submit', savePasswdFunct)
    function savePasswdFunct(savePasswd) {        
        //alert('hola')
        console.log(password);
        console.log('savepasswd');
        if (savePasswd.submitter.id === 'savePasswd') {
            var password = document.getElementById('password').value;
            var confirmPasswd = document.getElementById('confirmPasswd').value;

            if (confirmPasswd === password) {
                alert('holaa')
                var localPasswd = localStorage.setItem("localPasswd", confirmPasswd);
                alert(localStorage.getItem("localPasswd"));
            } else {
                alert('NO corresponen')
            }
        } /*else if (savePasswd.submitter.id === 'resetPasswd') {
            // var chPasswdDisplay = document.getElementById('confirmPasswd') || document.getElementById('savePasswd');
            // chPasswdDisplay.style.display = '';
            function chDisplay(display) {
                document.getElementById('confirmPasswd').style.display = display;
                document.getElementById('savePasswd').style.display = display;
            }
            chDisplay('inline-block');
            //document.getElementById('confirmPasswd').style.display = '';
            alert('canviar')
        } else {
            alert('NO estás loguejat')
        }*/
    };
//}


/*document.getElementById('submitPassword').addEventListener('submit', savePasswd => {
    var password = document.getElementById('password').value;
    console.log(password);
});
console.log(password);*/

/*function savePasswd(password) {
    var password = document.getElementById('password').value;
}
function unlock() {
    
}*/

// chPasswd --> confirmPassword
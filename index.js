
/*chrome.runtime.onMessage.addListener((obj, sender, response) =>{
    var cmd = obj;

    if (cmd == 'block-page') {
        alert('holas');
        blocker();
    }
})*/
var websites = [];
if (localStorage.hasOwnProperty('websites') === true){websites = JSON.parse(localStorage.getItem('websites'))};
websites.push('insbaixcamp');
console.log('nolocation');
for (let i = 0; i < websites.length; i++) { 
    const website = websites[i];
    if (location.href.includes(website)){
//if (location.href.includes(websites)) {
    console.log('location')
//function blocker() {
    const dialog = document.createElement('dialog');
    dialog.setAttribute("id", "dialogBlocker")
    dialog.classList.add('blocker');
   
    const iframe = document.createElement('iframe');
    iframe.src = chrome.runtime.getURL('index.html');
    iframe.classList.add('iframe')

    dialog.append(iframe);

    document.documentElement.append(dialog);
    // top layer
    dialog.showModal();
    document.body.style.filter = 'blur(15px)';
    
//}
    }
}
//var password = document.getElementById('password').value;

// falta posar variables i funcions aquí, moltes estan més abaix
//var password = document.getElementById('password').value;
var localPasswd = localStorage.getItem('localPasswd');
//document.body.classList.add('blocker');
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
if (localStorage.hasOwnProperty('localPasswd') == true) {
    //alert(localStorage.getItem("localPasswd"))
    chDisplay('none');
    document.addEventListener('submit', (Passwd) => {
        // if submitter unlock tal else if submitter change password lo de abaix
        if (Passwd.submitter.id === 'submitPasswd') {
            Passwd.preventDefault();
            var password = document.getElementById('password').value;
            console.log(password);
            console.log(localPasswd)
            if (localPasswd === password) {
                // eliminar bloqueig
                // s'hauria de fer al worker
                var blocker = document.getElementById('dialogBlocker');
                document.body.classList.remove('blocker');
                //blocker.remove();
                //document.getElementsByClassName('blocker').remove();

                // chrome.runtime.sendMessage({
                //     cmd: 'close-me'
                //   });

            } else {
                alert('Contrasenya incorrecta');
            }
        } else if (Passwd.submitter.id === 'resetPasswd') {
            //chDisplay('');
            localStorage.removeItem('localPasswd')
            // if submitter igual a confirmar es guarda if contra1 y 2 iguals 
        }         
        
    });
// un altre document.addeventlistener de submit, on submitter igual a confirmar es guarda la contrasenya
} //else {
    //atrlert('no hi ha contrasenya')
    document.addEventListener('submit', savePasswd => {        
        //alert('hola')
        if (savePasswd.submitter.id === 'savePasswd') {
            var password = document.getElementById('password').value;
            var confirmPasswd = document.getElementById('confirmPasswd').value;

            if (confirmPasswd === password) {
                var localPasswd = localStorage.setItem("localPasswd", confirmPasswd);
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
    });
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
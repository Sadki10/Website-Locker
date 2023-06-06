if (localStorage.hasOwnProperty('websites') === true) {
    websites = JSON.parse(localStorage.getItem('websites'));
    document.getElementById('websites').value = websites;
}
 document.addEventListener('submit', blacklistWebsites => {
     blacklistWebsites.preventDefault();
     websites = document.getElementById('websites').value.split(',');
    console.log(websites);
    localStorage.setItem('websites',JSON.stringify(websites));
    console.log('hola1');
 });
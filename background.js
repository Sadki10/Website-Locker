// if (chrome.storage.local.hasOwnProperty('websites') == true) {
//     websites = JSON.parse(localStorage.getItem('websites'));
// }
//var backgroundPage = chrome.extension.getBackgroundPage();
//backgroundPage.blocker();

chrome.tabs.onUpdated.addListener((tabId, tab) =>{
    if (tab.url && tab.url.includes("7tv") ) {
        //files:[index.js];
        backgroundPage
        console.log('block');
        chrome.tabs.sendMessage(tabId, {
            cmd: 'block-page'
        })
    }
})
// if (pagina === blacklist) {
    
// };

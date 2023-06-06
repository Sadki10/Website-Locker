function blocker() {
    const dialog = document.createElement('dialog');
    dialog.style = `
      padding: 0;
      border: none;
      max-width:100%;
      max-height: 100%;
      overflow: hidden;
      background-color: transparent;
    `;

    const iframe = document.createElement('iframe');
    iframe.src = chrome.runtime.getURL('index.html');
    iframe.style = `
      border: none;
      width: 100vw;
      height: 100vh;
    `;
    dialog.append(iframe);

    document.documentElement.append(dialog);
    // top layer
    dialog.showModal();

    document.body.style.filter = 'blur(15px)';
    
}
function loadIframe() {
    const iframe = document.createElement('iframe');
    iframe.width = "0";
    iframe.height = "0";
    iframe.style.background = "transparent";
    iframe.style.border = "0";
    iframe.src = "./content.html"
    document.body.appendChild(iframe);
}

loadIframe();
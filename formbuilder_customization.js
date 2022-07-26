document.addEventListener("DOMContentLoaded", setupCustomization);
function setupCustomization() {
    console.clear();
    let currentPage = getCurrentPage();
    console.log(currentPage)
}

function getCurrentPage(){
    let allPageEls = document.querySelectorAll("div[data-role='page']");
    let currentActivePage = 1;
    for (let i=1; i<=allPageEls.length; i++){
        if (allPageEls[i].getAttribute("data-is-current-page") != "1"){
            currentActivePage = i;
        }
    }
    return currentActivePage;
}

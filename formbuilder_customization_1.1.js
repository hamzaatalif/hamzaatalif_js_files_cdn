document.addEventListener("DOMContentLoaded", setupCustomization);
function setupCustomization() {
    console.clear();
    let currentPage = getCurrentPage();
    let prevCurrentPage = currentPage;
    console.log(currentPage)
    console.log(prevCurrentPage)
    let nextButton = document.querySelector("button[data-role='next-page']");
    nextButton.addEventListener("click", () => {
        let checkForNewPage = setInterval(() => {
            if (currentPage != prevCurrentPage) {
                clearInterval(checkForNewPage)
                currentPage = getCurrentPage();
                prevCurrentPage = currentPage;
                console.log(currentPage)
                console.log(prevCurrentPage)
            }
        }, 100);
    })
}

function getCurrentPage() {
    let allPageEls = document.querySelectorAll("div[data-role='page']");
    let currentActivePage = 1;
    for (let i = 1; i <= allPageEls.length; i++) {
        if (allPageEls[i].getAttribute("data-is-current-page") != "1") {
            currentActivePage = i;
        }
    }
    return currentActivePage;
}
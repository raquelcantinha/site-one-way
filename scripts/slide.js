const btnBack = document.querySelector('.go-back');
const btnForward = document.querySelector('.go-forward');
btnBack.onclick = function() {backForward(-750, -250)};
btnForward.onclick = function() {backForward(750, 250)}
function backForward(n, m) {
    const newsBox = document.querySelector('.elements-container');
    let screenWidth = window.screen.width;
    if (screenWidth > 768) {
    newsBox.scrollBy(n, 0);
    } else {
        newsBox.scrollBy(m, 0);
    }
}
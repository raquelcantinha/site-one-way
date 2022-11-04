const btnTop = document.getElementById('back-top');

window.onscroll = function() {mostrarBotaoTop()};

function mostrarBotaoTop() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btnTop.style.display = "block";
    } else {
        btnTop.style.display = "none"
    }
}

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

btnTop.addEventListener('click', backToTop);
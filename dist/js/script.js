
// navabar fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixednav = header.offsetTop;

    if (window.pageYOffset > fixednav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
};

// hamburgeer

const hamburger = document.querySelector('#hamburger');
const navMnu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMnu.classList.toggle('hidden');

});

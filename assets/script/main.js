function headerScrolled() {
    const nav = document.querySelector('nav');
    const sticky = nav.offsetTop;
    
    window.onscroll = function() {
        if (window.scrollY > sticky) {
            nav.classList.add('fixed');
        } else {
            nav.classList.remove('fixed');
        }
    };
}
document.addEventListener('DOMContentLoaded', headerScrolled);
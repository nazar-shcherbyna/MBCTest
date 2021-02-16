document.querySelector('.hamburger__btn').addEventListener('click', function(e) {
    e.preventDefault();
    if (this.classList.contains('is-active')) {
        this.classList.remove('is-active');
        document.querySelector('.hamburger__menu').classList.remove('nav-active');
        document.querySelector('.hamburger').classList.remove('body-active');
    }
    else {
        this.classList.add('is-active');
        document.querySelector('.hamburger__menu').classList.add('nav-active');
        document.querySelector('.hamburger').classList.add('body-active');
    }
})

let close = document.getElementsByClassName('ham-link');

function closeMenu(){
    document.querySelector('.hamburger__btn').click();   
}
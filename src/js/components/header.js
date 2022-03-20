function logoMove(event) {

    if (window.screen.width <= 1200) {
        const logo = document.querySelector('.header__logo');
        const headerContainer = document.querySelector('.header > .container');
        headerContainer.prepend(logo);
    } else {
        const logo = document.querySelector('.header__logo');
        const headerContent= document.querySelector('.header__content');
        headerContent.prepend(logo);
    }
}


function toggleMobileMenu(event) {
    document.querySelectorAll('.header__burger, .header__content').forEach(item => {
        item.classList.toggle('active');
    });
    document.querySelector('html').classList.toggle('lock');
    document.querySelector('header').classList.toggle('open-menu');
}


if (document.querySelectorAll('.header__logo, .header, .header__content').length) {
    logoMove();
    window.addEventListener('resize', logoMove)
}

const burger = document.querySelector('.header__burger');
if (burger) {
    burger.addEventListener('click', toggleMobileMenu);

}
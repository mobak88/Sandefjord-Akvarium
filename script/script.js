const burgerNav = document.getElementsByClassName('header__nav-hamburger')[0];
const mobileNav = document.getElementsByClassName('header__nav-mobile')[0];

burgerNav.addEventListener('click', () => {
    mobileNav.classList.toggle('header__nav-mobile--active');
});
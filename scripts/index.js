const burgerNav = document.getElementsByClassName('header__nav-hamburger')[0];
const mobileNav = document.getElementsByClassName('header__nav-mobile')[0];
const footerNewsletter = document.querySelector('.footer__newsletter-button');

burgerNav.addEventListener('click', () => {
  mobileNav.classList.toggle('header__nav-mobile--active');
});

footerNewsletter.addEventListener('click', (e) => {
  e.preventDefault();
});

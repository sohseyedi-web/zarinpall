const navIcon = document.querySelector('.navbars-item__icon');
const navItem = document.querySelector('.navbars-item__link');

navIcon.addEventListener('click', () => {
    navItem.classList.toggle('activeIcon')
})
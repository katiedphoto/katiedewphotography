const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');
if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const open = navigation.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.innerHTML = open ? '<span class="sr-only">Close menu</span>×' : '<span class="sr-only">Open menu</span>☰';
  });
}
document.querySelectorAll('[data-year]').forEach(item => item.textContent = new Date().getFullYear());



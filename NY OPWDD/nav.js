const toggle = document.getElementById('nav-menu-toggle');
const nav = document.getElementById('nav-collapsible');

toggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.nav-header__dropdown').forEach((button) => {
  button.addEventListener('click', () => {
    const isOpen = button.classList.toggle('is-open');
    button.setAttribute('aria-expanded', String(isOpen));
  });
});

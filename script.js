// Controle do  menu mobile
const menuIcon = document.querySelector('#menu-icon');
const navLit = document.querySelector('.navlist');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navLit.classList.toggle('open');

    // bloquear scroll quando menu aberto
    document.body.style.overflow = navlist.classList.contains('open') ? 'hidden' : 'auto';
});

// fechar menu ao clicar em links
document.querySelectorAll('.navlist a').forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navLit.classList.remove('open');
        document.body.style.overflow = 'auto';
    });
});

// fechar menu ao rolar 
window.addEventListener('scroll', () => {
    if(navlist.classList.contains('open')) {
        menuIcon.classList.remove('bx-x');
        navlist.classList.remove('open');
        document.body.style.overflow = 'auto';
    }
});
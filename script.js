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
// navegação ativa
// seleciona todos os links de navegação
const navLinks = document.querySelectorAll('.navlist a');

// funcao para adicionar a classe "active ao link clicado
function activeLink() {
    navLinks.forEach(intem => item.classList.remove('active')); //remove a classe "active" de todos os links 
    this.classList.add('active'); // adiciona a classe "active" ao link clicado
}

// adiciona um evento de clique a cada link de navegação
navLinks.forEach(item => item.addEventListener('click', activeLink));
// alternar modo claro/escuro
// função para alternar entre os temas claro e escuro
function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle('light'); //alternar a classe "light" no elemento html

    // salva o tema escolhido no localStorage
    const mode = html.classList.contains('light') ? 'light' : 'dark';
    localStorage.setItem('theme', mode);

    // atualiza a cor do texto do titulo
    updatetextColor();
}

// carrega o tema salvo no localStorage ao carregar a pagina
const savedtheme = localStorage.getItem('theme');
if(savedtheme) {
    document.documentElement.classList.toggle('light', savedtheme === 'light');
}


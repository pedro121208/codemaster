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

// animação do titulo
// seleciona o elemento do titulo e define variaveis para a animação
const titleElement = document.querySelector('#name');
const text = "CODEMASTER";
let index = 0;
let isTyping = true;
let currentColor = document.documentElement.classList.contains('light') ? 'black' : '#fff';

// funcao para animar o texto do titulo (digitação e apagamento)
function animateText(){
    if(isTyping) {
        if(index < text.length) {
            titleElement.textContent = text.slice(0, index + 1); //adiciona uma letra ao titulo
            index++;
        } else{
            isTyping = false; //alterna para o modo de apagamento 
        }
    } else {
        if(index > 1) {
            titleElement.textContent = text.slice(0, index - 1); //remove uma letra do titulo
            index--;
        } else {
            isTyping = true; //alterna para o modo de digitação
            //alterna a cor do texto entre branco/preto e laranja
            currentColor = currentColor === (document.documentElement.classList.contains ('light') ? 'black' : '#fff') ? '#c94c16' : (document.documentElement.classList.contains ('light') ? 'black' : '#fff');
            titleElement.style.color = currentColor;
        }
    }
    setTimeout(animateText, 300); //define um intervalo para a proxima animação
}

//função para atualizar a cor do texto do titulo com base no tema 
function updatetextColor(){
    currentColor = document.documentElement.classList.contains('light') ? 'black' : '#fff';
    titleElement.style.color = currentColor;
}

// inicia a animação do titulo ao carregar a pagina
document.addEventListener('DOMContentLoaded', animateText);
updatetextColor();

// animação da seção home
//seleciona a seção home e aplica uma animção de fade-in
const homeSection = document.querySelector('#home');
homeSection.style.opacity = '0';
homeSection.style.transform = 'translate7(20px)';
homeSection.style.transition = 'opacity 1s ease, transform 1s ease';

setTimeout(() => {
    homeSection.style.opacity = '1';
    homeSection.style.transform = 'translateY(0)';
}, 100);

// animação das seções
//seleciona todas as seções e aplica animações de entrada
const sections = document.querySelector('section');

sections.forEach((sections, index) => {
    sections.style.opacity = '0';
    sections.style.transition = 'opacity 1s, transform 1s';

    //aplica diferentes transformações com base no indice da seção
    if(index !== 0) {
        if(index === 1) section.style.transform = 'translateY(100px)';
        else if (index === 2) section.style.transform = 'scale(0.8)';
        else if (index === 3) section.style.transform = 'rotateY(90deg)';
    }
});

//observar para animar as seções ao rolar a pagina
const observar = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'none';
        }
    });
});

//observa cada seção para aplicar a animação
sections.forEach((section) => observar.observe(section));

//botão de voltar ao topo
//adiciona um evento de clique ao botão de voltar ao topo
document.querySelector('.top a').addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({top: 0, behavior: 'smooth'}); //rola suavemente para o topo da pagina 
});

// carrossel de projetos
// seleciona os elementos do carrossel
const carouselSlide = document.querySelector('.carousel-slides');
const slides = document.querySelectorAll('.carousel-slide');
const prevButton = document.querySelector('.carousel-button.prev');
const nextbutton = document.querySelector('.carousel-button.netx');
let currentSlide = 0;
let autoSlideInterval;

// função para exibir o slide atual
function showSlide(slideIndex) {
    slides.forEach(slide => {
        slide.classList.remove('active');
        slide.style.displat = 'none';
    });

    // ajusta o indice do slide para garantir que ele esteja dento dos limites
    if(slideIndex < 0) currentSlide = slides.length - 1;
    else if (slideIndex >= slides.length) currentSlide = 0;
    else currentSlide = slideIndex;

    // exibeo slide atual
    slides[currentSlide].classList.add('active');
    slides[currentSlide].style.display = 'flex';
    updateSlidePosition();
}

//função para atualizar a posição do carrosel
function upadateSlidePosition() {
    const slideWidth = slides [0].offsetWidth;
    carouselSlide.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

//funcao para avancar para o proximo slide
function nextSlied() {
    showSlide(currentSlide + 1);
    resetAutoSLide(); //reiicia o intervalo de transição
}

//função para voltar ao slide anterior
function prevSlide(){
    showSlide(currentSlide - 1);
    resetAutoSLide(); //reinicia o intervalo de transição
}

//função para iniciar a transição automarica dos slides
function startAutoSlide() {
    autoSlideInterval = setInterval(nextSLide, 5000); //avanca o slide a cada 5 segundos
}

//função para reniciar a transição automatica
function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

//adiciona eventos de clique aos botoes de navegaçao do carrossel
nextbutton.addEventListener('click', nextSLide);
prevButton.addEventListener('click', prevSlide);

//inicializa o carrossel ao carregar a pagina
window.addEventListener('load', () => {
    showSlide(currentSlide);
    startAutoSlide();

    //atualiza a posicao do carrossel ao redimensionar a janela 
    window.addEventListener('resize', () => {
        upadateSlidePosition();
    });
});

//pausa a transição automatica ao passar o mouse sobre o carrossel 
carouselSlide.parentElement.addEventListener('mouseenter', () => {
    clearInterval(autoSlideInterval);
});

//retoma a transição automatica ao remover o mouse do carrossel
carouselSlide.parentElement.addEventListener('mouseleave', startAutoSlide);


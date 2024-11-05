// Adiciona um evento de clique ao botão
function sc(x) {
    // Rola a página para baixo 500 pixels
    window.scrollTo({
        top: (window.innerHeight*x), // distância para rolar (pode ajustar conforme necessário)
        left: 0, // não rolar para os lados
        behavior: 'smooth' // rolagem suave
    });
};
const slides = document.querySelector('.slides');
const slideItems = document.querySelectorAll('.slide');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

// Função para atualizar o slide ativo
function updateSlides(index) {
    const offset = -index * 100; // Calcula o deslocamento com base no índice
    slides.style.transform = `translateX(${offset}%)`;

    // Atualiza a classe "active" nos dots
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

// Função para ir ao próximo slide
function showNextSlide() {
    currentIndex = (currentIndex + 1) % slideItems.length;
    updateSlides(currentIndex);
}

// Função para ir ao slide anterior
function showPrevSlide() {
    currentIndex = (currentIndex - 1 + slideItems.length) % slideItems.length;
    updateSlides(currentIndex);
}

// Navegação pelos botões de próxima/anterior
nextButton.addEventListener('click', showNextSlide);
prevButton.addEventListener('click', showPrevSlide);

// Navegação pelos dots
dots.forEach(dot => {
    dot.addEventListener('click', (event) => {
        currentIndex = parseInt(event.target.dataset.index);
        updateSlides(currentIndex);
    });
});

function AAAAAA1(lk){
    location.href=lk;
}
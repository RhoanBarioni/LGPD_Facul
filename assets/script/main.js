// HEADER
function headerScrolled() {
    const nav = document.querySelector('nav');
    const sticky = nav.offsetTop;
    
    window.onscroll = function() {
        if (window.scrollY > sticky) {
            nav.classList.add('fixed');
        } else {
            nav.classList.remove('fixed');
        }
    };
}
document.addEventListener('DOMContentLoaded', headerScrolled);



// SLIDER
function slider(){
    const images = document.querySelectorAll('.slider-img .img');
    const texts = document.querySelectorAll('.slider-text > div');
    let currentIndex = 0;

    // Função para atualizar o slider
    function updateSlider() {
        // Esconde todas as imagens e textos
        images.forEach((img, i) => {
            img.classList.toggle('active', i === currentIndex);
            img.classList.toggle('none', i !== currentIndex);
        });

        texts.forEach((text, i) => {
            text.classList.toggle('active', i === currentIndex);
            text.classList.toggle('none', i !== currentIndex);
        });
    }

    function auto(){
        currentIndex = (currentIndex + 1) % images.length; // Avança para o próximo
        updateSlider();
    }

    // Inicializa o slider
    updateSlider();

    // Adiciona eventos para os botões de navegação
    document.querySelector('.next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length; // Avança para o próximo
        clearInterval(autoI);
        updateSlider();
        autoI = setInterval(auto, 3000);
    });

    document.querySelector('.prev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length; // Volta para o anterior
        clearInterval(autoI);
        updateSlider();
        autoI = setInterval(auto, 4000);
    });

    let autoI = setInterval(auto, 4000);
}
document.addEventListener('DOMContentLoaded', slider);



// FOOTER
function copyright(){
    const data = new Date;
    const year = data.getFullYear();

    function updateFooter(year){
        const spanS = document.querySelector('footer #year');
        const span = parseInt(spanS.textContent);

        if(span !== year){
            spanS.innerText = `2024 - ${year}`;
        }
    }

    updateFooter(year);
}

document.addEventListener('DOMContentLoaded', copyright);
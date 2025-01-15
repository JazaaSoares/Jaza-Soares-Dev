$(document).ready(function(){
    $('#mobile_btn').on('click',function(){
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find("i").toggleClass('fa-x');
    });

    $('#curriculo-button').on('click', function() {
        const pdfUrl = '/arquivos/curriculum.pdf'; // Substitua pelo caminho do PDF
        const link = document.createElement('a'); // Cria um elemento <a>
        link.href = pdfUrl; // Define o caminho do PDF
        link.download = 'arquivo.pdf'; // Nome do arquivo a ser baixado
        link.click(); // Simula o clique no link
    });

    const sections = $('.section'); // Certifique-se de que as seções têm a classe .section
    const navItems = $('.nav-item');



    $(window).on('scroll', function() {
        const header = $('header');
        let activeSectionIndex = 0;
        const scrollPosition = $(window).scrollTop() - header.outerHeight(); // Corrigido outerHeigth para outerHeight

        console.log(scrollPosition);

        // Adiciona ou remove a sombra do header
        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0,0,0,0.1)');
        }

        // Determina qual seção está ativa
        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - header.outerHeight(); // Corrigido outerHeigth para outerHeight
            const sectionBottom = sectionTop + section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false; // Interrompe o loop ao encontrar a seção ativa
            }
        });

        // Atualiza a classe 'active' no menu
        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });


    ScrollReveal().reveal('#home',{
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.banner2',{
        origin: 'left',
        duration: 1000,
        distance: '20%'
    });

    ScrollReveal().reveal('#description',{
        origin: 'right',
        duration: 1000,
        distance: '20%'
    });

    ScrollReveal().reveal('#skills',{
        origin: 'right',
        duration: 1000,
        distance: '20%'
    });

    ScrollReveal().reveal('#formacao',{
        origin: 'right',
        duration: 1000,
        distance: '20%'
    });

    ScrollReveal().reveal('#list-projects',{
        origin: 'right',
        duration: 1000,
        distance: '20%'
    });

    ScrollReveal().reveal('#contact',{
        origin: 'right',
        duration: 1000,
        distance: '20%'
    });
    




});

const swiper = new Swiper('.swiper', {
    loop: true,
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    pagination:{
        el:".swiper-pagination",
        clickable: true
    },
    breakpoints:{
        640:{
            slidesPerView:2,
            spaceBetween:20
        },
        800:{
            slidesPerView:4,
            spaceBetween:30
        },
        1170:{
            slidesPerView:5,
            spaceBetween:50
        }
    }
});
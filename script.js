$(document).ready(function(){
    
    $('#mobile_btn').on('click',function(){
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find("i").toggleClass('fa-x');
    });

    $('#curriculo-button').on('click', function() {
        const pdfUrl = 'arquivos/curriculum.pdf'; 
        const link = document.createElement('a'); 
        link.href = pdfUrl; 
        link.download = 'arquivo.pdf'; 
        link.click(); 
    });

    const sections = $('.section'); 
    const navItems = $('.nav-item');

    $(window).on('scroll', function() {
        const header = $('header');
        let activeSectionIndex = 0;
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        console.log(scrollPosition);

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0,0,0,0.1)');
        }

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 92.8; 
            const sectionBottom = sectionTop + section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false; 
            }
        });

       
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
    
    const mode = document.getElementById('mode-icon');

    mode.addEventListener('click', () => {
        
        const body = document.getElementById('all');
        const cta = document.getElementById('cta');
        const navbars = document.getElementById('navbars');
        const navI = document.getElementById('nav_lista');
        const mobNavList = document.getElementById('mobile_nav_lista');
        const projects = document.getElementById('list-projects');
        const description = document.getElementById('description');
        const darkWave = document.getElementById('dark-wave');
        const ligthWave = document.getElementById('ligth-wave');
        const mobileBtn = document.getElementById('mobile_btn');
        
        
        if(mode.classList.contains('fa-moon')){
            mode.classList.remove('fa-moon');
            mode.classList.add('fa-sun');
            

            body.classList.add('dark');
            cta.classList.add('dark');
            navbars.classList.add('dark');
            navI.classList.add('dark');
            mobNavList.classList.add('dark');
            projects.classList.add('dark');
            description.classList.add('dark');
            darkWave.classList.add('dark');
            ligthWave.classList.add('dark');
            mobileBtn.classList.add('dark');

            return;
        }

        mode.classList.remove('fa-sun');
        mode.classList.add('fa-moon');

        body.classList.remove('dark');
        cta.classList.remove('dark');
        navbars.classList.remove('dark');
        navI.classList.remove('dark');
        mobNavList.classList.remove('dark');
        projects.classList.remove('dark');
        description.classList.remove('dark');
        darkWave.classList.remove('dark');
        ligthWave.classList.remove('dark');
        mobileBtn.classList.remove('dark');

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
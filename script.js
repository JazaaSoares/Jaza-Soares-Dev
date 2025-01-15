$(document).ready(function(){
    $('#mobile_btn').on('click',function(){
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find("i").toggleClass('fa-x');
    });

    const sections = $('.section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function(){
        const header = $('header');
        let activeSectionIndex = 0;
        const scrollPosition = $(window).scrollTop() - header.outerHeigth;

        if(scrollPosition<=0){
            header.css('box-shadow', 'none');
        }else{
            header.css('box-shadow','5px 1px 5px rgba(0,0,0,0.1)')
        }

        sections.each(function(i){
                const section = $(this);
                const sectionTop = section.offset().top - 96;
                const sectionBottom = sectionTop + section.outerHeigth;

                if(scrollPosition >= sectionTop && scrollPosition < sectionBottom){
                    activeSectionIndex= i;
                    return false;
                } 
        })

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    })
});

const swiper = new Swiper('.swiper', {
    loop: true,
    grabCursor: true,
    navigation:{
        nextE1: ".swiper-button-next",
        prevE1: ".swiper-button-prev"
        
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
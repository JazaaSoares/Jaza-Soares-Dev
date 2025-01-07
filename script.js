$(document).ready(function(){
    $('#mobile_btn').on('click',function(){
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find("i").toggleClass('fa-x');
    });
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
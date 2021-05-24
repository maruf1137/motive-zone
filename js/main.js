$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    // navText : ["<i class="fas fa-chevron-right"></i>","<i class='fa fa-chevron-right'></i><i class="fas fa-chevron-left"></i>"],
    navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
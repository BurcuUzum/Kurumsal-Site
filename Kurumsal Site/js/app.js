const swiper = new Swiper('.main-slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
        // autoplay: true,
        // // autoplaySpeed:
        // autoplayDelay: 8000,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      type: 'bullets'
    },
    
  
    // Navigation arrows
    navigation: {
      nextEl: '.main-slider-swiper-button-next',
      prevEl: '.main-slider-swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
      enabled:false,
    },
  });

  const swiper2 = new Swiper('.carousel-slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2,
    spaceBetween: 50,

    breakpoints: {  
      '1024': {
        slidesPerView: 2,
        spaceBetween: 40,}
    },
  
  
    // Navigation arrows
    navigation: {
      nextEl: '.carousel-slider-swiper-button-next',
      prevEl: '.carousel-slider-swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
      enabled:false,
    },
  });


$( document ).ready( function(){

  $('.navbarBtn').on('click',function(){
    $('.submenu').toggleClass('active')
    $('body').toggleClass('submenuactive')
    setTimeout(() => {
      $('.submenu').toggleClass('animateClass')
    }, 200);
  })

  $('.langs').on('click',function(){
    $('.openLang').toggleClass('active')

  });

  $('.genel').on('click',function(){
    $('.modalType').addClass('active')

  });

  $('.buttonCloses').on('click',function(){
    $('.modalType').removeClass('active')

  });

} );


$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        nav: true,
        dots: true,
        navText: ["<span class='nav-btn prev-slide'>&#10094;</span>", "<span class='nav-btn next-slide'>&#10095;</span>"]
    });
  });
  
$(document).ready(function(){
    $('a[href^="#buy"], .topline a[href^="#"]').click(function (){
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;
    })
  
$('.my-gallery').slick({
  dots: false,
  infinite: true,
  speed: 200,
  fade: true,
  cssEase: 'linear'
});

$('.reviews').slick({
  dots: false,
  infinite: true,
  speed: 800,
  fade: false,
  cssEase: 'linear'
});    
    
    
});


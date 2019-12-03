


// for testimonial slider
$(document).ready(function(){
$('.testimonial_slider_wrap').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
  dots: false,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});
});




$('.video_modal').on('hide.bs.modal', function(e) {    
    var $if = $(e.delegateTarget).find('iframe');
    var src = $if.attr("src");
    $if.attr("src", '/empty.html');
    $if.attr("src", src);
});


$(document).click(function(event) { 
$target = $(event.target);
if(!$target.closest('.dropdown-toggle').length) {
$('body').removeClass('dropdown_open');
} 
});



$(document).ready(function(){
  $(".main_header .dropdown-toggle").click(function(){
    $("body").toggleClass("dropdown_open");
  });
});
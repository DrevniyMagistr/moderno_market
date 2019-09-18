$(function(){



  $(".rate-star").rateYo({
    rating: 5,
    starWidth: "12px",
    readOnly: true
  });

  $('.product-slider__inner').slick({

    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    dots:true,
    arrows:false,
    
  });

  var mixer = mixitup('.products__inner-box');


});
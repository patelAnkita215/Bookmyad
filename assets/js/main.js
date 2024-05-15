
AOS.init({

  easing: 'ease-out-back',

  duration: 1000

});
// side menu

var btn = document.querySelector('.toggle');
var btnst = true;
btn.onclick = function() {
  if(btnst == true) {
    document.querySelector('.toggle span').classList.add('toggle');
    document.getElementById('sidebar').classList.add('sidebarshow');
    btnst = false;
  }else if(btnst == false) {
    document.querySelector('.toggle span').classList.remove('toggle');
    document.getElementById('sidebar').classList.remove('sidebarshow');
    btnst = true;
  }
}

$("#example").typer({

  strings: [

    "Business growth",

    "10x Traffic",

    "Branding",

    "Conversion",

    "Retention",

  ]

});

$(document).ready(function () {
  $('.testislide').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2000,
    nav: true,
    dots: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      }
    }
  })
})
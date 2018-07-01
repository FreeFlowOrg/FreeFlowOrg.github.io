
 /* jQuery Pre loader
  -----------------------------------------------*/


$(document).ready(function() {
  $("#navg").hide();
$(window).on('load', function() { // makes sure the whole site is loaded
    $("#status").fadeOut(); // will first fade out the loading animation
    $("#preloader").delay(500).fadeOut("slow"); // will fade out the white DIV that covers the website.
    $("#navg").show(1200);
});
});

$(document).ready(function() {
  var c = 0;
  $("#coun").click(function() {
    c++;
    if(c%2 == 1) {
      $("#sen").css("filter", "blur(5px)");
    }
    else {
      $("#sen").css("filter", "blur(0px)");
    }
  });
});




$(document).ready(function() {
  $("#techwala, #presidwala, #sportswala, #acadwala, #cultwala, #contact, #news, #advisors, #stuwelfare, #tenders").hide();
    $("#tech").click(function() {
      $("#home, #about, #gallery, #presidwala, #sportswala, #acadwala, #cultwala,#contact, #news, #advisors, #tenders").hide();
      $("#techwala").show();
      $("#backhome, #hof, #gal, #newsb, #advi, #cont").css("border-bottom", "0px");
    });
    $("#cult").click(function() {
      $("#home, #about, #gallery, #techwala, #presidwala, #sportswala, #acadwala,#contact, #news, #advisors, #tenders").hide();
      $("#cultwala").show();
      $("#backhome, #hof, #gal, #newsb, #advi, #cont").css("border-bottom", "0px");
    });
    $("#presid").click(function() {
      $("#home, #about, #gallery, #sportswala, #acadwala, #cultwala, #techwala,#contact, #news, #advisors, #tenders").hide();
      $("#presidwala").show();
      $("#backhome, #hof, #gal, #newsb, #advi, #cont").css("border-bottom", "0px");
    });
    $("#sports").click(function() {
      $("#home, #about, #gallery, #acadwala, #cultwala, #techwala, #presidwala,#contact, #news, #advisors, #tenders").hide();
      $("#sportswala").show();
      $("#backhome, #hof, #gal, #newsb, #advi, #cont").css("border-bottom", "0px");
    });
    $("#acad").click(function() {
      $("#home, #about, #gallery, #techwala, #presidwala, #sportswala, #cultwala,#contact, #news, #advisors, #tenders").hide();
      $("#acadwala").show();
      $("#backhome, #hof, #gal, #newsb, #advi, #cont").css("border-bottom", "0px");
    });
    $("#stw").click(function() {
      $("#home, #about, #gallery, #sportswala, #acadwala, #cultwala, #techwala,#contact, #news, #advisors, #presidwala, #tenders").hide();
      $("#stuwelfare").show();
      $("#backhome, #hof, #gal, #newsb, #advi, #cont").css("border-bottom", "0px");
    });
    $("#backhome").click(function() {
       $("#techwala, #presidwala, #sportswala, #acadwala, #cultwala,#contact, #news, #advisors, #tenders").hide();
       $("#home, #about, #gallery").show(1000);
    });
    $("#cont").click(function() {
      $("#home, #about, #gallery, #techwala, #presidwala, #sportswala, #acadwala, #cultwala, #news, #tenders").hide();
      $("#contact").show(1000);
    });
    $("#newsb").click(function() {
        $("#home, #about, #gallery, #techwala, #presidwala, #sportswala, #acadwala, #cultwala, #contact, #advisors, #tenders").hide();
        $("#news").show(1000);
    });
    $("#gal").click(function() {
        $("#about, #techwala, #presidwala, #sportswala, #acadwala, #cultwala, #contact, #advisors, #tenders").hide();
        $("#gallery").show(1000);
    });
    $("#hof").click(function() {
         $("#gallery, #techwala, #presidwala, #sportswala, #acadwala, #cultwala, #contact, #advisors, #tenders").hide();
         $("#about").show(1000);
    });
    $("#advi").click(function() {
        $("#home, #about, #gallery, #techwala, #presidwala, #sportswala, #acadwala, #cultwala, #contact, #news, #tenders").hide();
        $("#advisors").show(1000);
    });
    $("#ten").click(function() {
        $("#home, #about, #gallery, #techwala, #presidwala, #sportswala, #acadwala, #cultwala, #contact, #news, #advisors").hide();
        $("#tenders").show(1000);
    });
  });

    $(document).ready(function(){
      $(window).scroll(function() { // check if scroll event happened
        if ($(document).scrollTop() > 50) { // check if user scrolled more than 50 from top of the browser window
          $("#navg").css("background-color", "#000");
          $(".navbar-right li a").css("color", "white");
          $(".navbar-right li a").css("font-weight", "500");
          $("#topImage").attr("src", "img/logoWideWhite.png");
           // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
        } else {
          $("#navg").css("background-color", "transparent");
           $(".navbar-right li a").css("color", "#999");
          $(".navbar-right li a").css("font-weight", "500");
          $("#backhome").css("border-bottom", "2px solid black");
         $("#hof, #gal, #newsb, #advi, #cont").css("border-bottom", "0px");
         $("#topImage").attr("src", "img/logoWideBlack.png");
           // if not, change it back to transparent
        }
      });
    });

    $(document).ready(function() {
      $("#backhome, #hof, #gal, #newsb, #advi, #cont,#ten").css("background", "transparent");
      $("#backhome").css("border-bottom", "2px solid black");
      $("#backhome").click(function() {
        $(this).css("border-bottom", "2px solid black").fadeIn(500);
        $("#hof, #gal, #newsb, #advi, #cont,#ten").css("border-bottom", "0px");
      });
      $("#hof").click(function() {
        $(this).css("border-bottom", "2px solid black").fadeIn(500);
        $("#backhome, #gal, #newsb, #advi, #cont,#ten").css("border-bottom", "0px");
      });
      $("#gal").click(function() {
        $(this).css("border-bottom", "2px solid black").fadeIn(500);
        $("#hof, #backhome, #newsb, #advi, #cont,#ten").css("border-bottom", "0px");
      });
      $("#newsb").click(function() {
        $(this).css("border-bottom", "2px solid black").fadeIn(500);
        $("#hof, #gal, #backhome, #advi, #cont,#ten").css("border-bottom", "0px");
      });
      $("#advi").click(function() {
        $(this).css("border-bottom", "2px solid black").fadeIn(500);
        $("#hof, #gal, #newsb, #backhome, #cont,#ten").css("border-bottom", "0px");
      });
      $("#cont").click(function() {
        $(this).css("border-bottom", "2px solid black").fadeIn(500);
        $("#hof, #gal, #newsb, #advi, #backhome,#ten").css("border-bottom", "0px");
      });
      $("#ten").click(function() {
        $(this).css("border-bottom", "2px solid black").fadeIn(500);
        $("#hof, #gal, #newsb, #backhome, #cont, #advi").css("border-bottom", "0px");
      });
    });




$(document).ready(function() {

  /* Hide mobile menu after clicking on a link
    -----------------------------------------------*/
      $("#navg").hide();
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });


  /* Smoothscroll js
  -----------------------------------------------*/
    $(function() {
        $('.navbar-default a').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 49
            }, 1000);
            event.preventDefault();
        });
    });


 /* Home Slideshow Vegas
  -----------------------------------------------*/
  $(function() {
    $('body').vegas({
        slides: [
            { src: 'images/slide-img1.jpg' },
            { src: 'images/slide-img2.jpg' },
            { src: 'images/slide-img3.jpg' }
        ],
        timer: false,
        transition: [ 'zoomIn', ],
        animation: ['kenburns']
    });
  });


  /* Team carousel
  -----------------------------------------------*/
  $(document).ready(function() {
      $("#team-carousel").owlCarousel({
          items : 3,
          itemsDesktop : [1199,3],
          itemsDesktopSmall : [979,3],
          slideSpeed: 300,
          itemsDesktop : [1199,2],
          itemsTablet: [768,1],
          itemsTabletSmall: [985,2],
          itemsMobile : [479,1],
      });
    });


    /* Back to Top
    -----------------------------------------------*/
    $(window).scroll(function() {
      if ($(this).scrollTop() > 200) {
          $('.go-top').fadeIn(200);
            } else {
                $('.go-top').fadeOut(200);
           }
        });
          // Animate the scroll to top
        $('.go-top').click(function(event) {
          event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 300);
    });


  /* wow
  -------------------------------*/
  new WOW({ mobile: false }).init();

  });

(function() {
  $('.menu-trigger').on('click', function(e) {
    e.preventDefault();
    return $('#circle-menu').toggleClass('open');
  });

}).call(this);

var flag=0;
  $(".menu-trigger").click(function(){
	
  	if(flag==0){
  $(".fa-power-off").css({'visibility':'hidden'});
	$("#wrapper").css({'visibility':'hidden'});
  // $("body").css({'background-color':'rgb(240,240,240'});
  		$('.test,#content-1,#content-2').css({
  	
   'filter'         : 'blur(5px)',
   '-webkit-filter' : 'blur(5px)',
   '-moz-filter'    : 'blur(5px)',
   '-o-filter'      : 'blur(5px)',
   '-ms-filter'     : 'blur(5px)'
});
	
  		flag =1;
}
  		else
  		{
  				$('.test,#content-1,#content-2').css({
  	
   'filter'         : 'blur(0px)',
   '-webkit-filter' : 'blur(0px)',
   '-moz-filter'    : 'blur(0px)',
   '-o-filter'      : 'blur(0px)',
   '-ms-filter'     : 'blur(0px)'
});
    $(".fa-power-off").css({'visibility':'visible'});
      // $("body").css({'background-color':'rgb(255,255,255'});



	$("#wrapper").css({'visibility':'visible'});
  				flag=0;
  		}


	});

$(window).on("load", function() {
$('body').toggleClass("loaded");
});


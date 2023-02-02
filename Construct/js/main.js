$(function(){
  

  $(".menu a, .footer a, .logo").on("click", function (e) {
		e.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top - 78;		
		$('body, html').animate({scrollTop: top}, 2000);
	});

  $('.menu__btn, .menu a').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active');
  });

});

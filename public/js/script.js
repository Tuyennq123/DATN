var script = function(){ 

	var win = $(window);
	var html = $('html');
	var body = $('body');

	var mMenu = function(){
		var m_nav = $('.main-nav');

		m_nav.find("ul li").each(function() {
			if($(this).find("ul>li").length > 0 && win.width() > 991){
				$(this).prepend('<i class="fa fa-angle-down menu-down" aria-hidden="true"></i>');
			}
			if($(this).find("ul>li").length > 0 && win.width() < 991){
				var btn = $('#show-megamenu');
				var nav = $('.header-menu');
				var btn_remove = $('#remove-menu');

				if($(this).find("ul>li").length > 0 && win.width() < 991){
					$(this).prepend('<i class="fa fa-plus show-submenu-btn" aria-hidden="true"></i>');
				}

				btn.click(function(){
					if (nav.not('.show-megamenu')) {
						$(this).addClass('active');
						nav.addClass('show-megamenu');
					}
				});

				btn_remove.click(function(){
					if (nav.hasClass('show-megamenu')) {
						btn.removeClass('active');
						nav.removeClass('show-megamenu');
					}
				});

				nav.find("li i").click(function(){
					var ul=$(this).nextAll("ul");
					if(ul.is(":hidden") === true){
						// $(this).addClass('active');
						// ul.slideDown(200);
						console.log("true");
					}
					else{
						// $(this).removeClass("active");
						// ul.slideUp();
						console.log('false');
					}
				});
			}
		});
	}

	var homeSlider = function(){
		$('.home-slider').slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			prevArrow: '<i class="fa fa-angle-left slick-arrow-left"></i>',
			nextArrow: '<i class="fa fa-angle-right slick-arrow-right"></i>',
			dots: true,
		});
	}

	var homeDepartmentSlider = function(){
		$('.home-department-slider').slick({
			infinite: true,
			slidesToShow: 8,
			slidesToScroll: 1,
			arrows: true,
			prevArrow: '<i class="fa fa-angle-left slick-arrow-left"></i>',
			nextArrow: '<i class="fa fa-angle-right slick-arrow-right"></i>',
			dots: false,
		});
	}

	var homeDoctor = function(){
		$('.home-doctor-slider').slick({
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			arrows: true,
			prevArrow: '<i class="fa fa-angle-left slick-arrow-left"></i>',
			nextArrow: '<i class="fa fa-angle-right slick-arrow-right"></i>',
			dots: false,
			responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 470,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			]
		});
	}

	var backToTop = function(){
		if($(".back-to-top").length > 0){
			$(window).scroll(function () {
				var e = $(window).scrollTop();
				if (e > 300) {
					$(".back-to-top").show();
				} else {
					$(".back-to-top").hide();
				}
			});
			$(".back-to-top").click(function () {
				$('body,html').animate({
					scrollTop: 0
				},500)
			});
		}
	}

	var homeGratefulSlider = function(){
		if($(".home-grateful-slider").length > 0){
			if(win.width() > 991){
				$('.home-grateful-slider"').slick('unslick');
			}
			else{
				$(".home-grateful-slider").slick({
					arrows: false,
					responsive: [
					{
						breakpoint: 991,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					}
					]
				});
			}
		}
	}

	var clickFooter = function(){
		if ($('.footer-info-title').length > 0 && win.width() < 470) {
			var btn = $('.footer-info-title');
			btn.click(function(){
				var ul = $(this).next("ul");
				if(ul.is(":hidden") === true){
					$(this).addClass('active');
					ul.slideDown(200);
				}
				else{
					$(this).removeClass("active");
					ul.slideUp();
				}
			});
		}
	}

	var countFromZero = function(){
		if($('.about-number-count').length>0){
			$('.about-number-count').each(function () {
				$(this).prop('Counter',0).animate({
					Counter: $(this).text()
				}, {
					duration: 2000,
					easing: 'swing',
					step: function (now) {
						$(this).text(Math.ceil(now));
					}
				});
			});
		}
	}

	var brandSlider = function(){
		if ($(".brands-sliders").length > 0) {
			$(".brands-sliders").slick({
				infinite: true,
				slidesToShow: 4,
				slidesToScroll: 1,
				arrows: false,
				dots: false,
				responsive: [
				{
					breakpoint: 991,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				}
				]
			});
		}
	}

	return {

		uiInit: function($fun){
			switch ($fun) {

				case 'mMenu':
				mMenu();
				break;

				case 'homeSlider':
				homeSlider();
				break;

				case 'homeDepartmentSlider':
				homeDepartmentSlider();
				break;

				case 'homeDoctor':
				homeDoctor();
				break;

				case 'backToTop':
				backToTop();
				break;

				case 'homeGratefulSlider':
				homeGratefulSlider();
				break;

				case 'clickFooter':
				clickFooter();
				break;
				case 'countFromZero':
				countFromZero();
				break;

				case 'brandSlider':
				brandSlider();
				break;

				default:
				homeSlider();
				homeDepartmentSlider();
				homeDoctor();
				backToTop();
				mMenu();
				homeGratefulSlider();
				clickFooter();
				countFromZero();
				brandSlider();

			}
		}
	}

}();


jQuery(function($) {
	script.uiInit();
});



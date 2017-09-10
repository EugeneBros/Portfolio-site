$(function() {

	// background video
	$('#header__bg').tubular({
		videoId: 'Jx_wkp0PuPg',
		wrapperZIndex: -1
	});

	//afisha slider
	$(".afisha__slider").slick({
		slidesToShow: 6,
		arrows: true,
		responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 5,
				slidesToScroll: 1,
				infinite: true
			}
		},
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				infinite: true
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		]
	});

	//afisha parallax
	// $(".afisha__bg").paroller({
	// 	factor: '0.2',
	// 	type: 'foreground',
	// 	direction: 'vertical'
	// });
	$(".afisha__bg2").paroller({
		factor: '0.5',
		type: 'foreground',
		direction: 'vertical'
	});
	$(".afisha__bg3").paroller({
		factor: '0.5',
		type: 'background',
		direction: 'vertical'
	});

	//review slider

	$(".reviews__tabs_content-slider").slick();

	//buy parallax

	$(".buy__bg2").paroller({
		factor: '0.7',
		type: 'foreground',
		direction: 'vertical'
	});

	$(".buy__bg4").paroller({
		factor: '0.5',
		type: 'foreground',
		direction: 'vertical'
	});

	//Reviews accordion
	
	$('#reviews__tabs a').click(function (e) {
		e.preventDefault()
		$(this).tab('show')
	});

	//smooth scroll

	$('a[data-target^="anchor"]').bind('click.smoothscroll', function(){
		var target = $(this).attr('href'),
			bl_top = $(target).offset().top;
		$('body, html').animate({scrollTop: bl_top}, 700);
		return false;
	});

});

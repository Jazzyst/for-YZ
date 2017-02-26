$(document).ready(function() {

	$(".item").magnificPopup({
		type : "image",
		// callbacks: {
		// 	resize: changeImgSize,
		// 	imageLoadComplete:changeImgSize,
		// 	change:changeImgSize
		// },
		gallery : {
			enabled : true
		},
		removalDelay: 300,
		mainClass: 'mfp-fade'
	});
	// function changeImgSize(){
	// 	var img = this.content.find('img');
	// 	img.css('max-height', '200%');
	// 	img.css('width', '200%');
	// 	img.css('max-width', '200%');
	// }

	// $(".popup_content").magnificPopup({type:"image"});



	$(".company").BlackAndWhite({
		invertHoverEffect: true
	});

	$('.single-item').slick({
		infinite: true,
		dots: true,
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 1000,
		arrows: false
	});

	$('.responsive').slick({
	focusOnSelect: true,
	dots: false,
	arrows: true,
	infinite: true,
	speed: 300,
	slidesToShow: 5,
	slidesToScroll: 1,
	nextArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
	prevArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
				dots: false
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

		},
		{
			breakpoint: 320,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}

		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	]
});



	$("nav li").click(function(){
		$("nav li").removeClass("active");
		$(this).addClass("active");
	});

		$(".board-item").click(function(){
		$(".board-item").removeClass("active");
		$(this).addClass("active");
	});

	
	$(".toggle_mnu").click(function() {
		$(this).toggleClass("on");
		$(".main-mnu").slideToggle();
		$(".sandwich").toggleClass("active");
	});
	
});

$(window).load(function() { 
	$(".loader_inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});
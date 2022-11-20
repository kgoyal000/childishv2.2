$(document).ready(function(){

	if ($('.collection__element').length) {
		$('.collection__element .slider__element').slick({
			slidesToShow:1,
			dots:true,
			arrows:false
		})
	}

	// function collectionResize(){
	// 	if ($('.slider__element').length) {
	// 		$('.slider__element').css("max-width" , $('.collection__wrapper--slide').width());
	// 		$('.grid__collection .elem__collection .collection__top .collection__element').css("max-width" , $('.collection__wrapper--slide').width());
	// 	}
	// }
	// $(window).on("resize" ,function(){
	// 	collectionResize();
	// });
	// collectionResize();

	if ($(".slider__images").length) {
		$('.slider__images').slick({
			slidesToShow:1,
			dots:true,
			arrows:false
		})
	}

	$('.dropdown__quick ul li a').on("click" ,function(e){
		e.preventDefault();
		if (!$(this).closest("li").hasClass('active__quick')) {
			$(this).closest("ul").find(".active__quick").removeClass("active__quick");
			$(this).closest('li').addClass("active__quick");
			$(this).closest(".quick__buy").removeClass('opened');
			$(this).closest(".dropdown__quick").fadeOut(300);
			let currentDrop = $(this).closest(".dropdown__quick");
			setTimeout(function(){
				$(currentDrop).find(".active__quick").removeClass("active__quick");
			}, 300);
		}
	});
	$('.quick__buy>a').on("click" ,function(e){
		e.preventDefault();
		$('.quick__buy').removeClass("opened");
		$('.quick__buy .dropdown__quick').css("display" ,"none");
		$(this).closest('.quick__buy').addClass('opened');
		$(this).closest(".quick__buy").find(".dropdown__quick").fadeIn(300);
	});

	$(document).click(function(event) { 
	  var $target = $(event.target);
	  if(!$target.closest('.quick__buy').length) {
	  	$('.quick__buy .opened').removeClass("opened");
	  	$('.quick__buy .dropdown__quick').fadeOut(300);
	  }        
	});

	$('.size__picker li a').on("click" ,function(e){
		e.preventDefault();
		if (!$(this).closest("li").hasClass('active__size')) {
			$(this).closest("ul").find(".active__size").removeClass('active__size');
			$(this).closest("li").addClass("active__size");
		}
	});



	$('.small__link>a').on("click" ,function(e){
		e.preventDefault();
		if ($(this).hasClass("opened")) {
			$(this).removeClass("opened");
			$(this).closest('.small__link').find("ul").slideUp(400);
		} else {
			$(this).addClass("opened");
			$(this).closest('.small__link').find("ul").slideDown(400);
		}
	});

	$('.cart__wrapper .top__cart .close__cart').on("click" ,function(e){
		e.preventDefault();
		$('.cart__wrapper').css("right" , "-" + $('.cart__wrapper').css('width'));
		$(".overlay").fadeOut(300);
		$('body,html').css("overflow-y", "initial");
	});


	$('.cart__info>a , .cart__button>a').on("click" ,function(e){
		e.preventDefault();
		$('.cart__wrapper').css("right" ,"0px");
		$(".overlay").fadeIn(300);
		$('body,html').css("overflow-y" , "hidden");
		$('.float__menu').fadeOut(300);
		$('.menu__button>a').removeClass("active__menu");
	});


	$('.quantity .plus__quantity').on("click" ,function(e){
		e.preventDefault();
		$(this).closest('.quantity').find("input").val(+$(this).closest('.quantity').find("input").val() + 1);
	});
	$('.quantity .minus__quantity').on("click" ,function(e){
		e.preventDefault();
		if ($(this).closest(".quantity").find("input").val() > 1) {
			$(this).closest('.quantity').find("input").val(+$(this).closest('.quantity').find("input").val() - 1);
		}
	});

	if ($('.gallery__wrapper').length) {
		$(window).on("resize" ,function(){
			galleryResize();
		});
	}
	function productGallery(){
		let height = $(window).height();
		height = $(window).height() - $(".top__cart").outerHeight() - $('.cart__desc').outerHeight() - $('.cart__tip').outerHeight()
		 -  $(".cart__bottom").outerHeight() - $(".products__wrapper").css("margin-top").slice(0,2) - $('.cart__wrapper .inner__cart').css("padding-top").slice(0,  2) - $('.cart__wrapper .inner__cart').css("padding-bottom").slice(0 , 2) - 20;
		$('.products__wrapper').css("height", height + "px");
	}
	productGallery();
	$(window).on("resize" ,function(){
		productGallery();
	})
	function galleryResize(){
		if ($('.gallery__wrapper').length) {
			$('.gallery__wrapper .elem__gallery').each(function(index,elem){
				$(elem).height($(elem).width()*0.76)
			});
		}
	}
	galleryResize();

	if ($(window).width() < 640) {
		if ($(".gallery__wrapper").length) {
			$('.gallery__wrapper .outer__gallery').slick({
				slidesToShow:1,
				arrows:true,
				dots:false,
				adaptiveHeight:true
			})
		}
	}

	$('.menu__button>a').on("click" ,function(e){
		e.preventDefault();
		if ($(this).hasClass("active__menu")) {
			$(this).removeClass("active__menu");
			$("body,html").css("overflow-y" , "initial");
			$('.float__menu').fadeOut(300);
		} else {
			$(this).addClass("active__menu");
			$("body,html").css("overflow-y" , "hidden");
			$('.float__menu').fadeIn(300);
		}
	});
});
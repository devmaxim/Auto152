$(function(){

	$('.header__button, .footer__button').click( () => {
		$('.popup__call').show(500);
	});
	$('.popup__call-form_close').click(() => {
		$('.popup__call').hide(500);
	});
	$('.main__button').click( () => {
		$('.popup__price').show(500);
	});
	$('.popup__price-form_close').click(() => {
		$('.popup__price').hide(500);
	});
	$('.discount__button').click( () => {
		$('.popup__buyout').show(500);
	});
	$('.popup__buyout-form_close').click(() => {
		$('.popup__buyout').hide(500);
	});
	$('.bonus__text-button').click( () => {
		$('.popup__gift').show(500);
	});
	$('.popup__gift-form_close').click(() => {
		$('.popup__gift').hide(500);
	});
	$('.gift__button').click( () => {
		$('.popup__free').show(500);
	});
	$('.popup__free-form_close').click(() => {
		$('.popup__free').hide(500);
	});

	
	$('.popup__call-form').submit(function(event) {
		event.preventDefault();
		$.ajax({
			type: "POST",
			url: "wp-content/themes/auto152-theme/mailer/popup-call.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			$("form").trigger("reset");
			$('.popup__call').hide(100);
			$('.thanks__call').show(300);
			setTimeout( () => {
				$('.thanks__call').hide(500);
			}, 3000);
		});
		return false;
	});	
	$('.popup__price-form').submit(function(event) {
		event.preventDefault();
		$.ajax({
			type: "POST",
			url: "wp-content/themes/auto152-theme/mailer/popup-price.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			$("form").trigger("reset");
			$('.popup__price').hide(100);
			$('.thanks__call').show(300);
			setTimeout( () => {
				$('.thanks__call').hide(500);
			}, 3000);
		});
		return false;
	});
	$('.popup__buyout-form').submit(function(event) {
		event.preventDefault();
		$.ajax({
			type: "POST",
			url: "wp-content/themes/auto152-theme/mailer/popup-buyout.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			$("form").trigger("reset");
			$('.popup__buyout').hide(100);
			$('.thanks__call').show(300);
			setTimeout( () => {
				$('.thanks__call').hide(500);
			}, 3000);
		});
		return false;
	});
	$('.stages__form').submit(function(event) {
		event.preventDefault();
		$.ajax({
			type: "POST",
			url: "wp-content/themes/auto152-theme/mailer/popup-stages.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			$("form").trigger("reset");
			$('.thanks__call').show(300);
			setTimeout( () => {
				$('.thanks__call').hide(500);
			}, 3000);
		});
		return false;
	});
	$('.popup__gift-form').submit(function(event) {
		event.preventDefault();
		$.ajax({
			type: "POST",
			url: "wp-content/themes/auto152-theme/mailer/popup-gift.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			$("form").trigger("reset");
			$('.popup__gift').hide(100);
			$('.thanks__call-2').show(300);
			setTimeout( () => {
				$('.thanks__call-2').hide(500);
			}, 3000);
		});
		return false;
	});
	$('.popup__free-form').submit(function(event) {
		event.preventDefault();
		$.ajax({
			type: "POST",
			url: "wp-content/themes/auto152-theme/mailer/popup-free.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			$("form").trigger("reset");
			$('.popup__free').hide(100);
			$('.thanks__call-3').show(300);
			setTimeout( () => {
				$('.thanks__call-3').hide(500);
			}, 3000);
		});
		return false;
	});
	$('.modal__exit-close').click(() => {
		$('.modal__exit').hide(300);
	});

	

	const modal = $('.modal__exit');

	document.addEventListener("mouseleave", function() {
	  const close = localStorage.getItem("close");
	  if (close !== "1") {
	  	modal.toggleClass('modal__exit-active');
	  }
	  localStorage.setItem("close", "1");
	});


	





});
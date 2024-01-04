// $('[name="phone"]').mask('+7 (999) 999-99-99');

// активная ссылка меню
$('.menu li a').each(function () {
	let location = window.location.href;
	let link = this.href;
	if (location === link) {
		$(this).addClass('active');
	}
});
// end

$('.btn-burger').on('click', function () {
	$('.fixed-menu').css('right', 0);
});

$('.fixed-menu__close').on('click', function () {
	$('.fixed-menu').css('right', '-100%');
});

$('.btn-filter').on('click', function (e) {
	e.preventDefault();
	$('.filter-section-wrapper').fadeIn();
});

$('.filter-section-wrapper__close').on('click', function () {
	$('.filter-section-wrapper').fadeOut();
});

$(function () {
	var handle = $(".custom-handle1 span");
	$(".slider1").slider({
		min: 3,
		max: 5,
		value: 4,
		animate: "slow",
		range: "min",
		create: function () {
			handle.text($(this).slider("value"));
		},
		slide: function (event, ui) {
			handle.text(ui.value);
			$(".slider-input1").val(ui.value);
		}
	});

	// $(".slider-input1").val($(".slider1").slider("values", 0));

	var handle2 = $(".custom-handle2 span");
	$(".slider2").slider({
		min: 41,
		max: 98,
		value: 56,
		animate: "slow",
		range: "min",
		create: function () {
			handle2.text($(this).slider("value"));
		},
		slide: function (event, ui) {
			handle2.text(ui.value);
			$(".slider-input2").val(ui.value);
		}
	});

	// $(".slider-input2").val($(".slider2").slider("values", 0));

	var handle3 = $(".custom-handle3 span");
	$(".slider3").slider({
		min: 1,
		max: 30,
		value: 9,
		animate: "slow",
		range: "min",
		create: function () {
			handle3.text($(this).slider("value"));
		},
		slide: function (event, ui) {
			handle3.text(ui.value);
			$(".slider-input3").val(ui.value);
		}
	});

	// $(".slider-input3").val($(".slider3").slider("values", 0));
});

$('.btn-show-more').on('click', function (e) {
	e.preventDefault();
	$('.documents-card:hidden').slice(0, 3).css('display', 'flex');

	var onBlock = $('.documents-card:hidden').length;
	if (onBlock <= 0) {
		$(this).hide();
	}
});


$(".datepicker").datepicker({
	// changeMonth: true,
	changeYear: true
});

Fancybox.bind("[data-fancybox]", {
	// Your custom options
});
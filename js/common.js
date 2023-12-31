// $('[name="phone"]').mask('+7 (999) 999-99-99');

$('.fixed-menu').hover(function () {
	$(this).toggleClass('active');
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
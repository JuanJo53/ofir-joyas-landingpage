$(document).ready(function () {
	$(window).on("load", function (arg) {
		$(".preloader").fadeOut("slow");
	});

	$(".services-carousel").owlCarousel({
		loop: true,
		margin: 0,
		autoplay: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 2
			},
			1000: {
				items: 3
			}
		}
	});
	$(".team-carousel").owlCarousel({
		loop: false,
		margin: 0,
		// autoplay: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 2
			},
			1000: {
				items: 3
			}
		}
	});
	$.scrollIt({
		topOffset: -50
	});
});

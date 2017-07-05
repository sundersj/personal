//#to-top button appears after scrolling
var fixed = false;
$(document).scroll(function() {
	if ($(this).scrollTop() > 250) {
		if (!fixed) {
			fixed = true;
			// $('#to-top').css({position:'fixed', display:'block'});
			$('#to-top').show("slow", function() {
				$('#to-top').css({
					position: 'fixed',
					display: 'block'
				});
			});
		}
	} else {
		if (fixed) {
			fixed = false;
			$('#to-top').hide("slow", function() {
				$('#to-top').css({
					display: 'none'
				});
			});
		}
	}
});
// Disable Google Maps scrolling
var onMapMouseleaveHandler = function(event) {
	var that = $(this);
	that.on('click', onMapClickHandler);
	that.off('mouseleave', onMapMouseleaveHandler);
	that.find('iframe').css("pointer-events", "none");
}
var onMapClickHandler = function(event) {
		var that = $(this);
		// Disable the click handler until the user leaves the map area
		that.off('click', onMapClickHandler);
		// Enable scrolling zoom
		that.find('iframe').css("pointer-events", "auto");
		// Handle the mouse leave event
		that.on('mouseleave', onMapMouseleaveHandler);
	}
	// Enable map zooming with mouse scroll when the user clicks the map
$('.map').on('click', onMapClickHandler);


$(document).on('click', '.sidebar-link , .profile-link', function() {
	var clName = $(this).attr('class');
	var sidebar = $('.sidebar_cotainer');
	var wrapper = $('.js-body-wrapper');
	if(clName == 'profile-link') {
		wrapper.fadeIn();
		$('body').addClass('bd-scroll');
		sidebar.addClass('menu-toggle');
	}

	if(clName == 'sidebar-link') {
		sidebar.removeClass('menu-toggle');
		wrapper.fadeOut();
		$('body').removeClass('bd-scroll');
	}
});

$(document).on('click', '.js-body-wrapper', function() {
	$(this).fadeOut();
	$('body').removeClass('bd-scroll');
	$('.sidebar_cotainer').removeClass('menu-toggle');
});

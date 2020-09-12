(function() {


}).call(this);


$(function(){
	$('.linkInThePage').click( function () {
		var hrefValue = jQuery(this).attr( 'href' );
		$(hrefValue).animatescroll({padding:70});
	} );
} );
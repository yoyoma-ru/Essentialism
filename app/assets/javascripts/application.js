// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require rails-ujs
//= require bootstrap-sprockets
//= require activestorage
//= require turbolinks
//= require_tree ../../../app/assets/javascripts/.
//= require_tree .

// ハンバーガー
$(document).on('turbolinks:load', function(){
	$('.menu-trigger').on('click', function(event){
		$(this).toggleClass('active');
		$('#sp-menu').fadeToggle();
		$('#top-image-items').fadeToggle();
		event.preventDefault();
	});
});
// ハンバーガー機能



// topページ画像の高さ指定
$(document).ready(function () {
    hsize = $(window).height();
    $(".top-images-box").css("height", hsize - 60 + "px");
});
$(window).resize(function () {
    hsize = $(window).height();
    $(".top-images-box").css("height", hsize - 60 + "px");
});



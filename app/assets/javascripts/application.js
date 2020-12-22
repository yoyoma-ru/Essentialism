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

$(function(){
	$('.linkInThePage').click( function () {
		var hrefValue = jQuery(this).attr( 'href' );
		$(hrefValue).animatescroll({padding:70},800);
	} );
});

// topページskippr
$(document).ready(function(){
	$("#top-image-items").skippr({
	transition : 'slide',
	speed : 500,
	easing : 'easeOutQuart',
	navType : 'block',
	childrenElemntType : 'div',
	arrows : true,
	autoPlay : true,
	autoPlayDuration : 3000,
	keyboardOnAlways : true,
	hedePrevious : true,
    });
});
// topページskippr

// topページ画像の高さ指定
$(document).ready(function () {
    hsize = $(window).height();
    $(".top-images-box").css("height", hsize - 60 + "px");
});
$(window).resize(function () {
    hsize = $(window).height();
    $(".top-images-box").css("height", hsize - 60 + "px");
});
// topページ画像の高さ指定


// workのwritingを非同期通信で処理
$(document).on('turbolinks:load', function(){
	$(".step-logo").on('click', function(){
		$(this).css('color', 'red');
	});
	$("#new_work").on('submit', function(e){
		console.log("start");
		e.preventDefault();
		var message = new FormData(this);
		var url = $(this).attr('action')
		// var url = $(this).attr('action');
		console.log("url");
	});
});


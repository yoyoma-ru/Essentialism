$(document).on('turbolinks:load',function(){
	// $(".footer").hide();
	// ↓top.html 写真の遷移
	const images = document.querySelectorAll(".observer-box");
	const options = {
		root: null,
		rootMargin: "0px 0px -90% 0px",
		// rootMargin: "-50% 0px",
		threshold: 0
	};
	const observer = new IntersectionObserver(
		doWhenIntersect, options);
	images.forEach(image =>{
		observer.observe(image);
	});


	// ↓about.html
	const boxes = document.querySelectorAll(".about-box");
	const aboutOptions = {
		root: null,
		rootMargin: "-50% 0px",
		threshold: 0
	};
	const aboutObserver = new IntersectionObserver(
		aboutIntersect, aboutOptions);
	boxes.forEach(box =>{
		aboutObserver.observe(box);
	});

	ScrollReveal().reveal(".about-box",{
		delay: 300,
		duration: 2000,
		opacity: 0.02,
		viewFactor: 0.2
	});
});


// ↓top.html
function doWhenIntersect(entries){
	entries.forEach(entry =>{
		if(entry.isIntersecting){
			activateImage(entry.target);
			// スクロールの停止
			no_scroll();
			setTimeout(return_scroll, 3500);
		}
	});
}
function activateImage(element){
	const currentLeaveImage = document.querySelector(
		"#image-frame .is-leave");
	if(currentLeaveImage !== null){
		currentLeaveImage.classList.remove("is-leave");
	}

	const currentActiveIndex = document.querySelector(
		"#image-frame .is-active");
	if(currentActiveIndex !== null){
		currentActiveIndex.classList.remove("is-active");
		currentActiveIndex.classList.add("is-leave");
	}

	const currentActiveText = $("#image-frame").find(".is-active2");
	if(currentActiveText.length !== 0){
		currentActiveText[0].classList.remove("is-active2");
	}

	const newActiveImage = document.querySelector(
		`div[class="image-style ${element.id}"]`
	);
	newActiveImage.classList.add("is-active");

	const newActiveText = $(newActiveImage).find(".text-box");
	newActiveText[0].classList.add("is-active2");
}
// スクロール禁止
function no_scroll() {
    // PCでのスクロール禁止
    document.addEventListener("mousewheel", scroll_control, { passive: false });
    // スマホでのタッチ操作でのスクロール禁止
    document.addEventListener("touchmove", scroll_control, { passive: false });
}
// スクロール禁止解除
function return_scroll() {
    // PCでのスクロール禁止解除
    document.removeEventListener("mousewheel", scroll_control, { passive: false });
    // スマホでのタッチ操作でのスクロール禁止解除
    document.removeEventListener('touchmove', scroll_control, { passive: false });
}
// スクロール関連メソッド
function scroll_control(event) {
    event.preventDefault();
}


// ↓about.html
function aboutIntersect(entries){
	entries.forEach(entry =>{
		if(entry.isIntersecting){
			activateIndex(entry.target);
		}
	});
}
function activateIndex(element){
	const activeIndex = document.querySelector("#indexList .active");
	if(activeIndex !== null){
		activeIndex.classList.remove("active");
	}
	const newActiveIndex = document.querySelector(`a[href='#${element.id}']`);
	newActiveIndex.classList.add("active");
}
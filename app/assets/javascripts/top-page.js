onload = function(){
	// ↓top.html
	const images = document.querySelectorAll(".observer-box");
	console.log(images);

	const options = {
		root: null,
		rootMargin: "0px 0px -90% 0px",
		threshold: 0
	};
	const observer = new IntersectionObserver(
		doWhenIntersect, options);
	console.log(observer);
	images.forEach(image =>{
		observer.observe(image);
	});


	// ↓about.html
	const boxes = document.querySelectorAll(".about-box");
	console.log(boxes);
	const aboutOptions = {
		root: null,
		rootMargin: "-50% 0px",
		threshold: 0
	};
	const aboutObserver = new IntersectionObserver(
		aboutIntersect, aboutOptions);
	console.log(aboutObserver);
	boxes.forEach(box =>{
		aboutObserver.observe(box);
	});
}

// ↓top.html
function doWhenIntersect(entries){
	console.log(entries);
	entries.forEach(entry =>{
		if(entry.isIntersecting){
			console.log(entry.target);
			activateImage(entry.target);
		}
	});
}
function activateImage(element){
	console.log(element);
	const currentLeaveImage = document.querySelector(
		"#image-frame .is-leave");
	if(currentLeaveImage !== null){
		currentLeaveImage.classList.remove("is-leave");
		console.log("leave");
	}

	const currentActiveIndex = document.querySelector(
		"#image-frame .is-active");
	console.log(currentActiveIndex);
	if(currentActiveIndex !== null){
		currentActiveIndex.classList.remove("is-active");
		currentActiveIndex.classList.add("is-leave");
		console.log("image-add image-remove");
	}

	const currentActiveText = $("#image-frame").find(".is-active2");
	console.log(currentActiveText[0]);
	if(currentActiveText.length !== 0){
		currentActiveText[0].classList.remove("is-active2");
		// currentActiveText[0].classList.add(element.id);
		console.log("text remove");
	}

	const newActiveImage = document.querySelector(
		`div[class="image-style ${element.id}"]`
	);
	console.log(newActiveImage)
	newActiveImage.classList.add("is-active");

	const newActiveText = $(newActiveImage).find(".text-box");
	console.log(newActiveText);
	newActiveText[0].classList.add("is-active2");
}


// ↓about.html
function aboutIntersect(entries){
	console.log(entries);
	entries.forEach(entry =>{
		if(entry.isIntersecting){
			activateIndex(entry.target);
		}
	});
}
function activateIndex(element){
	const activeIndex = document.querySelector("#indexList .active");
	console.log(activeIndex);
	if(activeIndex !== null){
		activeIndex.classList.remove("active");
	}
	const newActiveIndex = document.querySelector(`a[href='#${element.id}']`);
	newActiveIndex.classList.add("active");
}
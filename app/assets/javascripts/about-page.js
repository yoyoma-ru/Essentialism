onload = function(){
	const boxes = document.querySelectorAll(".about-boxes");
	console.log(boxes);
	const aboutOptions = {
		root: null,
		rootMargin: "-50% 0",
		threshold: 0
	};
	const abouObserver = new IntersectionObserver(aboutIntersect, aboutOptions);
	boxes.forEach(box =>{
		aboutObserver.observe(box);
	});
}

function aboutIntersect(entries){
	entries.forEach(entry =>{
		if(entry.isIntersecting){
			activateIndex(entry.target);
		}
	});
}
function activateIndex(element){
	const activeIndex = document.querySelector("#indexList .active");
	if(activateIndex !== null){
		activateIndex.classList.remove("active");
	}
	const newActiveIndex = document.querySelector(`a[href='#${lemnt.id}']`);
	newActiveIndex.classList.add("active");
}
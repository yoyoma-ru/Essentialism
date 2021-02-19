// chapter関連
$(document).on("turbolinks:load", function(){
	ScrollReveal().reveal(".chapter-headline",{
		duration: 2000,
	});
	ScrollReveal().reveal(".point",{
		delay: 400,
		duration: 2000,
		origin: "right",
		distance: "50px",
	});
	ScrollReveal().reveal(".quotations",{
		delay: 100,
		duration: 2000,
	});

	ScrollReveal().reveal(".chapter_text-item",{
		delay: 100,
		viewFactor: 0.2,
		duration: 3000
	});
	ScrollReveal().reveal(".chapterText",{
		delay: 100,
		viewFactor: 0.1,
		duration: 2000
	});
});

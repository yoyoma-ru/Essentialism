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

$(function(){
	function createHTML1(memo){
		let html = `<div id="memo${memo.id}">
						<div class="row">
				    		<div class="col-sm-offset-1 col-sm-10 non_essential-memo">
				    			${memo.memo}
				    		</div>
						</div>
						<span><a class="btn btn-danger btn-sm pull-right memo_delete" rel="nofollow" data-method="delete" href="/learns/${memo.id}">削除</a></span>
						<span><a class="btn btn-success btn-sm pull-right" href="/learns/${memo.id}/edit">編集</a></span>
						<br>
					</div>`
		return html;
	}
	function createHTML2(memo){
		let html = `<div id="memo${memo.id}">
						<div class="row">
				    		<div class="col-sm-offset-1 col-sm-10 essential-memo">
				    			${memo.memo}
				    		</div>
						</div>
						<span><a class="btn btn-danger btn-sm pull-right memo_delete" rel="nofollow" data-method="delete" href="/learns/${memo.id}">削除</a></span>
						<span><a class="btn btn-success btn-sm pull-right" href="/learns/${memo.id}/edit">編集</a></span>
						<br>
					</div>`
		return html;
	}
	// non_essentialのメモの作成
	$("#non_essential_input").on("submit", function(e){
		e.preventDefault();
		e.stopPropagation();
		console.log("非同期通信start");
		let inputText = $(".memo_input").val();
		let inputUserId = $(".user_id_input").val();
		let inputChapter = $(".chapter_input").val();
		let inputEssentialType = $(".essential_type_input").val();
		let url = $(this).attr("action");
		console.log(inputText);
		console.log(url);
		$.ajax({
			url: url,
			type: "POST",
			data: {
					learn: {memo: inputText,
							user_id: inputUserId,
							chapter: inputChapter,
							essential_type: inputEssentialType
						}
			},
			dataType: "json"
		})
		.done(function(data){
			console.log(data);
			let html = createHTML1(data);
			console.log(html);
			$(".non_essential-display").append(html);
			$(".memo_input").val("");
			console.log("非同期通信での作成に成功");
		})
		.fail(function(){
			alert("エラーが発生したため作成できませんでした。");
		})
		.always(function(){
			$(".memo_form-btn").prop("disabled", false);
			$(".memo_form-btn").removeAttr("data-disable-width");
		});
	});
	// essentialメモの作成
	$("#essential_input").on("submit", function(e){
		e.preventDefault();
		e.stopPropagation();
		console.log("非同期通信start");
		let inputText = $("#memo_input").val();
		let inputUserId = $(".user_id_input").val();
		let inputChapter = $(".chapter_input").val();
		let inputEssentialType = $(".essential_type_input").val();
		let url = $(this).attr("action");
		console.log(inputText);
		console.log(inputUserId);
		console.log(inputChapter);
		console.log(inputEssentialType);
		console.log(url);
		$.ajax({
			url: url,
			type: "POST",
			data: {
					learn: {memo: inputText,
							user_id: inputUserId,
							chapter: inputChapter,
							essential_type: inputEssentialType
						}
			},
			dataType: "json"
		})
		.done(function(data){
			console.log(data);
			let html = createHTML2(data);
			console.log(html);
			$(".essential-display").append(html);
			$(".memo_input").val("");
			console.log("非同期通信での作成に成功");
		})
		.fail(function(){
			alert("エラーが発生したため作成できませんでした。");
		})
		.always(function(){
			$(".memo_form-btn").prop("disabled", false);
			$(".memo_form-btn").removeAttr("data-disable-width");
		});
	});
	// memoのdelete処理
	$(".memo-display").on("click", ".memo_delete", function(e){
		e.preventDefault();
		e.stopPropagation();
		let url = $(this).attr("href");
		console.log(url);
		$.ajax({
			url: url,
			type: "POST",
			data: { _method: "delete"},
			dataType: "json"
		})
		.done(function(data){
			console.log(data);
			$("#memo" + data.id).remove();
		})
		.fail(function(XMLHttpRequest){
			alert(XMLHttpRequest.status);
		});
	});
});
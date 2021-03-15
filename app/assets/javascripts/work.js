// indexページ、矢印の表示
$(function(){
	var arrows = setInterval(showArrow, 3800);
	let arrow = $(".arrow");
	let hArrow = $(".hide-arrow");
	function showArrow(){
		arrow.hide();
		hArrow.hide();
		arrow.show(1500, "linear", hideArrow);
	}
	function hideArrow(){
		hArrow.show(2000, "linear");
	}
});


// workメモの作成、編集、削除に関して
$(document).on("turbolinks:load", function(){
	function createHTML(work){
		let html = `<div id="writing${work.id}" class="col-xs-6 left-line">
				    	<div id="js-writing-label-${work.id}">${work.writing}</div>
				    	<p id="js-writing-post-error-${work.id}" class="text-danger"></p>
				    	<textarea style="display: none;" id="js-textarea-writing-${work.id}" class="form-control writing-post-error">${work.writing}</textarea>
				    	<div id="js-writing-button-${work.id}" class="js-right" style="display: none;">
							<button data-cancel-id=${work.id} type="button" class="btn btn-xs writing-cancel-button">キャンセル</button>
							<button data-update-id=${work.id} type="submit" class="btn btn-xs btn-success writing-update-button">更新</button>
						</div>
						<div id="js-writing-edit-delete-${work.id}" class="pull-right">
							<span data-writing-id=${work.id} class="js-edit-writing-button">
								<i class="fas fa-edit text-success"></i>
							</span>
							<span> / </span>
							<span><a class="writing_delete" rel="nofollow" data-method="delete" href="/works/${work.id}">
								<i class="fas fa-trash-alt text-danger"></i>
							</a></span>
						</div>
						<br>
				    	<div class="writing-border_bottom"></div>
				    </div>`
		return html;
	}
	// workの非同期通信の作成
	$("#work_input").on("submit", function(e){
		e.preventDefault();
		e.stopPropagation();
		console.log("非同期通信開始");
		let inputText = $("#writing_input").val();
		let inputUserId = $("#user_id_input").val();
		let inputGenre = $("#genre_input").val();
		let url = $(this).attr("action");
		console.log(inputText);
		console.log(inputGenre);
		console.log(url);
		$.ajax({
			url: url,
			type: "POST",
			data: {
					work: {writing: inputText,
						user_id: inputUserId,
						genre: inputGenre
					}
			},
			dataType: "json"
		})
		.done(function(data){
			console.log(data);
			let html = createHTML(data);
			console.log(html);
			$("#work-lists").append(html);
			$("#writing_input").val("");
			console.log("非同期通信での作成に成功");
		})
		.fail(function(){
			alert("エラーが発生したため作成できませんでした。");
		})
		.always(function(){
			$(".writing_form-btn").prop("disabled", false);
			$(".writing_form-btn").removeAttr("data-disable-width");
		});
	});

	// workの非同期通信によるdelete処理
	$(".work-display").on("click", ".writing_delete", function(e){
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
			$("#writing" + data.id).remove();
		})
		.fail(function(XMLHttpRequest){
			alert(XMLHttpRequest.status);
		});
	});

	// update処理を非同期通信で実行
	$(".work-display").on("click", ".js-edit-writing-button", function(){
		// data属性を使ってHTMLで"data-"で記述したものをとってくる
		const writingId = $(this).data("writing-id");
		const writingLabelArea = $("#js-writing-label-"+writingId);
		const writingTextArea = $("#js-textarea-writing-"+writingId);
		const writingButton = $("#js-writing-button-"+writingId);
		const writingEditDelete = $("#js-writing-edit-delete-"+writingId);

		writingLabelArea.hide();
		writingTextArea.show();
		writingButton.show();
		writingEditDelete.hide();
	});
	// 編集エリアを「キャンセル」を押して非同期通信で非表示
	$(".work-display").on("click", ".writing-cancel-button", function(){
		const writingId = $(this).data("cancel-id");
		const writingLabelArea = $("#js-writing-label-"+writingId);
		const writingTextArea = $("#js-textarea-writing-"+writingId);
		const writingButton = $("#js-writing-button-"+writingId);
		const writingError = $("#js-writing-post-"+writingId);
		const writingEditDelete = $("#js-writing-edit-delete-"+writingId);

		writingLabelArea.show();
		writingTextArea.hide();
		writingButton.hide();
		writingError.hide();
		writingEditDelete.show();
		console.log("編集エリアの非表示に成功");
	});
	// updateを非同期通信
	$(".work-display").on("click", ".writing-update-button", function(){
		const writingId = $(this).data("update-id");
		const writingField = $("#js-textarea-writing-"+writingId);
		const body = writingField.val();
		console.log(body);

		$.ajax({
			url: "/works/"+writingId,
			type: "POST",
			data: {
				_method: "PATCH",
				work: {writing: body}
			},
			dataType: "json"
		})
		.done(function(data){
			console.log(data);
			const writingLabelArea = $("#js-writing-label-"+writingId);
			const writingTextArea = $("#js-textarea-writing-"+writingId);
			const writingButton = $("#js-writing-button-"+writingId);
			const writingError = $("#js-writing-post-error-"+writingId);
			const writingEditDelete = $("#js-writing-edit-delete-"+writingId);

			writingLabelArea.show();
			writingLabelArea.text(data.writing);
			writingTextArea.hide();
			writingButton.hide();
			writingError.hide();
			writingEditDelete.show();
			console.log("更新完了");
		})
		.fail(function(){
			const writingError = $("#js-writing-post-error-"+writingId);
			writingError.text("コメントを入力して下さい");
		});
	});
});
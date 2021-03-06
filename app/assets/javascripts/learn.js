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


	// case-study-boxの表示に関して
	$(".sentence").hide();
	ScrollReveal().reveal(".chapter_text-item",{
		delay: 100,
		viewFactor: 0.2,
		duration: 3000
	});
	$(window).scroll(function(){
		var currentHeight = $(window).scrollTop();
		const appearenceHeight1 = $(".case-study-box").offset();
		if(appearenceHeight1.top - 100 < currentHeight){
			$(".sentence").slideDown("slow");
		}
	});


	// ScrollReveal().reveal(".ex-textBox",{
	// 	delay: 100,
	// 	viewFactor: 0.1,
	// 	duration: 2000
	// });
	ScrollReveal().reveal(".ex-right",{
		delay: 100,
		viewFactor: 0.7,
		duration: 2000,
		origin: "right",
		distance: "50%"
	});
	ScrollReveal().reveal(".ex-left",{
		delay: 100,
		viewFactor: 0.7,
		duration: 2000,
		origin: "left",
		distance: "50%"
	});
});



$(document).on("turbolinks:load", function(){
	// メモのテキストエリアの表示
	$(function(){
		$("#memoBtn").hide();
		$('.cb-value').click(function() {
			var mainParent = $(this).parent('.toggle-btn');
			if($(mainParent).find('input.cb-value').is(':checked')) {
				$(mainParent).addClass('active');
			} else {
				$(mainParent).removeClass('active');
			}
		});
		$(window).scroll(function(){
			var currentHeight = $(this).scrollTop();
			// ボタンの出現ポイントを100vhより下の時に
			const appearenceHeight2 = $(window).height();
			if(appearenceHeight2 < currentHeight){
				$("#memoBtn").fadeIn("slow");
			}else if(appearenceHeight2 > currentHeight){
				$("#memoBtn, #display-memoBtn").fadeOut("slow");
				$(".cb-value").prop("checked", false);
				$("#memoBtn .toggle-btn").removeClass('active');
			}
		});

		function buttonChange(){
			var id = $(this).attr("id");
			$("#display-" + id).toggle();
		}
		$(function(){
			$("#memoBtn").on("click", buttonChange);
		});
	});

	$(function(){
		function tabChange(){
			// タブエリア
			$("#tabArea .tab").removeClass("active");
			$("#memoArea div").hide();
			// タブとメモを表示
			$(this).addClass("active");
			var id = $(this).attr("id");
			var memoArea = id + "-memoArea";
			$("#" + memoArea).show();
			// checkの表示
			$(".checkBox i").hide()
			$(".checked-" + id).show();
		}

		$(function(){
			$("#tabArea .tab").on("click", tabChange);
		});
	})


	// メモの作成、編集、削除に関して
	$(function(){
		function createHTML1(learn){
			let html = `<div id="memo${learn.id}">
						    <div id="js-memo-label-${learn.id}" class="non_essential-memo">${learn.memo}</div>
							<div>
								<p id="js-memo-post-error-${learn.id}" class="text-danger"></p>
								<textarea style="display: none" id="js-textarea-memo-${learn.id}" class="form-control memo-post-error">${learn.memo}</textarea>
								<div id="js-memo-button-${learn.id}" class="js-right" style="display: none;">
									<button data-cancel-id=${learn.id} type="button" class="btn btn-xs btn-light memo-cancel-button">キャンセル</button>
									<button data-update-id=${learn.id} type="submit" class="btn btn-xs btn-success memo-update-button">更新</button>
								</div>
								<div id="js-memo-edit-delete-${learn.id}" class="pull-right">
									<span data-memo-id=${learn.id} class="js-edit-memo-button">
										<i class="fas fa-edit text-success"></i>
									</span>
									<span> / </span>
									<span><a class="memo_delete" rel="nofollow" data-method="delete" href="/learns/${learn.id}">
										<i class="fas fa-trash-alt text-danger"></i>
									</a></span>
								</div>
							</div>
							<br>
							<div class="memo-border_bottom"></div>
						</div>`
			return html;
		}
		function createHTML2(learn){
			let html = `<div id="memo${learn.id}">
							<div id="js-memo-label-${learn.id}" class="essential-memo">${learn.memo}</div>
							<div>
								<p id="js-memo-post-error-${learn.id}" class="text-danger"></p>
								<textarea style="display: none" id="js-textarea-memo-${learn.id}" class="form-control memo-post-error">${learn.memo}</textarea>
								<div id="js-memo-button-${learn.id}" class="js-right" style="display: none;">
									<button data-cancel-id=${learn.id} type="button" class="btn btn-xs btn-light memo-cancel-button">キャンセル</button>
									<button data-update-id=${learn.id} type="submit" class="btn btn-xs btn-success memo-update-button">更新</button>
								</div>
								<div id="js-memo-edit-delete-${learn.id}" class="pull-right">
									<span data-memo-id=${learn.id} class="js-edit-memo-button">
										<i class="fas fa-edit text-success"></i>
									</span>
									<span> / </span>
									<span><a class="memo_delete" rel="nofollow" data-method="delete" href="/learns/${learn.id}">
										<i class="fas fa-trash-alt text-danger"></i>
									</a></span>
								</div>
							</div>
							<br>
							<div class="memo-border_bottom"></div>
						</div>`
			return html;
		}
		// non_essentialのメモの作成
		$("#non_essential_input").on("submit", function(e){
			e.preventDefault();
			e.stopPropagation();
			let inputText = $("#non_essential-memo_input").val();
			let inputUserId = $(".user_id_input").val();
			let inputChapter = $(".chapter_input").val();
			let inputEssentialType = $(".non_essential_type_input").val();
			let url = $(this).attr("action");
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
				let html = createHTML1(data);
				$(".non_essential-display").append(html);
				$("#non_essential-memo_input").val("");
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
			let inputText = $("#essential-memo_input").val();
			let inputUserId = $(".user_id_input").val();
			let inputChapter = $(".chapter_input").val();
			let inputEssentialType = $(".essential_type_input").val();
			let url = $(this).attr("action");
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
				let html = createHTML2(data);
				$(".essential-display").append(html);
				var i = $("_memo_inut").val();
				$("#essential-memo_input").val("");
			})
			.fail(function(){
				alert("エラーが発生したため作成できませんでした。");
			})
			.always(function(){
				$(".memo_form-btn").prop("disabled", false);
				$(".memo_form-btn").removeAttr("data-disable-width");
			});
		});

		// update処理を非同期通信で実行
		$(".memo-display").on("click", ".js-edit-memo-button", function(){
			// data属性を使ってHTMLで"data-"で記述したものをとってくる
			const memoId = $(this).data("memo-id");
			const memoLabelArea = $("#js-memo-label-"+memoId);
			const memoTextArea = $("#js-textarea-memo-"+memoId);
			const memoButton = $("#js-memo-button-"+memoId);
			const memoEditDelete = $("#js-memo-edit-delete-"+memoId);

			memoLabelArea.hide();
			memoTextArea.show();
			memoButton.show();
			memoEditDelete.hide();
		});
		// memo編集エリアを「キャンセル」を押して非同期通信で非表示
		$(".memo-display").on("click", ".memo-cancel-button", function(){
			const memoId = $(this).data("cancel-id");
			const memoLabelArea = $("#js-memo-label-"+memoId);
			const memoTextArea = $("#js-textarea-memo-"+memoId);
			const memoButton = $("#js-memo-button-"+memoId);
			const memoError = $("#js-memo-post-"+memoId);
			const memoEditDelete = $("#js-memo-edit-delete-"+memoId);

			memoLabelArea.show();
			memoTextArea.hide();
			memoButton.hide();
			memoError.hide();
			memoEditDelete.show();
		});
		// memoを非同期通信で更新
		$(".memo-display").on("click", ".memo-update-button", function(){
			const memoId = $(this).data("update-id");
			const memoField = $("#js-textarea-memo-"+memoId);
			const body = memoField.val();

			$.ajax({
				url: "/learns/"+memoId,
				type: "POST",
				data: {
					_method: "PATCH",
					learn: {memo: body}
				},
				dataType: "json"
			})
			.done(function(data){
				const memoLabelArea = $("#js-memo-label-"+memoId);
				const memoTextArea = $("#js-textarea-memo-"+memoId);
				const memoButton = $("#js-memo-button-"+memoId);
				const memoError = $("#js-memo-post-error-"+memoId);
				const memoEditDelete = $("#js-memo-edit-delete-"+memoId);

				memoLabelArea.show();
				memoLabelArea.text(data.memo);
				memoTextArea.hide();
				memoButton.hide();
				memoError.hide();
				memoEditDelete.show();
			})
			.fail(function(){
				const memoError = $("#js-memo-post-error-"+memoId);
				memoError.text("コメントを入力して下さい");
			});
		});

		// memoのdelete処理
		$(".memo-display").on("click", ".memo_delete", function(e){
			e.preventDefault();
			e.stopPropagation();
			let url = $(this).attr("href");
			$.ajax({
				url: url,
				type: "POST",
				data: { _method: "delete"},
				dataType: "json"
			})
			.done(function(data){
				$("#memo" + data.id).remove();
			})
			.fail(function(XMLHttpRequest){
				alert(XMLHttpRequest.status);
			});
		});
	});
});

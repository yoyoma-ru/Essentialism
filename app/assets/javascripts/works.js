$(document).on('turbolinks:load', function(){
	function buildTHML(work){
		var writing = work.writing ?  `${work.writing}` : "";
		var html =  `<div class="work" data-id="work.id">
						<div class="non_essential">${work.writing}</div>
					</div> `
		return html;
	}
	$('#new_work').on('submit', function(e){
		e.preventDefault():
		var work = new FormDate(this):
		var url = (window.location.href);
		$.ajax({
			url: url,
			type: 'POST',
			data: work,
			dataType: 'json',
			processData: false,
			contentType: false,
		})
		.done(function(data){
			var html = buildTHML(data);
			$('.work_writings').append(html);
			$('#work_writing').val("");
		})
		.fail(function(data){
			alert('エラーが発生したため送信できませんでした');
		})
		.always(function(data){
			$('submit-btn').prop('disabled', false);
		})
	});
});
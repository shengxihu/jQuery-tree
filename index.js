$(function(){
	$("li:has('ul')").addClass('files')
		.bind('click',function(event){
			if(this==event.target){
				if ($(this).children().is(":visible")) {
					$(this).children().slideUp('fast', function() {
						$(this).parent().removeClass()
							.addClass('close_files')
					});
				}else{
					$(this).children().slideDown('fast', function() {
						$(this).parent().removeClass()
							.addClass('open_files')
					});
				}
			}
			event.stopPropagation();
		})
		.children().addClass('inner_ul')
})
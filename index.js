$(function(){
	$("ul").css({
		"list-style-image": "url(images/item_files.svg)",
		"list-style-type":"square"
	});
	$("li:has('ul')").css({
		"list-style-image": "url(images/close_files.svg)",
		"list-style-type":"square"
	})
		.bind('click',function(event){
			if ($(this).children().is(":visible")) {
				$(this).children().hide('fast', function() {
					$(this).parent().css({
						"list-style-image": "url(images/close_files.svg)",
						"list-style-type":"square"
					})
				});
			}else{
				$(this).children().show('fast', function() {
					$(this).parent().css({
						"list-style-image": "url(images/open_files.svg)",
						"list-style-type":"square"
					})
				});
			}
			event.stopPropagation();
		})
		.children().css({
			"display":"none"
		})
})
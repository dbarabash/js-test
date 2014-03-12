/**
 * @author dmitriy
 */
jQuery(function($){
	Model.load("page1");
	Model.load("page2");
	$('body').delegate("#news", 'click', function(e){
		var	page = Model.find("page1");
		console.log(page);
		
		var element = $("#dataTemplate").tmpl(page);
		console.log(element);
		$("#data").empty();
		element.appendTo($("#data"));
	});
	$('body').delegate("#about", 'click', function(e){
		var	page = Model.find("page2");
		console.log(page);
		
		var element = $("#dataTemplate").tmpl(page);
		console.log(element);
		$("#data").empty();
		element.appendTo($("#data"));
	});
	$("#news").trigger('click');
});

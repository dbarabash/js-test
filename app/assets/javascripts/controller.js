/**
 * @author dmitriy
 */
jQuery(function($){
	Model.load("page1");
	Model.load("page2");
	$('body').delegate('page1', 'click', function(e){ 
		var page = Model.find("Page1");
		
	});
	$('body').delegate('page2', 'click', function(e){
		var page = Model.find("Page2");
	});
});

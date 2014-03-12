/**
 * @author dmitriy
 */

var Model = {
	pages: { "page1": null, "page2": null },
	
	find: function(page) {
		console.log("this = " + this);
		console.log("page = " + page);
		console.log("this.pages[page] = " + this.pages[page]);
		if (!this.pages[page]) {
			this.load(page);
		}
		return this.pages[page];
	},
	
	load: function(page) {
		var self = this;
		if (!self.pages[page]) {
			jQuery.get(page, {}, function(data){
					self.pages[page] = data; 
				}, 'json');
		}
	},
	
	prototipe: {
		init: function() {
			
		}
	},
	
	init: function() {
		var instance = Object.create(this.prototype);
		instance.parent = this;
		instance.init.apply(instance, arguments);
		return instance;
	}
};

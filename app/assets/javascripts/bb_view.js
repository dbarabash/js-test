/**
 * @author dmitriy
 */


var Block = Backbone.View.extend({

    templates: { // Шаблоны на разное состояние
        "start": _.template($('#start').html()),
        "success": _.template($('#success').html()),
        "error": _.template($('#error').html())
    },

	initialize: function () { // Подписка на событие модели
		this.model.bind('change', this.render, this);
	},        

    el: $("#block"), // DOM элемент widget'а

    events: {
        "click input:button": "check" // Обработчик клика на кнопке "Проверить"
    },

    check: function () {

        var username = this.$el.find("input:text").val();
        var find = MyFamily.checkUser(username); // Проверка имени пользователя
        appState.set({ // Сохранение имени пользователя и состояния
            "state": find ? "success" : "error",
            "username": username
        }); 
    },

    render: function () {
            var state = this.model.get("state");
            this.$el.html(this.templates[state](this.model.toJSON()));
            return this;
        }
});

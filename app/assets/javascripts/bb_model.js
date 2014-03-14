// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.


var UserNameModel = Backbone.Model.extend({ // Модель пользователя
        defaults: {
            "Name": ""
        }
    });

var Family = Backbone.Collection.extend({ // Коллекция пользователей
        model: UserNameModel,
        checkUser: function (username) { // Проверка пользователя
            var findResult = this.find(function (user) { return user.get("Name") == username })
            return findResult != null;
        }
    });
        
var AppState = Backbone.Model.extend({
    defaults: {
        username: "",
        state: "start"
    }
});

Backbone.history.start();  // Запускаем HTML5 History push    



var controller = new Controller(); // Создаём контроллер
var appState = new AppState();
var block = new Block({ model: appState });
var MyFamily = new Family([ // Моя семья
                { Name: "Саша" },
                { Name: "Юля" },
                { Name: "Елизар" }
            ]);
appState.bind("change:state", function () { // подписка на смену состояния для контроллера
    var state = this.get("state");
    if (state == "start")
        controller.navigate("!/", {trigger:false}); // false потому, что нам не надо 
                                          // вызывать обработчик у Router
    else
        controller.navigate("!/" + state, {trigger:false});
});

appState.trigger("change");

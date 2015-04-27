define(['ko', 'text!./tile--debug.tmpl.html'], function(ko, tmpl){
    function ViewModel(params){
        var self = this;

        self.messages =  ko.observableArray([]);

        self.text = ko.computed(function(){
            return self.messages()[self.messages().length - 1];
        });

        self.ws = new WebSocket("ws://echo.websocket.org");

        self.ws.onmessage = function(msg){
            self.messages.push(msg.data + ': ' + Date.now());
        };

        self.ws.onopen = setInterval(function(){
            self.ws.send(self.messages().length);
        }, 1000);
    }

    return {
        viewModel: ViewModel,
        template: tmpl
    };
});
define(['ko', 'text!./tile--boolean.tmpl.html'], function(ko, tmpl){
    function ViewModel(){
        var self = this;

        self.messages =  ko.observableArray([]);

        self.text = ko.computed(function(){
            return self.messages().join('\n');
        });

        self.ws = new WebSocket("ws://echo.websocket.org");

        self.ws.onmessage = function(msg){
            self.messages.push(msg.data);
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
define(['ko', 'text!./tile--debug.tmpl.html'], function(ko, tmpl){
    function TileDebug(){
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
        viewModel: TileDebug,
        template: tmpl
    };
});
define(['ko', 'text!./tile--boolean.tmpl.html', 'reqwest'], function(ko, tmpl, reqwest){
    function doRequest(url, stack, sleep){
        reqwest({
            url: url,
            method: 'get',
            success: function(response){
                stack.push(response.value + ': ' + Date.now());

                setTimeout(function(){
                    doRequest(url, stack, sleep);
                }, sleep);
            }
        });
    }

    function doSocket(url, stack){
        var ws = new WebSocket(url);

        ws.onmessage = function(msg){
            if(msg.data.hasOwnProperty('value')){
                stack.push(msg.data.value + ': ' + Date.now());
            }
        };
    }

    function ViewModel(params){
        var self = this;

        self.messages =  ko.observableArray([]);

        self.text = ko.computed(function(){
            return self.messages()[self.messages().length - 1];
        });

        if(params.options.method === "get"){
            doRequest(params.datapoint.url, self.messages, params.options.sleep);
        } else {
            doSocket(params.datapoint.websocket, self.messages);
        }
    }

    return {
        viewModel: ViewModel,
        template: tmpl
    };
});